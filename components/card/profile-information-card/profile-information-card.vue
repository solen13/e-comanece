<template>
  <div class="profile-information-card">
    <div class="mb-8 mt-2">
      <h2 class="text-center font-bold text-xl">Profil Bilgilerim</h2>
    </div>
   
    <span>
      <label>T.C. Kimlik No / ID numaranız</label>
      <input
        v-model="info.tc"
        type="text"
        class="input-style"
        placeholder="T.C. Kimlik No / ID numaranız"
      />
    </span>
    <div class="grid grid-cols-2 gap-3">
      <span>
        <label>Adınız</label>
        <input
          v-model="info.name"
          type="text"
          class="input-style"
          placeholder="Adınız Giriniz"
        />
      </span>
      <span>
        <label>Soyadınız</label>
        <input
          v-model="info.surname"
          type="text"
          class="input-style"
          placeholder="Soyadınızı Girin"
        />
      </span>
      <span>
        <label>E-posta Adresiniz</label>
        <input
          disabled
          v-model="info.email"
          type="text"
          class="input-style"
          placeholder="E-posta Adresiniz"
        />
      </span>
      <span>
        <label>Telefon Numaranız</label>
        <input
          v-model="info.phone"
          type="text"
          class="input-style"
          placeholder="Telefon Numaranızı Giriniz"
        />
      </span>
      <span>
        <label>Parolanızı </label>
        <input
          v-model="info.password"
          type="text"
          class="input-style"
          placeholder="Parolanız Giriniz"
        />
      </span>
      <span>
        <label>Parolanız(Tekrar)</label>
        <input
          v-model="info.rePassword"
          type="text"
          class="input-style"
          placeholder="Parolanızı Giriniz"
        />
      </span>
    </div>
    <div class="mt-6">
      <button class="w-full bg-darkGreen text-white-100 py-2 rounded-lg">
        Güncelle
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth.js";

const userProfileInfo = useAuthStore();

const info = ref({
  tc: "212342342",
  name: null,
  surname: null,
  email: null,
  phone: "05431191790",
  password: "",
  rePassword: "",
});

const userProfileInfoList = computed(() => {
  return userProfileInfo.userData;
});
watch(userProfileInfoList, async (news) => {
  console.log(news);
  fillForm();
});

const fillForm = () => {
  info.value.name = userProfileInfoList.value?.firstName || "";
  info.value.surname = userProfileInfoList.value?.lastName || "";
  info.value.email = userProfileInfoList.value?.email || "";
};

onMounted(() => {
  fillForm();
});
</script>

<style lang="scss" src="./profile-information-card.scss">
</style>
