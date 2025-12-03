export const capitalizeFirst = str => {
  if (str === 'n/a') return '--';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
