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
        async getAllProducts({ pageNo = 1, limit = 100 }) {
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=` + pageNo);

                console.log(response.data.products)

                this.allProducts = response.data.products

            } catch (error) {
                console.error(error);
            }
        },

        async productDetails(route) {

            try {
                const response = await axios.get(" https://dummyjson.com/products/" + route);

                console.log(response)

                this.productDetailsList = response.data

            } catch (error) {
                console.error(error);
            }
        },
        async fetchProductCategory(query) {

            try {
                const response = await axios.get('https://dummyjson.com/products/category/' + query);

                console.log(response)

                this.allProducts = response.data.products


            } catch (error) {
                console.error(error);
            }
        },
        async getMenuCategories() {

            try {
                const response = await axios.get("https://dummyjson.com/products/categories");
                console.log(response)


            } catch (error) {
                console.error(error);
            }
        },

        async getAllStockByCategories() {

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
