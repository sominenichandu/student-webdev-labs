const formatItems = (input) => {
  return input.map((num) => num.toFixed(3)).join(", ");
};

console.log(formatItems([1, 4, 17, 26, 41]));

console.log(formatItems([34.0, 12.0, 13.7, 760.1, 10.5]));

console.log(formatItems([235.235778, 1.2346789, 14.7, 97.3, 714.1245678]));
