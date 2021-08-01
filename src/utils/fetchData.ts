type askQuestionData = {
  quote: string
}

const URL = 'https://mairu-backend.herokuapp.com/'

export const askQuestion = async (): Promise<askQuestionData> => {
  const response = await fetch(URL || '/api', {
    method: 'GET',
  })

  const data = response.json()

  if (response.ok) {
    return Promise.resolve(data)
  } else {
    return Promise.reject(`${response.status} ${response.statusText}`)
  }
}
