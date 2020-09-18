import React, { useState } from "react";
import PropTypes from "prop-types";

const DragItem = function(props) {
  const {
    text,
    index,
    onDragStartCallback,
    onDragEndCallback } = props; 

  const [ isDragging, setIsDragging ] = useState(false);
  const [ isDraggedOver, setIsDraggedOver ] = useState(false);

  const onDragEnd = () => {
    setIsDragging(false);
    onDragEndCallback();
  }

  const onDragStart = () => {
    setIsDragging(true);
    onDragStartCallback(index);
  };

  return (
    <div
      className={`drag-item ${isDragging ? "drag-item--dragging" : ""} ${isDraggedOver ? "drag-item--over" : ""}`}
      data-index={index}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={(e) => setIsDraggedOver(true)}
      onDragLeave={(e) => setIsDraggedOver(false)}
    >
      {text}
    </div>
  );
}

DragItem.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number,
  onDragStartCallback: PropTypes.func,
  onDragEndCallback: PropTypes.func
};

export default DragItem;
