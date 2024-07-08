class ErrorBase extends Error{
   constructor(
      message = "Erro interno do servdor",
      status = 500
   ){
      super()
      this.message = message
      this.status = status
   }
}
export default ErrorBase