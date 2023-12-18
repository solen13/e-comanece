<template>
  <div class="product-order-total-card">
    <div class="pb-3">
      <h3 class="font-bold">Sepet Toplamı</h3>
    </div>

    <ul>
      <li>
        <span>Ara Toplam</span>
        <span>{{ total }} TL</span>
      </li>
      <li>
        <span>KDV(%18)</span>
        <span v-if="total">15,00</span>
      </li>
      <li>
        <span>Kargo Ücreti</span>
        <span v-if="total">5 TL</span>
      </li>
      <li>
        <span>İndirim</span>
        <span>0 TL</span>
      </li>
    </ul>
    <div class="flex justify-between py-4 font-bold text-xl">
      <span>Toplam</span>
      <span v-if="total"> {{ total + 15 + 5 }} TL</span>
    </div>
    <div
      class="border border-gray-100 p-3 pr-6 rounded-lg flex flex-col justify-start"
    >
      <span class="font-bold">İndirim Kodu</span>
      <input
        v-model="discountText"
        type="text"
        class="border border-gray-100 rounded-lg px-2 mt-2 font-semibold py-2"
        placeholder="İndirim Kodunu Giriniz"
        :disabled="!isDiscountActive"
        :class="{ 'bg-darkGreen text-white-100': isDiscountActive }"
      />

      <div>
        <button
          v-if="!isDiscountActive"
          @click="isDiscountActiveBtn"
          class="border border-darkGreen rounded-lg font-bold mt-2 px-3 p-1"
        >
          Uygula
        </button>

        <button
          v-else
          @click="isDiscountActiveBtn"
          class="bg-textRed text-white-100 rounded-lg font-bold mt-2 px-3 p-1"
        >
          Kaldır
        </button>
      </div>
    </div>
    <div class="mt-4">
      <button class="bg-darkGreen text-white-100 w-full py-2 rounded-lg">
        Ödemeye Geç
      </button>
      <button
        @click="removeList"
        class="bg-textRed text-white-100 w-full py-2 rounded-lg mt-2"
      >
        sepeti sil
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { basket } from "@/stores/basket.js";
const router = useRouter();
const product = basket();
const total = computed(() => {
  let allTotalArray = [];
  const paymetList = product.basketItmes;
  for (let index = 0; index < paymetList.length; index++) {
    const prince = paymetList[index].price;
    const quantity = paymetList[index].quantity;
    const calc = prince * quantity;
    allTotalArray.push(calc);
  }
  const sum = allTotalArray.reduce((total, current) => total + current, 0);
  return sum;
});
const discountText = ref("");

const isDiscountActive = ref(false);

const isDiscountActiveBtn = () => {
  isDiscountActive.value = !isDiscountActive.value;
  discountText.value = "";
};

const removeList = () => {
    product.removeBasketList()
    router.push("/")
};
</script>

<style lang="scss" src="./product-order-total-card.scss" >
</style>
