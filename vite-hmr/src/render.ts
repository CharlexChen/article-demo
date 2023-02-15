// render.ts

let timer: any;
if (import.meta.hot) {
  if (!import.meta.hot.data?.count) {
    import.meta.hot.data.count = 0
  }
  import.meta.hot.accept((newMod: any) => {
    newMod.renderPage();
  })
  import.meta.hot.dispose(() => {
    console.log('>>>dispose')
    if (timer) {
      clearInterval(timer)
    }
  })
}

export const renderPage = () => {
  const getCount = () => {
    const data = import.meta.hot?.data || {
      count: 0
    }
    data.count = data.count + 1
    return data.count
  }
  console.log('>>>setInterval-2')
  timer = setInterval(() => {
    console.log(getCount())
  }, 1000);
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
      <h1>This is a demo for Vite-HMR</h1>
      <p target="_blank">hmr is a excellent tool</p>
    `;
};
