export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};

export const start = () => {
  console.log('start');

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'start_recommendation',
  });
};

export const savings = () => {
  console.log('saving');

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'savings',
  });
};
