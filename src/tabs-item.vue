<template>
  <div class = "tabsItem" @click = "onActive" :class = "classes" :data-name = "name">
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
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  inject: ['eventBus'],
  methods: {
    onActive() {
      if (this.disabled) {return}
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      this.$emit('click', this)
    }
  },
  mounted() {
    this.eventBus &&
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>
<style lang = "scss" scoped>
$blue: blue;
$disabled-text-color: grey;
.tabsItem {
  flex-shrink: 0;
  padding: 0 1em;
  min-height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>