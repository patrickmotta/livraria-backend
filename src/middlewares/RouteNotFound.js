import NotFound from "../errors/NotFound.js"

function RouteNotFound(){
   throw new NotFound("Endpoint não encontrado")
}

export default RouteNotFound