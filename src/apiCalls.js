import 'isomorphic-fetch';

export const getAllLocations = async () => {
  const data = await fetch('/locations', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  return await data.json()
}

export const postNewLocation = async (location) => {
  const data = await fetch('/locations', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(location)
  })

  return await data.json()
}