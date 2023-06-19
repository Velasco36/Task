import React from "react";
import "./style.css";
import { Card } from "./Card";
import img2 from "./../../../img/imag2.png";

export default function ListCard() {
  let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Rem blanditiis at perspiciatis nesciunt laborum? Quo rerum consequuntur 
  quaerat dolor inventore natus veniam eius saepe nobis id! Impedit est exce`;
  return (
    <div className=" grid-container background">
      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
    </div>
  );
}