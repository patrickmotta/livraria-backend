import ErrorBase from "./ErrorBase.js"

class NotFound extends ErrorBase {
   constructor(message){
      super(message, 404)
   }
}

export default NotFound