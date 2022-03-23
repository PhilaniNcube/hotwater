import analytics from '../utils/analytics';

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const start = () => {
  console.log('start');

  analytics.track('start_recommendation');
};

export const savings = () => {
  console.log('saving');

  analytics.track('saving');
};

export const add_to_cart = (product) => {
  analytics.track('add_to_cart', {
    ecommerce: {
      items: [
        {
          item_id: product.sku,
          item_name: product.name,
          affiliation: 'Hotwater24',
          coupon: '',
          currency: 'ZAR',
          discount: 0,
          index: 0,
          item_brand: product.brand_id.name,
          item_category: 'Geyser',
          price: product.price,
          quantity: 1,
        },
      ],
    },
  });
};
