<template lang="pug">
  full-screen
    confirm-modal(ref="confirmModal", @confirm="handleConfirmModal")

    content-block(:position="'first'")
      headline(:content="$t('routes.piecemaker.timelines.videos.title')")
        | {{ timelineTitle }}

      content-paragraph
        data-table(
        v-if="query",
        ref="listTable",
        :config="config",
        :title="'routes.piecemaker.videos.list.title'",
        path="annotations",
        :query="query",
        base-path="videos",
        :request-transform="requestTransform",
        :customTitleLink="'piecemaker.videos.annotate'"
        )
          template(slot="top-buttons")
            q-btn(@click="$router.push({ name: 'piecemaker.videos.create', params: { timelineUuid: $route.params.uuid } })",
            color="primary", :class="{'full-width': isMobile}", icon="add")
              span.on-right.gt-xs {{ $t('buttons.add_video') }}
</template>

<script>
  import { DateTime } from 'luxon'
  import { mapGetters } from 'vuex'
  import PageSubNav from '../../../components/shared/navigation/PageSubNav'
  import Headline from '../../../components/shared/elements/Headline'
  import ContentBlock from '../../../components/shared/elements/ContentBlock'
  import ContentParagraph from '../../../components/shared/elements/ContentParagraph'

  export default {
    components: {
      PageSubNav,
      Headline,
      ContentBlock,
      ContentParagraph
    },
    data () {
      const _this = this
      return {
        timeline: undefined,
        query: undefined,
        requestTransform: async rows => {
          for (let i in rows) {
            const transformed = {}
            const row = rows[i]
            const meta = await _this.$store.dispatch('metadata/getLocal', row)
            transformed.title = meta && meta.title ? meta.title : _this.$t('labels.title_unknown')
            if (row.target.selector) {
              const parsed = row.target.selector.parse()
              if (Array.isArray(parsed['date-time:t'])) transformed.date = parsed['date-time:t'][0]
              else transformed.date = parsed['date-time:t']
            }
            transformed.last_updated = row.updated ? row.updated : row.created
            const tags = await _this.$store.dispatch('tags/get', row)
            transformed.tags = tags.join(', ')
            transformed.author = row.author ? row.author.name : _this.$t('labels.unknown_author')
            transformed._uuid = row._uuid
            transformed.id = row.id
            rows[i] = transformed
          }
          return rows
        },
        config: {
          pagination: {
            sortBy: 'date',
            descending: true
          },
          columns: [
            {
              name: 'title',
              label: _this.$t('labels.title'),
              field: 'title',
              sortable: true,
              filter: true
            },
            {
              name: 'date',
              label: _this.$t('labels.date'),
              sortable: true,
              sort: _this.$sort.onDateValue,
              field: 'date',
              format: val => DateTime.fromISO(val)
                .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
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
              name: 'tags',
              label: _this.$t('labels.tags'),
              filter: true,
              sortable: false,
              field: 'tags'
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
              type: 'live-annotate',
              title: 'buttons.annotate',
              color: 'primary',
              click: (item) => _this.$router.push({ name: 'piecemaker.videos.annotate', params: { uuid: item._uuid } })
            },
            {
              type: 'edit',
              title: 'buttons.edit',
              click: (item) => _this.$router.push({ name: 'piecemaker.videos.edit', params: { uuid: item._uuid } })
            },
            {
              type: 'sync',
              title: 'buttons.synchronize',
              click: (item) => {
                _this.$router.push({
                  name: 'piecemaker.videos.sync',
                  params: { uuid: item._uuid }
                })
              }
            },
            {
              type: 'delete',
              title: 'buttons.delete',
              click: (item) => {
                this.$refs.confirmModal.show('buttons.delete', item, 'buttons.delete')
              }
            }
          ]
        }
      }
    },
    async mounted () {
      this.timeline = await this.$store.dispatch('maps/get', this.$route.params.uuid)
      if (this.timeline) {
        this.query = {
          'body.purpose': 'linking',
          'body.type': 'Video',
          'target.id': this.timeline.id
        }
      }
    },
    methods: {
      async handleConfirmModal (item) {
        await this.$store.dispatch('annotations/delete', item._uuid)
        if (item.id) {
          const results = await this.$store.dispatch('annotations/find', {
            'target.id': item.id,
            'body.purpose': 'describing',
            'body.type': 'TextualBody'
          })
          for (let a of results.items) {
            await this.$store.dispatch('annotations/delete', a._uuid)
          }
        }
        this.$refs.listTable.request()
      }
    },
    computed: {
      ...mapGetters({
        isMobile: 'globalSettings/getIsMobile'
      }),
      timelineTitle () {
        return this.timeline ? this.timeline.title : ''
      }
    }
  }
</script>
