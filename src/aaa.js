import { functionTypeAnnotation } from "@babel/types";
import { format } from "url";

function validatedata(){
var user= document.getElementById('user').Value;
     if(user=="  "){

        document.getElementById('username').innerHTML ="please enter ur email first";
     }
    }