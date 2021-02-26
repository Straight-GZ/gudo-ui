<template>
  <div class = "popover">
    <div class = "contentWrapper">
      <slot name = "content" v-if = "visible"></slot>
    </div>
    <div @click = "xxx">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JianPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang = "scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  > .contentWrapper {
    position: absolute;
    bottom: 100%
  }
}

</style>