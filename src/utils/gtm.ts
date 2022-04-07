export const GTM_ID = process.env.NEXT_PUBLIC_GTM;

declare global {
  interface Window {
    dataLayer: any;
  }
}

export const pageview = (url: string): void => {
  window?.dataLayer?.push({
    event: 'pageview',
    page: url,
  });
};
