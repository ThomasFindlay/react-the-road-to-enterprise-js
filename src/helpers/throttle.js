export const throttle = (fn, wait) => {
  let timerId;
  let inThrottle;
  let lastTime;

  return (...args) => {
    if (!inThrottle) {
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(timerId);

      timerId = setTimeout(
        () => {
          if (Date.now() - lastTime >= wait) {
            fn(...args);
            lastTime = Date.now();
          }
        },
        Math.max(wait - (Date.now() - lastTime), 0)
      );
    }
  };
};
