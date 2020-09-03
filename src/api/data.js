const DataApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

/* Retorno API consultado StackOverflow
  https://stackoverflow.com/questions/55888233/filter-api-result-with-react */

const RequisitionApi = () =>
  fetch(DataApi)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(`Resultado não encontrado ${err}`));
    
export default RequisitionApi;
