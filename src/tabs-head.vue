<template>
  <div class = "tabsHead">
    <slot></slot>
    <div class = "line" ref = "line"></div>
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
    this.eventBus.$on('update:selected', (name, item) => {
      let {left, width} = item.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>
<style lang = "scss" scoped>
$height: 40px;
$border-color: #ddd;
.tabsHead {
  min-height: $height;
  display: flex;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    transition: all 350ms;
    bottom: 0;
    border-bottom: 1px solid blue;
  }
  > .actions {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }
}
</style>