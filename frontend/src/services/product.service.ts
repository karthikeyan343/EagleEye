import { productsData } from '../data/products';
import { Product } from '../types/product';

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    return Promise.resolve(productsData);
  },

  getProductById: async (id: string): Promise<Product | undefined> => {
    return Promise.resolve(productsData.find((p) => p.id === id));
  },
};

export default productService;
