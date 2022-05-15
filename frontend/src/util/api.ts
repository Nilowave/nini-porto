import axios from 'axios';

export type ApiAttributes<T = {}> = {
  createdAt: string;
  updatedAt: string;
  id: number;
  [key: string]: any;
  attributes?: T;
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
  post: async (url: string, body: any, config?: ApiConfig) => {
    const axi = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });

    const response = await axi.post(url, body);

    return response;
  },
  get: async (url: string, config?: ApiConfig) => {
    const axi = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
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

    if (config && config.isCollection) {
      const collection = (response as ApiCollection).map((item) => ({
        ...item.attributes,
        id: item.id,
      }));
      return collection as ApiCollection;
    }

    const returnValue = ((response as ApiData) || {}).attributes || response || null;

    return returnValue;
  },
};
