<template lang="pug">
  // center-card-full
  card-full
    div(slot="form-logo")
    div(slot="form-title")
      h4 Piecemaker
    .row.md-gutter.justify-between.items-between
      .col-lg-6
        q-list(highlight, no-border)
          q-list-header
            .row.justify-between.items-between
              h4 Timelines
              div
                q-btn(@click="$router.push('/piecemaker/timelines')", flat, color="primary") All Timelines
                q-btn(@click="$router.push('/piecemaker/timelines/create')", flat, color="primary") New Timeline
          q-item(v-for="item in timelines", :key="item._uuid", link, exact, :to="'/piecemaker/timelines/' + item._uuid")
            q-item-main
              q-item-tile(label) {{ item.title }}
              q-item-tile(sublabel) {{ item.description }}
      .col-lg-6
        q-list(highlight, no-border)
          q-list-header
            .row.justify-between.items-between
              h4 Videos
          q-item(v-for="item in videos", :key="item._uuid", link, exact, :to="'/piecemaker/videos/' + item._uuid")
            q-item-main
              q-item-tile(label) {{ item.title }}
              q-item-tile(sublabel) {{ item.description }}
</template>

<script>
  import CardFull from '../../components/shared/layouts/CardFull'
  import CenterCardFull from '../../components/shared/layouts/CenterCardFull'
  import constants from 'mbjs-data-models/src/constants'
  export default {
    components: {
      CardFull,
      CenterCardFull
    },
    data () {
      return {
        timelines: [],
        videos: []
      }
    },
    mounted () {
      const _this = this
      this.$store.dispatch('maps/find', { type: constants.mapTypes.MAP_TYPE_TIMELINE })
        .then(results => {
          _this.timelines = results
        })
      this.$store.dispatch('annotations/find')
        .then(results => {
          _this.videos = results
        })
    }
  }
</script>
