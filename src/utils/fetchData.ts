type askQuestionData = {
  quote: string
  quote_by: string
  ref: string
  media_url: string
  media_type: string
}

const URL = 'http://localhost:3000'

export const askQuestion = async (
  question: string
): Promise<askQuestionData> => {
  const response = await fetch(`${URL}/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: question,
    }),
  })

  const data = response.json()

  if (response.ok) {
    return Promise.resolve(data)
  } else {
    return Promise.reject(`${response.status} ${response.statusText}`)
  }
}
