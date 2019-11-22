<template>
  <font-awesome-icon
    :icon="iconData"
  />
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {
    faYoutube,
    faSpotify
  } from '@fortawesome/free-brands-svg-icons'

  library.add(
    faYoutube,
    faSpotify
  );

  const icons = {
    youtube: ['fab', 'youtube'],
    spotify: ['fab', 'spotify']
  };

  const Icon = {
    components: {
      FontAwesomeIcon
    },
    props: {
      icon: String
    },
    computed: {
      iconData() {
        return icons[this.icon]
      }
    }
  };

  export default Icon;
</script>
