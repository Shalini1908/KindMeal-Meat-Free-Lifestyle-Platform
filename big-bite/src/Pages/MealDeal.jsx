import axios from "axios";
import { useState , useEffect } from "react";

const fetchdata=()=>{

    return axios.get(`http://localhost:3000/item`);
  }
  
     export default function MealDeal(){
    const [data,setData]=useState([])
     
     useEffect(()=>{
        fetchdata().then((res)=>setData(res.data))
        
      },[])
      console.log(data)

    }