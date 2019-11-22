<template>
  <header class="header">
    <h1 class="header__headline">
      <span class="header__headline-text">Volvo na wolno.</span>
    </h1>
  </header>
</template>

<script>

</script>

<style lang="scss">
  .header {
    padding: 20px 0;

    &__headline {
      margin: 0;
      padding: 0;
      position: relative;
      font-size: 2rem;

      &::after {
        content: '';
        position: absolute;
        bottom: 8px;
        left: 0;
        width: 100%;
        height: 6px;
        background: var(--baseFgColor);
      }
    }

    &__headline-text {
      display: inline-block;
      background: var(--baseBgColor);
      position: relative;
      z-index: 10;
      padding-right: 2px;
    }
  }
</style>
