const notifications = {
  namespaced: true,
  state: {
    messages: []
  },
  mutations: {
    addMessage: (state, message) => {
      state.messages.push(message)
    },
    clearMessages: state => {
      state.messages = []
    }
  }
}

export default notifications
