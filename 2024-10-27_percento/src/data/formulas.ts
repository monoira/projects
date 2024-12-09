export const formulasArray = [
  {
    name: "getPercentage",
    code: `
function getPercentage(percentage: number, value: number) {
  return (percentage / 100) * value;
}

`,
  },
  {
    name: "sortAscendingly",
    code: `
function sortAscendingly(numbersArray: number[]) {
  return numbersArray.sort((a, b) => a - b);
}

`,
  },
  {
    name: "sortDescendingly",
    code: `
function sortDescendingly(numbersArray: number[]) {
  return numbersArray.sort((a, b) => b - a);
}

`,
  },
];
