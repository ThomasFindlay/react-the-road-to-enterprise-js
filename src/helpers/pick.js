export const pick = (obj, ...keys) => {
  let picked = {};
  for (const key of keys) {
    picked[key] = obj[key];
  }

  return picked;
};
