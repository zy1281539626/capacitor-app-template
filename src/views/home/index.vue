<script setup lang="ts">
import { IonButton } from '@ionic/vue'
// import router from '@/router'

const getApi = async () => {}
</script>

<template>
  <layout>
    <template #header>111</template>

    <div>Home</div>
    <svg-icon name="close"></svg-icon>

    <ion-button @click="getApi">GetAPI</ion-button>

    <template #footer>Footer</template>
  </layout>
</template>
