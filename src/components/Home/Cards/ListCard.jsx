import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import clientAxios from "../../../config/axios";
import { Card } from "./Card";
import "./style.css";

export default function ListCard() {
  const [Tasks, setTask_back] = useState([]);
  // const Users = useSelector((state) => state.users);
  // console.log(Users)
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await clientAxios.get("tasks", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const tasksData  = response.data.data.tasks

        console.log(tasksData)
          setTask_back(tasksData)

        } else {
          console.log("No se encontró un token en el localStorage.");
        }
      } catch (e) {
        console.error("Error al obtener los datos:", e);
      }
    };
    fetchData();
  }, [token]);

  console.log(Tasks)


  return (
    <div className="grid-container">
      {Tasks.length === 0 && <div className="empty-placeholder"></div>}
      {Tasks.map((Task, index) => (
        <Card key={index} title={Task.name} body={Task.description}/>
      ))}

    </div>
  );
}
