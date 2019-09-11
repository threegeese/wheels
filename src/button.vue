<template>
  <button class="g-button">按钮</button>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
.g-button {
  height: var(--button-height);
  padding: 0 1em;
  font-size: var(--font-size);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-button-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}

</style>