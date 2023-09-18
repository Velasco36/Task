import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import clientAxios from "../../../config/axios";
import { Card } from "./Card";
import "./style.css";

export default function ListCard() {


  const [Tasks, setTask_back] = useState([]);

  const Users = useSelector((state) => state.users);
  console.log(Users)
  const token = localStorage.getItem("token");
  const user_name = localStorage.getItem("user");


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await clientAxios.get("users", {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response.data)
          const get_user = response.data.filter((data) => data.nickName === user_name )

          const task_response = get_user[0].task
          console.log(task_response)
          setTask_back(task_response)


        } else {
          console.log("No se encontró un token en el localStorage.");
        }
      } catch (e) {
        console.error("Error al obtener los datos:", e);
      }
    };
    fetchData();
  }, [token, user_name]);

  // const Tasks = useSelector((state) => state.tasks);

  return (
    <div className="grid-container">
      {Tasks.length === 0 && <div className="empty-placeholder"></div>}
      {Tasks.map((Task, index) => (
        <Card key={index} title={Task.name} body={Task.description}/>
      ))}
      {/* <button className="add-card-btn" onClick={addCard}>Add Card</button> */}
    </div>
  );
}








// const config = {
//   method: 'post',
//   url: 'http://localhost:3333/tasks',
//   headers: {
//     'Authorization': `Bearer ${token}`
//   },
//   data: data
// }

