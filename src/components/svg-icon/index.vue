<script lang="ts" setup>
/**
 * <svg-icon name="close" color="#ff6600"></svg-icon>
 * svgs/error文件夹中
 * <svg-icon name="error-close"></svg-icon>
 *
 * 注意：color需要svg的stroke属性设置为currentColor，否则color设置不成功
 */
import { getSvgComponent } from './svgLoader'

// UI设计稿宽度
const UI_WIDTH = 375

const props = defineProps({
  // 是否需要转vw
  shouldConvertVw: {
    type: Boolean,
    default: true,
  },
  // 名称
  name: {
    type: String,
    default: '',
    required: true,
  },
  // 大小
  size: {
    type: Number,
    default: 24,
  },
  // 颜色
  color: {
    type: String,
    default: '',
  },
  // class
  className: {
    type: String,
    default: '',
  },
})

const svgStyle = computed(() => {
  if (!props.shouldConvertVw) {
    return {
      width: props.size + 'px',
      height: props.size + 'px',
      color: props.color,
    }
  }
  return {
    width: (props.size / UI_WIDTH) * 100 + 'vw',
    height: (props.size / UI_WIDTH) * 100 + 'vw',
    color: props.color,
  }
})

const iconComponent = shallowRef()

const loadIcon = async () => {
  try {
    const module = await getSvgComponent(props.name)
    if (module) {
      iconComponent.value = module.default
    }
  } catch (error) {
    console.error(`Failed to load icon: ${props.name}`, error)
    iconComponent.value = null
  }
}

watch(() => props.name, loadIcon, { immediate: true })
</script>

<template>
  <div class="svg-icon">
    <component
      :is="iconComponent"
      v-if="iconComponent"
      class="svg-icon"
      :class="className"
      :style="svgStyle"
      aria-hidden="true"
    ></component>
    <slot v-else name="placeholder"> </slot>
  </div>
</template>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
