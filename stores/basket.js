import { defineStore } from 'pinia';



export const basket = defineStore("basket", {
    state: () => ({
        basketItmes: [],
        isBasketSuccess: false

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

        async increaseItemQuantity(index, product) {
            if (index != null) {

                this.basketItmes[index].quantity++;
            } else {
                // detail içi
                const existingItem = this.basketItmes.find(item => item.id === product.id);

                if (existingItem) {
                    existingItem.quantity++; // Eğer ürün zaten sepette varsa sayısını artır
                } else {
                    this.basketItmes.push({ ...product, quantity: 1, }); // Yeni 
                }
            }
        },

        async decreaseItemQuantity(index, product) {
            if (index !== null) {
                // sepet içi
                if (this.basketItmes[index].quantity > 1) {
                    this.basketItmes[index].quantity--;
                }
            } else {
                // detail içi
                const existingItem = this.basketItmes.find(item => item.id === product.id);
                const indexs = this.basketItmes.findIndex(obje => obje.id === product.id);

                if (existingItem) {

                    if (existingItem.quantity >= 0) {
                        existingItem.quantity--;
                        if (existingItem.quantity == 0) {
                            this.basketItmes.splice(indexs, 1);
                        }
                    }
                }
            }


        },

        async removeBasketList() {
            this.basketItmes = []
        },

        basketSuccess(status) {
            this.isBasketSuccess = status
        }
    }
});
