export const formulasArray = [
  {
    name: "getPercentage",
    code: `
/**
* get percentage of integer or float
* e.g. getPercentage(20, 200) will return 40, since 20% of 200 is 40
*/
function getPercentage(percentage: number, value: number) {
  return (percentage / 100) * value;
}

`,
  },
  {
    name: "sortAscendingly",
    code: `
/* sorts array made entirely of integers or floats in ascending manner */
function sortAscendingly(numbersArray: number[]) {
  return numbersArray.sort((a, b) => a - b);
}

`,
  },
  {
    name: "sortDescendingly",
    code: `
/* sorts array made entirely of integers or floats in descending manner */
function sortDescendingly(numbersArray: number[]) {
  return numbersArray.sort((a, b) => b - a);
}

`,
  },
];
