<template>
  <div class="w-full">
  
    <div class="2xl:w-3/4 container mx-auto " >
       <navigation-slider   />
    </div>
    <service-card  />
 
   <special-product/>
   <serial-banner-card class="mt-10 mb-10"/>
   <p>Page visits: {{ count }}</p>
  </div>
</template>

<script setup>

import mainPageMetaTag from "~/common/mainPageMetaTag.js";
const metaTags = mainPageMetaTag();
 useHead(metaTags);
</script>
<style></style>
