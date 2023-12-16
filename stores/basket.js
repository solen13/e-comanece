import { defineStore } from 'pinia';



export const basket = defineStore("basket", {
    state: () => ({
        basketItmes: [],

    }),

    actions: {

        async addBasket(product) {
            const existingItem = this.basketItmes.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity++; // Eğer ürün zaten sepette varsa sayısını artır
            } else {
                this.basketItmes.push({ ...product, quantity: 1, }); // Yeni 
            }

        },
        async removeItme(index) {

            this.basketItmes.splice(index, 1);
        },
        async increaseItemQuantity(index) {
            this.basketItmes[index].quantity++;
        },
        async decreaseItemQuantity(index) {
            if (this.basketItmes[index].quantity > 1) {
                this.basketItmes[index].quantity--;
            }

        }

    }
});
