
const initialState = {
  surveys: {
    1: {
        responses: [],
      trials:[{
        question:"question1",
        answers: ["answer1", "answer2", "answer3"],
      }, {
          question:"question2",
          answers: ["answer1", "answer2", "answer3"],
        },
      {
            question:"question3",
            answers: ["answer1", "answer2", "answer3"],
          }
      ]
    },
    2: {
            responses: [],
      trials:[{
        question:"question1",
        answers: ["answer1", "answer2", "answer3"],
      }, {
          question:"question2",
          answers: ["answer1", "answer2", "answer3"],
        },
      {
            question:"question3",
            answers: ["answer1", "answer2", "answer3"],
          }
      ]
    }
  }

}

export default function(state = initialState, action) {
  console.log(state);
  switch(action.type) {
    case 'FINISH_QUESTION': {
      let newState = Object.assign({}, state);
      newState.surveys[action.survey].responses.push(action.data);
      return newState;
    }
    default:
      return state;
  }

}
