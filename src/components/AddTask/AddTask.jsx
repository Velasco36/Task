import React from 'react'
import { CardDesing } from './CardDesign/CardDesign'
import "./style.css"
import {Headers} from "./../Task/Headers/Headers"


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
