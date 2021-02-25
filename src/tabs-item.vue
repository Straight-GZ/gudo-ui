<template>
  <div class = "tabsItem">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'JianTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang = "scss" scoped>
.tabsItem {}
</style>