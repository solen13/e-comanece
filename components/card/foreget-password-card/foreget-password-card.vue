<template>
  <div class="foreget-password">
    <h1 class="text-center font-bold text-xl">PAROLAMI UNUTTUM</h1>
    <p class="w-[392px]  mx-auto mt-2 text-gray-200">
      Eğer parolanızı unuttuysanız aşağıdaki alana sisteme kayıtlı e-posta
      adresinizi girerek parola değiştirmek için gerekli linki alabilirsiniz.
    </p>
    <div class="flex flex-col w-[392px] mx-auto mt-6">
      <span class="flex flex-col">
        <label class="font-bold"> E-posta Adresi </label>
        <input
          type="email"
          placeholder="E-posta adresinizi giriniz"
          class="input-style"
        />
      </span>
      </div>
      <div class="mt-7 flex flex-col justify-center items-center ">
      <button class="w-1/2   bg-darkGreen text-white-100 py-2 rounded-lg">
             Gönder
      </button>
      <p class="account-control-text text-center">Hesabınız yokmu?</p>
      <button
        class="w-1/2  text-darkGreen border border-darkGreen py-2 rounded-lg mt-2"
      >
      Kayıt Ol 
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" src="./foreget-password-card.scss">
</style>
