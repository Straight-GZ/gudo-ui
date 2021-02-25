<template>
  <div class = "tabsHead">
    <slot></slot>
    <div class = "actions">
      <slot name = "actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JianTabsHead',
  props: {
    name: {
      type: String
    }
  },
  inject: ['eventBus'],
  mounted() {
  }
}
</script>
<style lang = "scss" scoped>
$height: 40px;
.tabsHead {
  min-height: $height;
  display: flex;
  justify-content: flex-start;
  > .actions {
    margin-left: auto;
  }
}
</style>