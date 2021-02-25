<template>
	<div class = "tabsPane">
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
    this.eventBus.$on('update:selected', (data) => {
      this.active = data === this.name
    })
  }
}
</script>
<style lang = "scss" scoped>
.tabsPane {}
</style>