<template>
  <footer class="footer">
    <span class="footer__text">
      Dobry rap do twojego Volvo.
    </span>
    <a
      class="footer__link footer__link--github"
      href="https://github.com/noiff/volvo-rap-pl/"
      target="_blank"
    >
      <Icon
        class="footer__link-icon"
        icon="github"
      />
    </a>
  </footer>
</template>

<script>
  import Icon from './Icon.vue';

  const Footer = {
    components: {
      Icon
    }
  };

  export default Footer
</script>

<style lang="scss">
  .footer {
    z-index: 100;
    position: fixed;
    bottom: 0;
    width: calc(768px - 30px);
    max-width: calc(100% - 30px);
    padding: 0 15px;
    height: 26px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--baseFgColor);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__link {
      width: 26px;
      height: 26px;
      color: var(--lightFgColor);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
        content: '';
        position: absolute;
        width: calc(100%);
        height: 100%;
        top: 0px;
        left: -2px;
        border-left: 2px solid var(--lightFgColor);
        border-right: 2px solid var(--lightFgColor);
        transform: skewX(-15deg);
      }
    }

    &__text {
      color: var(--baseBgColor);
      font-size: .8rem;
    }

    &__link-icon {
      font-size: 18px;
    }
  }
</style>
