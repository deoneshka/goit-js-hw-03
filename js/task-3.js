const findBestEmployee = function (employees) {
  const allTasks = Object.values(employees);
  
  let largestNumberOfTasks = allTasks[0];

  for (let i = 1; i < allTasks.length; i += 1) {
    if (allTasks[i] > largestNumberOfTasks) {
      largestNumberOfTasks = allTasks[i];
    }
  }

  let nameOfTheBestEmployee;

  for (const key in employees) {
    if (employees[key] === largestNumberOfTasks) {
      nameOfTheBestEmployee = key;
    }
  }

  return nameOfTheBestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux