import ErrorBase from "./ErrorBase.js"

class AplicationError extends ErrorBase{
   constructor(error){
      super()
      this.error = error
   }
}

export default AplicationError