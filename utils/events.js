export const start = () => {
  window.dataLayer = [];
  window.dataLayer.push({ event: 'start_recommendation' });
};

export const savings = () => {
  window.dataLayer = [];
  window.dataLayer.push({ event: 'get_savings' });
};
