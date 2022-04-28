import axios from 'axios';

export type ApiAttributes = {
  createdAt: string;
  updatedAt: string;
  id: number;
  [key: string]: any;
};

export type ApiData = {
  attributes: ApiAttributes;
  id: number;
};

export type ApiCollection = Array<ApiAttributes>;

type ApiResponse = {
  data: ApiData | ApiCollection;
};

type ApiConfig = {
  isCollection: boolean;
};

export const api = {
  get: async (url: string, config?: ApiConfig) => {
    const axi = axios.create({
      baseURL: process.env.API_HOST,
    });

    axi.interceptors.response.use(
      (response) => {
        return response || {};
      },
      (error) => {
        console.log(error.response.statusText);
        return {};
      },
    );

    const response: ApiData | ApiCollection = { ...(await axi.get(url)).data }.data;

    // console.log(response);

    if (config && config.isCollection) {
      const collection = (response as ApiCollection).map((item) => ({
        ...item.attributes,
        id: item.id,
      }));
      return collection as ApiCollection;
    }

    return ((response as ApiData) || {}).attributes || null;
  },
};
