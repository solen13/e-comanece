<template>
  <div class="register-card">
    <h1 class="text-center font-bold text-xl pt-4">KAYIT OL</h1>
    <div class="grid grid-cols-2 gap-20 mt-10">
      <div>
        <span class="">
          <label>T.C. Kimlik No / ID numaranız</label>
          <input
            type="text"
            class="input-style"
            placeholder="T.C. Kimlik No / ID numaranız"
          />
        </span>
        <div class="grid grid-cols-2 gap-4 mt-5">
          <span>
            <label>Adınız</label>
            <input type="text" class="input-style" placeholder="Adınız" />
          </span>
          <span>
            <label>Soyadınız</label>
            <input type="text" class="input-style" placeholder="Soyadınız" />
          </span>
          <span>
            <label>E-posta Adresinizr</label>
            <input
              type="text"
              class="input-style"
              placeholder="E-posta Adresiniz"
            />
          </span>
          <span>
            <label>Telefon Numaranız</label>
            <input
              type="text"
              class="input-style"
              placeholder="Telefon Numaranız"
            />
          </span>
          <span>
            <label>Parolanız</label>
            <input
              type="password"
              class="input-style"
              placeholder="Parolanız"
            />
          </span>
          <span>
            <label>Parolanız (Tekrar)</label>
            <input
              type="password"
              class="input-style"
              placeholder="Parolanız (Tekrar)"
            />
          </span>
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <span>
          <label>Adres Başlığı</label>
          <input type="text" class="input-style" placeholder="Adres Başlığı" />
        </span>
        <span>
          <label>İl</label>
          <input type="text" class="input-style" placeholder="İl" />
        </span>
        <span>
          <label>İlçe</label>
          <input type="text" class="input-style" placeholder="İlçe" />
        </span>
        <span>
          <label>Adres</label>
          <input type="text" class="input-style" placeholder="Adres" />
        </span>
      </div>
    </div>
    <div class="flex-col flex font-semibold mt-7">
      <label>
        <input type="checkbox" />
        Üyelik Sözleşmesini okudum Onaylıyorum
      </label>
      <label class="mt-2">
        <input type="checkbox" />
        Açık Rıza Beyanını okudum ve kabul ediyorum.
      </label>
    </div>
    <div class="mt-7">
      <button class="w-full bg-darkGreen text-white-100 py-2 rounded-lg">
        Kayıt Ol
      </button>
      <p class="account-control-text text-center">Hesabınız var mı?</p>
      <button
        class="w-full text-darkGreen border border-darkGreen py-2 rounded-lg mt-2"
      >
        Giriş yap
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" src="./register-card.scss">
</style>
