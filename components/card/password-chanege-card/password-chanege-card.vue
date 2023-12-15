<template>
  <div class="password-chaneg-card">
    <h1 class="text-center font-bold text-xl">PAROLA YENİLEME</h1>
    <p class="w-[392px]  mx-auto mt-2 text-gray-200">
        Aşağıdaki alanları doldurarak yeni şifrenizi oluşturabilir ve sisteme giriş yapabilirsiniz.
    </p>
    <div class="flex flex-col w-[392px] mx-auto mt-6">
      <span class="flex flex-col">
        <label class="font-bold">Yeni Parolanız </label>
        <input
          type="password"
          placeholder="Yeni Parolanız Giriniz"
          class="input-style"
        />
      </span>
      <span class="flex flex-col">
        <label class="font-bold">Yeni Parolanız (Tekrar) </label>
        <input
          type="password"
          placeholder="Yeni parolanızı tekrar giriniz."
          class="input-style"
        />
      </span>
      </div>
      <div class="mt-7 flex flex-col justify-center items-center ">
      <button class="w-1/2   bg-darkGreen text-white-100 py-2 rounded-lg">
             KAYDET
      </button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" src="./password-chanege-card.scss">

</style>
