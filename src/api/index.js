export function resolveAfter2s(x) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(x);
    }, 2000);
  });
}
