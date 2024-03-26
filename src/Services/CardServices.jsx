export const updateCard = async (body, id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/cardapp/cards/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export const createCard = async (body) => {
  try {
    const response = await fetch(`http://localhost:8000/api/cardapp/cards/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getListCards = async () => {
  const response = await fetch('http://localhost:8000/api/cardapp/cards/')
  const data = await response.json()
  return data
}

export const getCardById = async (id) => {
  const response = await fetch(`http://localhost:8000/api/cardapp/cards/${id}`)
  const data = await response.json()
  return data
}

export const deleteCard = async (id) => {
  const response = await fetch(`http://localhost:8000/api/cardapp/cards/${id}/`, {
      method: "DELETE"
    }).then(async response => {
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson && await response.json();
      if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
      }
  })
  .catch(error => {
      element.parentElement.innerHTML = `Error: ${error}`;
      console.error('There was an error!', error);
  });
}