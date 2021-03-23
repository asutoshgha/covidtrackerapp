import React,{useState,useEffect} from "react";
import {fetchDailyData} from "../../api";



const Chart=()=>{
  const [fetchdata, setfetchdata] = useState([]);
  useEffect(
    ()=>{
      const fetchapi=async ()=>{
        setfetchdata(await fetchDailyData());
      }
      fetchapi();
      console.log(fetchdata);
    }
  );


  return(
    <h1>Chart</h1>
  )
}

export default Chart;
