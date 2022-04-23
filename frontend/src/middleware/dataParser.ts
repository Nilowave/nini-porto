export const DataParser = {
  onRequest(config: any) {
    console.log('reg', config.url);
    return config;
  },
  onResponse(response: any) {
    console.log('onResponse data data', response.data ? true : false);
    return response;
  },
};
