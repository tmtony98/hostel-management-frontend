 import { BASEURL } from "./baseUrl";
 import { commonAPI } from "./CommonApi";

 //send  resident data into backend
 export const AddPeopleDataApi = async (peopleData)=>{
   return  await commonAPI("POST",`${BASEURL}/user/register`,peopleData,"")
 }

