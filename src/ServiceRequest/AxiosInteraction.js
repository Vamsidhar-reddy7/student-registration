import axios from "axios";
export const DOMAIN_CONTEXT_URL = "http://localhost:8080";
var configJSON = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      MimeType: "text/xml",
    },
  };
class Axiosinteraction{
    
register(params){
let obj= axios.post(
    DOMAIN_CONTEXT_URL+"/register",
    params,
    configJSON,

)
return obj;
}
getAllStudent(){
    let obj=axios.post(
    DOMAIN_CONTEXT_URL+"/getStudentdetails",
    configJSON,
    )
    return obj;
}
}
export default new Axiosinteraction();