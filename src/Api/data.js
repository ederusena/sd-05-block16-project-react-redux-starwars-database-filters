const dataApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requisitionApi = (dataApi) =>
  fetch(dataApi)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(`Resultado não encontrado ${err}`));
    
export default requisitionApi;