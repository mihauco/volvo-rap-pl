<template>
  <div class="track">
    <div class="track__quote" v-html="randomQuote" />
    <div class="track__track-info">
      {{ authorLine }} - {{title}}
    </div>
    <div class="track__links">
      <component
        class="track__link"
        v-for="(link, index) in trackLinks"
        :key="`link_${index}`"
        :is="link.url ? 'a' : 'span'"
        :class="[
          !link.url ? 'track__link--unavailable' : '',
          `track__link--${link.type}`
        ]"
        :href="link.url"
        target="_blank"
      >
        <Icon
          class="track__link-icon"
          :icon="link.type"
        />
      </component>
    </div>
  </div>
</template>

<script>
  import Icon from './Icon.vue';

  const Track = {
    components: {
      Icon
    },
    props: {
      author: String,
      feat: String,
      title: String,
      album: String,
      quotes: Array,
      links: Object
    },
    computed: {
      randomQuote() {
        return this.quotes[Math.round(Math.random() * (this.quotes.length - 1))].replace(/volvo/gi, $1 => `<span>${$1}</span>`);
      },
      authorLine() {
        if (this.feat) {
          return `${this.author} (feat. ${this.feat})`;
        }

        return this.author;
      },
      trackLinks() {
        return [
          {type: 'youtube', url: this.links.youtube},
          {type: 'spotify', url: this.links.spotify}
        ];
      }
    }
  };

  export default Track;
</script>

<style lang="scss">
  @import '../helpers/helpers.scss';

  .track {
    $root: &;
    position: relative;

    @include responsive(desktop) {
      &::before {
        content: '';
        width: 3px;
        height: 0;
        position: absolute;
        left: -13px;
        bottom: 0;
        background: var(--baseFgColor);
        transition: height .3s;
      }

      &:hover {
        &::before {
          top: 0;
          bottom: auto;
          height: 100%;
        }
      }
    }

    &__quote {
      font-size: 1.2rem;
      line-height: 1.5;
      padding-right: 100px;

      span {
        font-weight: 700;
      }
    }

    &__track-info {
      margin-top: 10px;
      font-size: 1rem;
    }

    &__links {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
    }

    &__link {
      width: 26px;
      height: 26px;
      color: var(--lightFgColor);
      position: relative;
      margin-right: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:last-child {
        margin-right: 0;
      }

      &:hover,
      &:visited {
        color: var(--lightFgColor);
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        transform: skew(-15deg);
        background: var(--baseFgColor);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        right: 4px;
        height: 2px;
        width: 0;
        transition: width .2s;
        transform: skew(-15deg);
      }

      &:hover {
        &::after {
          right: auto;
          left: -4px;
          width: 100%;
        }
      }

      &--youtube {
        &::before {
          #{$root}:hover & {
            background: var(--youtube);
          }
        }

        &::after {
          background: var(--youtube);
        }
      }

      &--spotify {
        &::before {
          #{$root}:hover & {
            background: var(--spotify);
          }
        }

        &::after {
          background: var(--spotify);
        }
      }

      &--unavailable {
        cursor: not-allowed;

        &::before,
        #{$root}:hover &::before {
          background: var(--disabled);
        }

        &::after {
          content: none;
        }
      }
    }

    &__link-icon {
      font-size: 18px;
      position: relative;
      z-index: 1;
    }
  }
</style>
