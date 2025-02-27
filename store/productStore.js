import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: {},
  productList: [],
  productsQuestions: [],
  step: 0,
  updateProducts: (newProducts) => set({ products: newProducts }),
  updateProductList: (newProductList) => set({ productList: newProductList }),
  updateProductQuestions: (newProductQuestion) =>
    set({ productsQuestions: newProductQuestion }),
  updateStep: (newStep) => set({ step: newStep }),
}));
