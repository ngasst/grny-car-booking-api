export const graphqlObjectMerge = (objects: { [key: string]: any }[]) => {
  const merged = objects.reduce((acc, curr) => {
    const keys = Object.keys(curr);
    for (const key of keys) {
      if (acc[key] && typeof curr[key] === 'object') {
        acc[key] = { ...acc[key], ...curr[key] };
      } else {
        acc[key] = curr[key];
      }
    }
    return acc;
  }, {});
  return merged;
};
