import { defineStore } from 'pinia';
import axios from "axios"


export const category = defineStore("category", {
    state: () => ({
        allProducts: [],
        productDetailsList: null,

    }),

    actions: {
        async allProduct(spiliteNum) {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=6&skip=' + spiliteNum);

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
        async productCategory(query) {

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
        }

    }
});
