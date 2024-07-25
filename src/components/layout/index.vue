<script setup lang="ts">
import { IonContent, IonPage, IonHeader, IonFooter, IonToolbar } from '@ionic/vue'

const slots = useSlots()
const noHeader = !slots['header']
const noFooter = !slots['footer']
</script>

<template>
  <ion-page>
    <ion-header v-if="!noHeader">
      <ion-toolbar>
        <slot name="header"></slot>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div :class="['layout-main', { 'no-header': noHeader, 'no-footer': noFooter }]">
        <slot name="default"></slot>
      </div>
    </ion-content>
    <ion-footer v-if="!noFooter">
      <ion-toolbar>
        <slot name="footer"></slot>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<style>
body {
  --ion-toolbar-background: rgb(113, 101, 216);
  --ion-background-color: linear-gradient(to bottom right, rgb(217, 105, 212), pink);
}

.no-header {
  padding-top: var(--safe-area-inset-top);
}
.no-footer {
  padding-bottom: var(--safe-area-inset-bottom);
}
</style>
