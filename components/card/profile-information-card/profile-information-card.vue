<template>
  <div class="profile-information-card">
    <div class="mb-8 mt-2">
        <h2 class="text-center font-bold text-xl">Profil Bilgilerim</h2>
    </div>
    <span>
      <label>T.C. Kimlik No / ID numaranız</label>
      <input type="text" class="input-style" placeholder="T.C. Kimlik No / ID numaranız" />
    </span>
    <div class="grid grid-cols-2 gap-3 ">
      <span>
        <label>Adınız</label>
        <input type="text" class="input-style" placeholder="Adınız Giriniz" />
      </span>
      <span>
        <label>Soyadınız</label>
        <input type="text" class="input-style" placeholder="Soyadınızı Girin" />
      </span>
      <span>
        <label>E-posta Adresiniz</label>
        <input type="text" class="input-style" placeholder="E-posta Adresiniz" />
      </span>
      <span>
        <label>Telefon Numaranız</label>
        <input type="text" class="input-style" placeholder="Telefon Numaranızı Giriniz" />
      </span>
      <span>
        <label>Parolanızı </label>
        <input type="text" class="input-style" placeholder="Parolanız Giriniz" />
      </span>
      <span>
        <label>Parolanız(Tekrar)</label>
        <input type="text" class="input-style" placeholder="Parolanızı Giriniz" />
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
</script>

<style lang="scss" src="./profile-information-card.scss">
</style>
