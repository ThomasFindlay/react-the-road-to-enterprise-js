import axios from 'axios';

// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL: import.meta.env.DEV ? 'http://localhost:4000/api' : '/',
};

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);

export const didAbort = (error) => axios.isCancel(error);

export const isApiError = (error) => {
  return axios.isAxiosError(error);
};

const withAbort = (fn) => {
  const executor = async (...args) => {
    const originalConfig = args[args.length - 1];
    // Extract abort property from the config
    const { abort: setAbortFn, ...config } = originalConfig;

    // Create cancel token and abort method only if abort
    // function was passed
    if (typeof setAbortFn === 'function') {
      // const { cancel, token } = getCancelSource()
      const abortController = new AbortController();
      // abortController.
      config.signal = abortController.signal;
      setAbortFn(() => {
        abortController.abort();
      });
    }

    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn(url, body, config);
      } else {
        const [url] = args;
        return await fn(url, config);
      }
    } catch (error) {
      // Add "aborted" property to the error if the request was cancelled
      if (didAbort(error)) {
        error.aborted = true;
      }

      throw error;
    }
  };

  return executor;
};

const withLogger = async (promise) =>
  promise.catch((error) => {
    /*
    Always log errors in dev environment
    if (process.env.NODE_ENV !== 'development') throw error      
  */
    // Log error only if VUE_APP_DEBUG_API env is set to true
    if (!import.meta.env.VITE_APP_DEBUG_API) throw error;
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest
      // in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);

    throw error;
  });

// Main api function
const api = (axios) => {
  return {
    get: (url, config = {}) => withLogger(withAbort(axios.get)(url, config)),
    delete: (url, config = {}) =>
      withLogger(withAbort(axios.delete)(url, config)),
    post: (url, body, config = {}) =>
      withLogger(withAbort(axios.post)(url, body, config)),
    patch: (url, body, config = {}) =>
      withLogger(withAbort(axios.post)(url, body, config)),
    put: (url, body, config = {}) =>
      withLogger(withAbort(axios.post)(url, body, config)),
  };
};

export default api(axiosInstance);
