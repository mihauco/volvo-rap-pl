<template>
  <div class="tracks-list">
    <span
      v-if="!firstLoadDone"
      class="tracks-list__loader"
    />
    <Track
      v-else
      class="tracks-list__track"
      v-for="(track, index) in tracks"
      :key="`track_${index}`"
      v-bind="track"
    />
  </div>
</template>

<script>
  import Track from './Track.vue';
  import TracksService from '../services/TracksService.dev.js';

  const TracksList = {
    components: {
      Track
    },
    data() {
      return {
        firstLoadDone: false,
        tracks: []
      };
    },
    created() {
      this.tracksService = new TracksService();
      this.tracksService.getTracks()
        .then(tracks => {
          this.firstLoadDone = true;
          this.tracks = tracks;
        });
    }
  };

  export default TracksList;
</script>

<style lang="scss">
  .tracks-list {
    $root: &;

    &__loader,
    &__loader::before,
    &__loader::after {
      width: 15px;
      height: 5px;
      background: black;
      display: block;
      position: absolute;
    }

    &__loader {
      transform: skewX(-15deg);

      &::before,
      &::after {
        content: '';
      }

      &::before {
        top: 0;
        right: -20px;
      }

      &::after {
        top: 0;
        left: -20px;
      }
    }

    &__track {
      margin-bottom: 30px;
      transition: opacity .2s;

      #{$root}:hover &:not(:hover) {
        opacity: .5;
      }
    }
  }
</style>
