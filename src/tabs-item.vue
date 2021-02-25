<template>
  <div class = "tabsItem" @click = "onActive" :class = "classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'JianTabsItem',
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {type: Boolean, default: false},
    name: {type: String, required: true}
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  inject: ['eventBus'],
  methods: {
    onActive() {
      this.eventBus.$emit('update:selected', this.name)
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>
<style lang = "scss" scoped>
.tabsItem {
  flex-shrink: 0;
  padding: 0 1em;
  min-height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    background: red;
  }
}
</style>