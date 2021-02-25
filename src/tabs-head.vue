<template>
	<div class = "tabsHead">
		<slot></slot>
    <slot name="actions"></slot>
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
.tabsHead {}
</style>