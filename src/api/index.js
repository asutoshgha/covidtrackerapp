import axios from "axios";

const url="https://covid19.mathdro.id/api";

export const fetchdata=async ()=>{
  try{
    const {data:{confirmed,recovered,deaths,lastUpdate}}= await axios.get(url);
    return {confirmed,recovered,deaths,lastUpdate};
  }
  catch(error){

  }
}

export const fetchDailyData=async ()=>{
  try{
    let url1=url+"/daily";
    const {data}=await axios.get(url1);
    console.log(data);
  }
  catch(error){

  }
}
