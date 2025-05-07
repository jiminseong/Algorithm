function solution(n, a, b, products) {
  const minPriceArr = [];

  products.forEach((price) => {
    let aPrice = Infinity;
    let bPrice = Infinity;

    //A 할인 적용 경우
    if (price >= a * 2) aPrice = price - a;

    //B 할인 적용 경우
    bPrice = price - price * (b / 100);

    minPriceArr.push(Math.min(aPrice, bPrice));
  });
  return minPriceArr.reduce((a, b) => {
    return a + b;
  });
}

solution(3, 1000, 15, [2000, 10000, 3000]);
//11500
