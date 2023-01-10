export const renderStore = function () {
  let count = 0;
  setInterval(() => {
    const ele = document.getElementById('count') as HTMLElement;
    ele.innerHTML = ++count + '';
  }, 1000);
};
