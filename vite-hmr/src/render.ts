

export const renderPage = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
      <h1>This is a demo for Vite-HMR</h1>
      <p target="_blank">hmr is a excellent tool</p>
    `;
};
