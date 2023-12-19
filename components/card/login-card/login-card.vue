
<template>
  <div class="login-card">
    <h1 class="text-center mt-2 font-bold text-xl mb-8">Giriş Yap</h1>
    <form  @submit.prevent="submitForm">
      <div class="flex flex-col w-[392px] mx-auto">
        <span class="flex flex-col">
          <label class="font-bold"> kullanıcı adı </label>
          <input
            type="email"
            placeholder="Kullanıcı Adını Giriniz"
            class="input-style"
            v-model="username"
          />
          <ErrorMessage name="username" />
        </span>
        <span class="flex flex-col mt-3">
          <label class="font-bold"> Parola </label>
          <input
            type="password"
            placeholder="Porolanızı giriniz"
            class="input-style"
            v-model="password"
          />
          <ErrorMessage name="password" />
          <div class="flex justify-end">
            <nuxt-link class="text-green font-semibold" to="/"
              >Parolamı Unuttum</nuxt-link
            >
          </div>
        </span>
      </div>
      <div class="mt-7 flex flex-col justify-center items-center">
        <button
          @click="submitForm"
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
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import {
  useForm,
  useField,

} from "vee-validate";
const authStore = useAuthStore();


const router = useRouter();
const { handleSubmit, errors, setFieldTouched } = useForm({
  validationSchema: {
    username: "required",
    password: "required",
  },
});


const { value: password } = useField("password");
const { value: username } = useField("username");
username.value="kminchelle"
password.value="0lelplR"
console.log()
const submitForm = handleSubmit((item) => {
    
  authStore
    .login(item.username, item.password)
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
});


useSeoMeta({
    ogTitle: () =>"Giriş",
    title: () =>"Giriş",
    description: () =>"Kullanıcı Girişi",
       
})
</script>

<style lang="scss" src="./login-card.scss">
</style>
