import React, { useState } from 'react';

const DragItem = function({ text, index }) {

  const [ isDragging, setIsDragging ] = useState(false);

  const onDragEnd = () => {
    setIsDragging(false);
  }

  const onDragStart = () => {
    // e.dataTransfer.dropEffect = "move";
    setIsDragging(true);
  };

  return (
    <div
      className={`drag-item ${isDragging ? 'drag-item--dragging' : ''}`}
      data-index={index}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {text}
    </div>
  );
}

export default DragItem;
