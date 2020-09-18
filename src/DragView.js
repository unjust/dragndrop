import React, { useState } from "react";
import DragItem from './DragItem';

const DragView = ({ items }) => {

  const onDragOver = (e) => {
    e.preventDefault(); // what is this default
    console.log("over");
  };

 
  const onDrop = (e) => {
    e.preventDefault();
    console.log("drop");
  };

  return (
    <section
      id="dragView"
      onDragLeave={() => {}}
      onDragOver={onDragOver}
      onDrop={onDrop}>
  
      {items.map((item, i) => <DragItem key={`q${i}`} index={i} text={item} />)}

    </section>
  );
}

export default DragView;
