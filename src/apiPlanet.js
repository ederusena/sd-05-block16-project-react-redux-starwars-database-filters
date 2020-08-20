const API_PLANET = "https://swapi-trybe.herokuapp.com/api/planets/";

export const getApiPlanet = () => (
  fetch(API_PLANET)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);
