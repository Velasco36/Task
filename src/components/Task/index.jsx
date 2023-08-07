import React from "react";
import { Headers } from "./Headers/Headers";
import { ButtonTask } from "./New Task/ButtonTask";
import "./style.css";
import ListCard from "./Cards/Background";

export function Task() {
  return (
    <div className="bg">
      <Headers />

      <ButtonTask />
      <div className="top">

      <h1 className="list" >
        List
      </h1>
      <ListCard />
      </div>

    </div>
  );
}
