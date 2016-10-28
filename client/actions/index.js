export function finishQuestion(survey, data) {
  return { type: "FINISH_QUESTION", survey, data: data[0] }
}
