import React from "react";
import "./style.css";
import { Card } from "./Card";
import img2 from "./../../../img/imag2.png";
import AnchorIcon from '@mui/icons-material/Anchor';
export default function ListCard() {
  let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Rem blanditiis at perspiciatis nesciunt laborum? Quo rerum consequuntur
  quaerat dolor inventore natus veniam eius saepe nobis id! Impedit est exce`;
  return (
  <>
    <AnchorIcon className="icons" />
    <div className=" grid-container ">

      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
    </div>

    <div className=" grid-container ">

      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
      <Card title="title" imageUrl={img2} body={text} />
    </div>
  </>

  );
}
