<template>
  <div class = "tabsPane" v-if = "active" :class = "classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'JianTabsPane',
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {type: String}
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>
<style lang = "scss" scoped>
.tabsPane {
  &.active {
    background: red;
  }
}
</style>