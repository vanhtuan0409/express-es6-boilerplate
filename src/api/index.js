export function asyncSum(x, y) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(x + y);
    }, 2000);
  });
}
