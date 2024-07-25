<script lang="ts" setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 24
  },
  color: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})

const svgName = computed(() => {
  return `#${props.prefix}-${props.name}`
})
const svgStyle = computed(() => {
  return {
    width: (props.size / 430) * 100 + 'vw',
    height: (props.size / 430) * 100 + 'vw',
    color: props.color
  }
})
</script>

<template>
  <svg class="svg-icon" :class="className" aria-hidden="true" :style="svgStyle">
    <use :xlink:href="svgName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  fill: currentColor;
  display: inline-block;
  vertical-align: bottom;
}
</style>
