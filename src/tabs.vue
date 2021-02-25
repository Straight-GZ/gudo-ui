<template>
  <div class = "tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'JianTabs',
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    if (this.$children.length === 0) {
      console && console.warn && console.warn('tabs的子组件应该是tabs-header和tabs-body，但你没有写子组件')
    }
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'JianTabsHead') {
        vm.$children.forEach((item) => {
          if (item.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  }
}
</script>
<style lang = "scss" scoped>
.tabs {}
</style>