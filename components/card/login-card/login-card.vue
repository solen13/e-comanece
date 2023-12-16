
<template>
  <div class="login-card">
    <h1 class="text-center mt-2 font-bold text-xl mb-8">Giriş Yap</h1>
    <div class="flex flex-col w-[392px] mx-auto">
      <span class="flex flex-col">
        <label class="font-bold"> E-posta Adresi </label>
        <input
          type="email"
          placeholder="E-posta adresinizi giriniz"
          class="input-style"
          v-model="emailText"
        />
      </span>
      <span class="flex flex-col mt-3">
        <label class="font-bold"> Parola </label>
        <input
          type="password"
          placeholder="Porolanızı giriniz"
          class="input-style"
          v-model="passwordText"
        />
        <div class="flex justify-end">
          <nuxt-link class="text-green font-semibold" to="/"
            >Parolamı Unuttum</nuxt-link
          >
        </div>
      </span>
    </div>
    <div class="mt-7 flex flex-col justify-center items-center">
      <button
        @click="loginBtn"
        class="w-1/2 bg-darkGreen text-white-100 py-2 rounded-lg"
      >
        Giriş yap
      </button>
      <p class="account-control-text text-center">Hesabınız yokmu?</p>
      <nuxt-link
        to="/register"
        class="w-1/2 text-darkGreen border border-darkGreen py-2 rounded-lg mt-2 text-center"
      >
        Kayıt Ol
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const emailText = ref("kminchelle");
const passwordText = ref("0lelplR");
const router = useRouter();

const loginBtn = async () => {
  authStore
    .login(emailText.value, passwordText.value)
    .then((res) => {
      if (res) {
        router.push("/account/profile");
      } else {
        alert("Böyle Bir Kullanıcı Yok");
      }
    })
    .catch((e) => {
      alert(e.message);
    });
};
</script>

<style lang="scss" src="./login-card.scss">
</style>
