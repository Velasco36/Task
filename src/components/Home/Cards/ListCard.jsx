import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/axios";
import { Card } from "./Card";
import "./style.css";

export default function ListCard() {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await clientAxios.get("tasks", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const tasksData = response.data.data.tasks;

          tasksData.sort((task, b) => {
            return task.state === "anchored" && b.state !== "anchored" ? -1 : 1;
          });

          setTasks(tasksData);
        } else {
          console.log("No se encontró un token en el localStorage.");
        }
      } catch (e) {
        console.error("Error al obtener los datos:", e);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="grid-container">
      {tasks.length === 0 && <div className="empty-placeholder"></div>}
      {tasks.map((task, index) => (
        <Card
          key={index}
          id={task.id}
          title={task.name}
          body={task.description}
          color={task.color}
          state={task.state}
          date={task.limit_at}
        />
      ))}
    </div>
  );
}
