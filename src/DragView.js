import React, { useState } from "react";
import DragItem from './DragItem';

const DragView = ({ items, onDropCallback }) => {
  const [ dragInProcess, setDragInProcess ] = useState(false);
  const [ draggedIndex, setDraggedIndex ] = useState();

  const onDragOver = (e) => {
    e.preventDefault(); // what is this default
    e.dataTransfer.dropEffect = "move";
    setDragInProcess(true);
    // setDraggedOverIndex(e.currentTarget)
  };

  const onDragStart = (i) => {
    setDraggedIndex(i);
  }

  const onDragEnd = () => {
    setDraggedIndex(null);
  }

  const onDrop = (e) => {
    e.preventDefault();
    setDragInProcess(false);

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
      onDragLeave={() => {}}
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

export default DragView;
