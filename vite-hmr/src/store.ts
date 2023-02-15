let timer: any;
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  })
}

export const renderStore = function () {
  let count = 0;
  // console.log(count);
  timer = setInterval(() => {
    const ele = document.getElementById('count') as HTMLElement;
    ele.innerHTML = ++count + '';
  }, 1000);
};
