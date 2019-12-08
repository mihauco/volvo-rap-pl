<template>
  <div class="page">
    <Header class="page__header" />
    <main class="page__main">
      <TracksList class="page__tracks-list" />
    </main>
    <Footer class="page__footer" />
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import TracksList from './TracksList.vue';

  const Page = {
    components: {
      Header,
      Footer,
      TracksList
    }
  };

  export default Page;
</script>

<style lang="scss">
  .page {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 15px;

    &__header {
      margin-bottom: 20px;
    }
  }
</style>
