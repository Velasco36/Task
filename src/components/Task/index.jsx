import React from "react";
import { Headers } from "./Headers/Headers";
import { ButtonTask } from "./New Task/ButtonTask";
import "./style.css";
import ListCard from "./Cards/Background";

export function Task() {
  return (
    <div className="bg">
      <Headers />
      <h1 className="list" >
        Task List
      </h1>
      <ButtonTask />
     
      <ListCard />
    </div>
  );
}
