<template lang="pug">

  // TOP CENTER
  //
  //
  .row.q-mt-md(v-shortkey="shortcuts.focusInput", @shortkey="setFocusOnInput()")

    // q-btn.fixed-bottom-left.q-ma-md(color="primary", outline) alt

    // BUTTON - SWITCH BETWEEN TEXT INPUT AND VOCABULARY

    .col-xs-2.offset-xs-1.col-md-1.offset-md-1.col-lg-1.offset-lg-2.text-right.q-pa-sm.q-pr-md
      q-btn.text-primary.bg-grey-10(v-if="!vocabularyVisible && staging", round, icon="local_offer",
        v-shortkey="shortcuts.showVocabulary", @shortkey.native="toggleVocabulary()", @click="toggleVocabulary()")

    .col-xs-8.col-md-8.col-lg-6.bg-grey-10.relative-position(:class="{ 'shadow-4': vocabularyVisible }")

      // TEXT INPUT

      q-input.q-pa-md(v-model="annotationText", ref="textInput", type="textarea", autofocus, dark,
        :class="[vocabularyVisible ? 'q-pl-xl text-primary' : 'text-white']")

      // CLOSE BUTTON

      .absolute-top.q-mt-sm(v-if="staging", style="width: 3rem;")
        q-btn.q-ml-sm.q-mt-xs.q-mr-none.text-primary(round, flat, icon="clear", size="sm",
          v-if="vocabularyVisible", v-shortkey="shortcuts.showVocabulary",
          @shortkey.native="toggleVocabulary()", @click="toggleVocabulary()")

      // VOCABULARY (staging)

      div(v-if="staging")
        vocabulary(ref="vocabulary", @select-entry="selectEntry", @focus="setFocusOnInput", :highlight="selectedEntry")

</template>

<script>
  import { DateTime } from 'luxon'
  import { ObjectUtil } from 'mbjs-utils'

  import Vocabulary from './Vocabulary'

  export default {
    components: {
      Vocabulary
    },
    props: {
      newVocabularyEntry: String
    },
    data () {
      const defaultBodyText = {
        purpose: 'commenting',
        type: 'TextualBody'
      }
      const defaultBodyVocabulary = {
        source: {
          id: undefined
        },
        purpose: 'linking',
        type: 'VocabularyEntry'
      }
      const defaultSelector = {
        type: 'Fragment'
      }
      return {
        defaultBodyText,
        defaultBodyVocabulary,
        defaultSelector,

        annotationText: undefined,
        currentBody: ObjectUtil.merge({}, defaultBodyText),
        currentSelector: ObjectUtil.merge({}, defaultSelector),

        shortcuts: {
          focusInput: ['tab'],
          showVocabulary: ['alt']
        },
        submitArmed: false,
        selectedEntry: undefined,
        staging: process.env.IS_STAGING
      }
    },
    mounted () {
      window.addEventListener('keydown', this.onKeyDown)
      window.addEventListener('keyup', this.onKeyUp)
    },
    beforeDestroy () {
      window.removeEventListener('keydown', this.onKeyDown)
      window.removeEventListener('keyup', this.onKeyUp)
    },
    computed: {
      vocabularyVisible () {
        return this.$refs.vocabulary && this.$refs.vocabulary.visible
      }
    },
    watch: {
      newVocabularyEntry: function (val) {
        this.$refs.vocabularyModal.show(val)
      },
      annotationText (text) {
        if (!text) this.currentSelector.value = undefined
        else if (!this.selectedEntry) {
          this.currentSelector.value = this.currentSelector.value || DateTime.local().toISO()
        }
      },
      selectedEntry (entry) {
        if (entry) {
          this.currentSelector.value = this.currentSelector.value || DateTime.local().toISO()
          this.annotationText = entry.value
        }
        else this.annotationText = undefined
      }
    },
    methods: {
      setFocusOnInput () {
        this.$refs.textInput.focus()
      },
      toggleVocabulary () {
        this.$refs.vocabulary.toggle()
        if (this.$refs.vocabulary.visible) this.currentBody = ObjectUtil.merge({}, this.defaultBodyVocabulary)
        if (!this.$refs.vocabulary.visible) this.reset()
        this.setFocusOnInput()
      },
      selectEntry (entry) {
        this.selectedEntry = entry
        this.currentBody = ObjectUtil.merge({}, this.defaultBodyVocabulary, {
          source: { id: entry.id }
        })
        this.setFocusOnInput()
      },
      addToVocabulary (annotation) {
        this.$refs.vocabulary.addEntry(annotation.body.value)
      },
      reset () {
        this.submitArmed = false
        this.selectedEntry = undefined
        this.annotationText = undefined
        this.currentBody = ObjectUtil.merge({}, this.defaultBodyText)
        this.currentSelector = ObjectUtil.merge({}, this.defaultSelector)
        if (this.$refs.vocabulary.visible) this.$refs.vocabulary.toggle()
      },
      onKeyDown (event) {
        const key = event.key.toLowerCase().replace(/\s/g, '')
        if (key === 'enter') {
          event.preventDefault()
          if (this.submitArmed) {
            const annotation = {
              body: ObjectUtil.merge({}, this.currentBody),
              target: {
                selector: ObjectUtil.merge({}, this.currentSelector)
              }
            }
            if (!this.selectedEntry) annotation.body.value = this.annotationText
            this.reset()
            this.$emit('annotation', annotation)
          }
          else {
            this.submitArmed = true
          }
          if (this.annotationText) this.annotationText = this.annotationText.trim()
        }
        else if (key === 'escape') {
          console.debug('esc')
          this.reset()
        }
        else this.setFocusOnInput()
      },
      onKeyUp () {
        if (this.annotationText) this.annotationText = this.annotationText.trim()
      }
    }
  }
</script>