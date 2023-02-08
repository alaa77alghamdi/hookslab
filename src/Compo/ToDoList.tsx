import React from "react";
import axios from "axios";
import "./style.css";

function ToDoList() {
  const [list, setList] = React.useState("");
  const [data, setData] = React.useState<any[]>([]);
  const api = "https://63e37e85619fce55d41a31f1.mockapi.io/Todo";

  React.useEffect(() => {
    axios.get(api).then((res) => {
      try {
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  const postTo = () => {
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
  const Deleteitem=(id:string) =>{

    axios.delete(`https://63e37e85619fce55d41a31f1.mockapi.io/Todo${id}`).then(res=>{
        setData(data.filter((del)=>{
            return del.id !=id
        }
        ))
    })
    };
  
  return (
    <div className="continer">
      <div>
      <input
        placeholder=" Add your list"
        onChange={(e) => {
          setList(e.target.value);
        }}
      ></input>
      <button onClick={postTo}>Click </button>
      </div>
      <div className="cardTod">
        
        <ul>
          {data.map((item: any) => (
            <div key={item.id}>
              <li className="changecolor"> Your list : {item.list} (click)=</li>
              <button onClick={()=> {Deleteitem(item.id)}}>delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  
  
  );
}

export default ToDoList;
