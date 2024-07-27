<script setup lang="ts">
import router from '@/router'
import { IonButton } from '@ionic/vue'
import userCache from '@/stores/user'

const info = ref()
const init = async () => {
  info.value = await userCache.getData('info')
  console.log(info.value)
}

const onBack = () => {
  router.back()
}

onMounted(() => {
  init()
})
</script>

<template>
  <layout>
    <div>User</div>
    <div>{{ info }}</div>
    <ion-button @click="onBack">goBack</ion-button>
  </layout>
</template>
