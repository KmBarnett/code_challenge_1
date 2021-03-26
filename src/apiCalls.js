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