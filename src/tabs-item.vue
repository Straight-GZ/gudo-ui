<template>
  <div class = "tabsItem">
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
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
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
    this.eventBus.$on('update:selected', (data) => {
      this.active = data === this.name
    })
  }
}
</script>
<style lang = "scss" scoped>
.tabsItem {}
</style>