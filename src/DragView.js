import React, { useState } from "react";
import DragItem from './DragItem';
import PropTypes from 'prop-types';

const DragView = ({ items, onDropCallback }) => {
  const [ draggedIndex, setDraggedIndex ] = useState();

  const onDragStart = (i) => {
    setDraggedIndex(i);
  }

  const onDragEnd = () => {
    setDraggedIndex();
  }

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const droppedIndex = e.target.dataset.index;
    const draggedItem = items[draggedIndex];
    items.splice(draggedIndex, 1);
    if (droppedIndex) {
      items.splice(parseInt(droppedIndex), 0, draggedItem);
    } else {
      items.push(draggedItem);
    }
    onDropCallback(items);
  };

  return (
    <section
      id="drag-view"
      className={ `${draggedIndex >= 0 ? "" : "no-drag-state" }`}
      onDragOver={onDragOver}
      onDrop={onDrop}>
  
      {items.map((item, i) => 
        <DragItem key={`q${i}`}
          index={i}
          text={item}
          onDragStartCallback={onDragStart}
          onDragEndCallback={onDragEnd} />
      )}

    </section>
  );
}

DragView.propTypes = {
  items: PropTypes.array,
  onDropCallback: PropTypes.func
};

export default DragView;
