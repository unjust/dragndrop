import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const DragItem = function(props) {
  const {
    text,
    index,
    onDragStartCallback,
    onDragEndCallback } = props; 

  const [ isDragging, setIsDragging ] = useState(false);
  const [ isDraggedOver, setIsDraggedOver ] = useState(false);

  const divRef = useRef(null);
  const spanRef = useRef(null);

  const onDragEnd = () => {
    setIsDragging(false);
    onDragEndCallback();
  }

  const onDragStart = () => {
    setIsDragging(true);
    onDragStartCallback(index);
  };

  const truncateText = (text) => {
    // calculate / obtain the width of the cell
    const cellEl = divRef.current;
    const textEl = spanRef.current;
  
    if (!cellEl || !textEl) {
      return text;
    }
    const cellWidth = parseInt(getComputedStyle(cellEl).width);
    const textWidth = textEl.getBoundingClientRect().width;
    const charWidth = textWidth / text.length;
    let charsToCut = Math.ceil((textWidth - cellWidth) / charWidth);
    
    if (!(charsToCut > 0)) {
      return text;
    }
    const insertString = '...';
    charsToCut += insertString.length;
    const indexStart = Math.floor((text.length - charsToCut) / 2);
    const modifiedText = text.split('');
    modifiedText.splice(indexStart, charsToCut, insertString);
    return modifiedText.join('');
  };

  return (
    <div
      ref={divRef}
      className={`drag-item ${isDragging ? "drag-item--dragging" : ""} ${isDraggedOver ? "drag-item--over" : ""}`}
      data-index={index}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={(e) => setIsDraggedOver(true)}
      onDragLeave={(e) => setIsDraggedOver(false)}
    >
      <span ref={spanRef}>
        {truncateText(text)}
      </span>
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
