const mutations = {
  setQuestions: (state, payload) => {
    state.questions = payload
  },
  setNewQuestion: (state, payload) => {
    state.questions.push(payload)
  },
  setUserQuestions: (state, payload) => {
    state.userQuestions = payload
  },
  setQuestionsAfterDelete: (state, payload) => {
    let checkIndex = state.userQuestions.findIndex(element => {
      return element._id === payload._id
    })
    state.userQuestions.splice(checkIndex, 1)
  },
  // setNewUserQuestionsAfterEdit: (state, payload) => {
  //   console.log(payload)
  // },
  setQuestionDetail: (state, payload) => {
    state.questionDetail = payload
  },

  /* ------------------------------------------------------------------------ */

  setAnswers: (state, payload) => {
    state.answers = payload
  },
  setNewAnswers: (state, payload) => {
    state.answers.push(payload)
  },
  setAnswersAfterDelete: (state, payload) => {
    let checkIndex = state.answers.findIndex(element => {
      return element._id === payload._id
    })
    state.answers.splice(checkIndex, 1)
  },

  /* ------------------------------------------------------------------------ */

  setQuestionsVoters: (state, payload) => {
    state.questionsVoters = payload
  },
  setNewQuestionsVoters: (state, payload) => {
    state.questionsVoters.push(payload)
  },
  setQuestionsVotersAfterDelete: (state, payload) => {
    let checkIndex = state.questionsVoters.findIndex(element => {
      return element._id === payload._id
    })
    state.questionsVoters.splice(checkIndex, 1)
  },

  /* ------------------------------------------------------------------------ */

  setAnswersVoters: (state, payload) => {
    state.answersVoters = payload
  }
  // ,setNewAnswers: (state, payload) => {
  //   state.answers.push(payload)
  // },
  // setAnswersAfterDelete: (state, payload) => {
  //   let checkIndex = state.answers.findIndex(element => {
  //     return element._id === payload._id
  //   })
  //   state.answers.splice(checkIndex, 1)
  // }
}

export default mutations
