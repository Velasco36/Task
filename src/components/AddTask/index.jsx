import React from 'react'
import { CardDesing } from './CardDesign/index'
import "./style.css"
import {Headers} from "../Home/Headers/Headers"


export default function AddTask() {
  return (
    <>
      <div className="app-container background">
     <Headers/>
      <div className='background'>
        <CardDesing />
      </div>
    </div>
    </>

  );
}
