<template>
  <div class="order-panel flex justify-between items-center">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
    <div>
      <div>
        <span>sırala</span>
        <dropdown-menu direction="right" :overlay="false">
          <template #trigger>
            <button class="border-[1px] border-gray-100 rounded-md px-2 py-1">
              Varsayılan
            </button>
          </template>

          <template #body>
            <ul>
              <li  v-for="i in 6" :key="i" @click="order(item)">
                <a href="">Item {{ i }}</a>
              </li>
            </ul>
          </template>
        </dropdown-menu>
      </div>
      <div>
        <button>
          <Icon name="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import DropdownMenu from 'v-dropdown-menu';
import '../../../node_modules/v-dropdown-menu/dist/vue3/v-dropdown-menu.css';

const order=(item)=>{
console.log(item)
}
</script>

<style lang="scss" src="./order-panel.scss"></style>
