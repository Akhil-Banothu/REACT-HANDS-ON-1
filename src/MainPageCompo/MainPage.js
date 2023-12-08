import React, { useState } from 'react';
import FunctionCompo from '../Components/FunctionCompo';
import ClassCompo from '../Components/ClassCompo';

export const MainPage = () => {

  const [func1, setFunc] = useState(false);
  const [class1, setClass] = useState(false);

  return (
    <div className="container">
      <h1 className="heading">Styling using Functional and Class Component</h1>

      <div className="btn-container">
        <button className="btn" onClick={()=> setFunc(!func1)}>To see styling in functional component</button>
        <button className="btn" onClick={()=> setClass(!class1)}>To see styling in class component</button>
      </div>

      <div className="components">
        {func1 && <FunctionCompo />}
        {class1 && <ClassCompo />}
      </div>
    </div>
  )
}
