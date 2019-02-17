import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import WebAuth from 'mbjs-api-client/src/web'
import { makeResourceModule } from 'mbjs-quasar/src/lib'

/** Import resource Data Models */
import {
  Annotation,
  Map,
  Document
} from 'mbjs-data-models/src/models'

/** Import custom modules */
import {
  auth,
  acl,
  conversions,
  files,
  forms,
  tags,
  timecodes,
  metadata,
  mosysGridEditorStore,
  notifications
} from './modules'

/** Instantiate Motion Bank API Client */
const apiClient = new WebAuth({
  auth: {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    redirectUri: process.env.AUTH0_REDIRECT_URL,
    audience: process.env.AUTH0_AUDIENCE,
    scope: 'openid profile read write',
    responseType: 'token id_token'
  },
  host: process.env.API_HOST
})

/**
 * Set up VueX store
 */
const store = new Vuex.Store({
  modules: {
    /** Basic resources using API Client */
    annotations: makeResourceModule(apiClient, Annotation, 'annotation'),
    maps: makeResourceModule(apiClient, Map, 'map'),
    documents: makeResourceModule(apiClient, Document, 'document'),
    profiles: makeResourceModule(apiClient, undefined, 'profile'),
    sessions: makeResourceModule(apiClient, undefined, 'session'),

    /** Custom stores */
    acl,
    auth,
    conversions,
    files,
    forms,
    tags,
    timecodes,
    metadata,
    mosysGridEditorStore,
    notifications
  }
})

export default store
