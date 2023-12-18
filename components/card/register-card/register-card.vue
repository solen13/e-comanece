<template>
  <form class="register-card" @submit.prevent="submitForm">
    <h1 class="text-center font-bold text-xl pt-4">KAYIT OL</h1>
    <div class="grid grid-cols-2 gap-20 mt-10">
      <div>
        <span class="">
          <label>T.C. Kimlik No / ID numaranız</label>
          <input
            v-model="tcNumber"
            name="tcNumber"
            type="text"
            class="input-style"
            placeholder="T.C. Kimlik No / ID numaranız"
          />
          <ErrorMessage name="tcNumber" />
        </span>
        <div class="grid grid-cols-2 gap-4 mt-5">
          <span>
            <label>Adınız</label>
            <input
              v-model="username"
              name="username"
              type="text"
              class="input-style"
              placeholder="Adınız"
            />
            <ErrorMessage name="username" />
          </span>
          <span>
            <label>Soyadınız</label>
            <input
              v-model="surname"
              name="surname"
              type="text"
              class="input-style"
              placeholder="Soyadınız"
            />
            <ErrorMessage name="surname" />
          </span>
          <span>
            <label>E-posta Adresiniz</label>
            <input
              v-model="email"
              name="email"
              type="text"
              class="input-style"
              placeholder="E-posta Adresiniz"
            />
            <ErrorMessage name="email" />
          </span>
          <span>
            <label>Telefon Numaranız</label>
            <input
              v-model="phoneNumber"
              name="phoneNumber"
              type="text"
              class="input-style"
              placeholder="Telefon Numaranız"
            />
            <ErrorMessage name="phoneNumber" />
          </span>

          <span>
            <label>Parolanız</label>
            <input
              v-model="password"
              name="password"
              type="text"
              class="input-style"
              placeholder="Parolanız"
            />
            <ErrorMessage name="password" />
          </span>

          <span>
            <label
              >Parolanız (Tekrar) {{ password === passwordConfirmation }}</label
            >
            <input
              v-model="passwordConfirmation"
              name="passwordConfirmation"
              type="text"
              class="input-style"
              placeholder="Parolanız (Tekrar)"
              data-vv-as="password"
            />
            <ErrorMessage name="passwordConfirmation" />
          </span>
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <span>
          <label>Adres Başlığı</label>
          <input
            v-model="addressTitle"
            name="addressTitle"
            type="text"
            class="input-style"
            placeholder="Adres Başlığı"
          />
          <ErrorMessage name="addressTitle" />
        </span>
        <span>
          <label>İl</label>
          <input
            v-model="city"
            name="city"
            type="text"
            class="input-style"
            placeholder="İl"
          />
          <ErrorMessage name="city" />
        </span>
        <span>
          <label>İlçe</label>
          <input
            v-model="district"
            nam="district"
            type="text"
            class="input-style"
            placeholder="İlçe"
          />
          <ErrorMessage name="district" />
        </span>
        <span>
          <label>Adres</label>
          <input
            v-model="fullAddress"
            name="fullAddress"
            type="text"
            class="input-style"
            placeholder="Adres"
          />
          <ErrorMessage name="fullAddress" />
        </span>
      </div>
    </div>
    <div class="flex-col flex font-semibold mt-7">
      <label>
        <input type="checkbox" name="checkbox1" v-model="checkbox1" />
        Üyelik Sözleşmesini okudum Onaylıyorum
      </label>
      <ErrorMessage name="checkbox1" />
      <label class="mt-2">
        <input type="checkbox" v-model="checkbox2" name="checkbox2" />
        Açık Rıza Beyanını okudum ve kabul ediyorum.
        <ErrorMessage name="checkbox2" />
      </label>
    </div>
    <div class="mt-7">
      <button
        type="submit"
        class="w-full bg-darkGreen text-white-100 py-2 rounded-lg"
      >
        Kayıt Ol
      </button>
      <p class="account-control-text text-center">Hesabınız var mı?</p>
      <button @click="login"
        class="w-full text-darkGreen border border-darkGreen py-2 rounded-lg mt-2"
        type="button"
      >
        Giriş yap
      </button>
    </div>
  </form>
</template>
  
  <script setup>
import {
  useForm,
  useField,
  useIsFieldValid,
  useIsFieldTouched,
} from "vee-validate";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const { handleSubmit, errors, setFieldTouched } = useForm({
  validationSchema: {
    username: "required|alpha_spaces",
    surname: "required|alpha_spaces",
    email: "required|email",
    tcNumber: "required|numeric|tcNumber:11",
    phoneNumber: "required|numeric",
    password: "required",
    passwordConfirmation: "required|confirmed:@password",
    addressTitle: "required",
    city: "required",
    district: "required",
    fullAddress: "required",
    checkbox1: "required",
    checkbox2: "required",
  },
});
const { value: username } = useField("username");
const { value: surname } = useField("surname");
const { value: email } = useField("email");
const { value: tcNumber } = useField("tcNumber");
const { value: phoneNumber } = useField("phoneNumber");
const { value: password } = useField("password");
const { value: passwordConfirmation } = useField("passwordConfirmation");
const { value: addressTitle } = useField("addressTitle");

const { value: city } = useField("city");
const { value: district } = useField("district");
const { value: fullAddress } = useField("fullAddress");
const { value: checkbox1 } = useField("checkbox1");
const { value: checkbox2 } = useField("checkbox2");

const router = useRouter()
const submitForm = handleSubmit((item) => {
  router.push("/login"); 
  authStore.register(item)

});
const  login=()=>{
    router.push("/login"); 
}
</script>
  
  <style lang="scss" src="./register-card.scss">
</style>
  