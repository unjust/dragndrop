import React, { useState } from 'react';

const DragItem = function(props) {
  const {
    text,
    index,
    onDragStartCallback,
    onDragEndCallback } = props;

  const [ isDragging, setIsDragging ] = useState(false);

  const onDragEnd = () => {
    setIsDragging(false);
    onDragEndCallback();
  }

  const onDragStart = () => {
    // e.dataTransfer.dropEffect = "move";
    setIsDragging(true);
    onDragStartCallback(index);
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
