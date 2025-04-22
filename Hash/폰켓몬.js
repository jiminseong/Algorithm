function solution(nums) {
  const set = new Set();
  nums.forEach((num) => {
    set.add(num);
  });

  console.log(set);

  return set.size >= nums.length / 2 ? nums.length / 2 : set.size;
}
