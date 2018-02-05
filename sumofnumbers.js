const inputNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(inputNums));

function sumWhile(nums) {
  let total = 0;
  let loop = 0;
  while (loop < nums.length) {
    total += nums[loop];
    loop++;
  }
  return total;
}

console.log(sumWhile(inputNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(inputNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(inputNums));
