<template lang="pug">
  full-screen
    confirm-modal(ref="confirmModal", @confirm="handleConfirmModal")

    //
      span(slot="form-logo")
      span(slot="form-title") {{ $t('routes.piecemaker.timelines.list.title') }}
    content-block(:position="'first'")
      headline(:content="$t('routes.piecemaker.timelines.list.title')")

      // DIAGRAM
        div.q-mb-xl(ref="diagramList")
          svg(width="100%", :height="diagramDimensions.height")
            defs
              linearGradient(id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%")
                stop(offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:.2")
                stop(offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:.025")
            line(x1="0", x2="100%", :y1="diagramDimensions.height / 2", :y2="diagramDimensions.height / 2", style="stroke: rgba( 255, 255, 255, .25 ); stroke-width: 1;")
            text.q-caption(v-for="n in 11",:x="(diagramDimensions.currentWidth / 10) * n - 2", :y="diagramDimensions.height / 2 - 10", fill="rgba( 255, 255, 255, .2)") {{ 1999 + n }}
            svg(v-for="(dummy, i) in dummyData", :width="diagramDimensions.currentWidth - dummy.created", height="diagramDimensions.barHeight", :x="dummy.created")
              line(x1="0", x2="0", y1="0", y2="100%", style="stroke: rgba( 255, 255, 255, .25 ); stroke-width: 1;")
              rect.cursor-pointer.moba-hover-timeline(width="100%", height="100%")
            circle.cursor-pointer.moba-svg-circle(v-for="n in 11", r="3", :cx="(diagramDimensions.currentWidth / 10) * n", :cy="diagramDimensions.height / 2", fill="rgba( 255, 255, 255, .5)")
            // rect.moba-test(@click="testWidth = testWidth + 30", fill="red", :width="testWidth", height="30")

      content-paragraph
        data-table(
      :config="config",
      :title="'routes.piecemaker.timelines.list.title'",
      ref="listTable",
        path="maps",
      :query="query",
      base-path="timelines",
      :has-show="isStaging",
      :request-transform="requestTransform"
      )

          // button: create timeline
          //
            template(slot="buttons-left")
              q-btn(@click="$router.push({ name: 'piecemaker.timelines.create' })",
              color="primary", icon="add")
                span.on-right(v-if="!isMobile") {{ $t('buttons.create_timeline') }}
          template(slot="top-buttons")
            q-btn(@click="$router.push({ name: 'piecemaker.timelines.create' })",
            color="primary", :class="{'full-width': isMobile}", icon="add")
              span.on-right.gt-xs {{ $t('buttons.create_timeline') }}
</template>

<script>
  import constants from 'mbjs-data-models/src/constants'
  import { DateTime } from 'luxon'
  import { deleteHelper } from 'mbjs-quasar/src/lib'
  import Headline from '../../../components/shared/elements/Headline'
  import ContentBlock from '../../../components/shared/elements/ContentBlock'
  import ContentParagraph from '../../../components/shared/elements/ContentParagraph'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Headline,
      ContentBlock,
      ContentParagraph
    },
    data () {
      const _this = this
      return {
        isStaging: process.env.IS_STAGING,
        testWidth: 40,
        diagramDimensions: {
          activeId: null,
          barHeight: 50,
          currentWidth: 0,
          height: 100,
          offsetY: 20
        },
        query: { type: constants.mapTypes.MAP_TYPE_TIMELINE },
        requestTransform: async rows => {
          for (let i in rows) {
            const transformed = {}
            const row = rows[i]
            transformed.title = row.title
            transformed.last_updated = row.updated ? row.updated : row.created
            transformed.author = row.author ? row.author.name : _this.$t('labels.unknown_author')
            transformed._uuid = row._uuid
            transformed.id = row.id
            rows[i] = transformed
          }
          return rows
        },
        config: {
          columns: [
            {
              name: 'title',
              label: _this.$t('labels.title'),
              field: 'title',
              filter: true,
              sortable: true
            },
            {
              name: 'last_updated',
              label: _this.$t('labels.last_updated'),
              sortable: true,
              sort: _this.$sort.onDateValue,
              field: 'last_updated',
              format: val => DateTime.fromISO(val)
                .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
            },
            {
              name: 'author',
              label: _this.$t('labels.author'),
              field: 'author',
              sortable: true,
              filter: true
            }
          ],
          actions: [
            {
              type: 'show',
              title: 'Videos',
              color: 'primary',
              click: (item) => _this.$router.push({ name: 'piecemaker.timelines.show', params: { uuid: item._uuid } })
            },
            {
              type: 'live-annotate',
              title: 'buttons.live_annotate',
              color: 'primary',
              click: (item) => _this.$router.push({ name: 'piecemaker.timelines.annotate', params: { uuid: item._uuid } })
            },
            // {
            //   type: 'videos',
            //   title: 'buttons.videos',
            //   color: 'primary',
            //   click: (item) => _this.$router.push({ name: 'piecemaker.videos.list', params: { timelineUuid: item._uuid } })
            // },
            {
              type: 'search',
              title: 'buttons.search',
              color: 'primary',
              feature: 'search',
              click: (item) => _this.$router.push({ name: 'piecemaker.timelines.search', params: { uuid: item._uuid } })
            },
            {
              type: 'edit',
              title: 'buttons.edit',
              click: (item) => _this.$router.push({ name: 'piecemaker.timelines.edit', params: { uuid: item._uuid } })
            },
            {
              type: 'delete',
              title: 'buttons.delete',
              click: item => {
                this.$refs.confirmModal.show('buttons.delete', item, 'buttons.delete')
              }
            }
          ]
        }
      }
    },
    methods: {
      async handleConfirmModal (item) {
        await deleteHelper.deleteMap(this, item)
        this.$refs.listTable.request()
      }
    },
    mounted () {
      this.$root.$emit('setBackButton')
    },
    computed: {
      ...mapGetters({
        isMobile: 'globalSettings/getIsMobile'
      })
    }
  }
</script>

<style lang="stylus">
  .moba-hover-timeline
    fill transparent

  .moba-hover-timeline:hover
    // fill: rgba(255, 255, 255, .25)
    fill url(#lgrad)

  /*
  .moba-svg-circle
    transition ease r 200ms
  .moba-svg-circle:hover
    r 10 */

  /* .moba-test
    transition width ease 200ms */
</style>
