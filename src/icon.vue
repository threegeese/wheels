<template>
  <svg :class="['icon', name]">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">
.icon { width: 1em; height: 1em; }
.loading { animation: 2s spin infinite linear }
@keyframes spin {
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}
</style>