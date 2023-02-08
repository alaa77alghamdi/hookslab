import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Updata() {
   

    const [list, setList] = React.useState("");
    const [data, setData] = React.useState<any[]>([]);
    const api = `https://63e210c3109336b6cbfec2e9.mockapi.io/Login/${id}`
    const [id,setid]= React.useState<any>("")
    const navigate = useNavigate()

React.useEffect(()=>{
    setid(localStorage.getItem("id"))
})
const updatapost = () => {
    if (list.length >= 0) {
      axios
        .post(api, {
          list,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("id", res.data.id);
        });
      axios.get("https://63e37e85619fce55d41a31f1.mockapi.io/Todo");
    } else {
    }
  };
          
    
  return (
    <div>   
        <input placeholder=' list' onChange={e =>{setList(e.target.value)}}></input>
    <br></br>
   
    <br></br>
    <button onClick={updatapost} > تحديث</button></div>
  )
}

export default Updata