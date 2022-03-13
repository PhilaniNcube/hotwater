export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};

export const start = () => {
  window.dataLayer = [];
  window.datalayer.push({
    event: 'start_recommendation',
  });
};

export const savings = () => {
  window.dataLayer = [];
  window.dataLayer.push({
    event: 'savings',
  });
};
