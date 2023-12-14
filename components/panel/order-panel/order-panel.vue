<template>
  <div class="order-panel flex justify-between items-center">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
    <div>
      <div class="flex justify-center items-center">
        <span class="mr-7 text-gray-100" >Sırala:</span>
       <div class="mr-5 border-r-2 border-gray-100 pr-4">
        <dropdown-menu direction="right" :overlay="false">
          <template #trigger>
            <button class="border-[1px] border-gray-100 rounded-md px-2 py-1 font-semibold">
              Varsayılan <Icon name="simple-line-icons:arrow-down"  size="12"/>
            </button>
          </template>

          <template #body>
            <ul>
              <li class="mx-3"  v-for="i in 6" :key="i" @click="order(item)">
                <a href="">Item {{ i }}</a>
              </li>
            </ul>
          </template>
        </dropdown-menu>
       </div>
     <div class="flex gap-1">
        <button class="bg-darkGreen p-1 rounded-lg">
            <Icon name="ep:menu" size="24" color="white"></Icon>
        </button>
        <button class="p-1 border-2 border-gray-100 rounded-lg">
            <Icon name="mingcute:menu-fill" size="24" />
        </button>

     </div>
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
