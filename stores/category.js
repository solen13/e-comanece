import { defineStore } from 'pinia';
import axios from "axios"
import { convertCategories } from "@/utils/categoryFiltered"
export const category = defineStore("category", {
    state: () => ({
        allProducts: [],
        productDetailsList: null,
        convertedStockCategories: [],
    }),
    actions: {
        async getSelectedProduct({ pageNo = 1, limit = 100 }) {
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=` + pageNo);
                this.allProducts = response.data.products

            } catch (error) {
                console.error(error);
            }
        },

        async productDetails(route) {

            try {

                const response = await axios.get("https://dummyjson.com/products/" + route);
                this.productDetailsList = response.data
                console.log((response))
            } catch (error) {
                console.error(error);
            }
        },
        async fetchProductCategory(query) {

            try {
                const response = await axios.get('https://dummyjson.com/products/category/' + query);


                this.allProducts = response.data.products


            } catch (error) {
                console.error(error);
            }
        },
        async getMenuCategories() {

            try {
                const response = await axios.get("https://dummyjson.com/products/categories");

            } catch (error) {
                console.error(error);
            }
        },

        async getAllStockByCategoryList() {
            // kategori çeşitlerini alıyoruz
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=100');

                const resData = response.data.products

                this.convertedStockCategories = convertCategories(resData)

            } catch (error) {
                console.error(error);
            }
        }

    }
});
