import React, { useState } from "react";


const DragView = (props) => {

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
  
      DragView

    </section>
  );
}

export default DragView;
