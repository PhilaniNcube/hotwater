export const pageview = (url) => {
  window.gtag('config', 'G-9S7607VTDS', {
    page_path: url,
  });
};
