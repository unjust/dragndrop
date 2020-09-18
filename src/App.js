import React, { useState } from 'react';
import DragView from './DragView';
import JSONView from './JSONView';

const initialItems = [ "Hello 1", "Something something 2", "Que tal 3", "WTF 4???", "the end 5" ];

function App() {
  const [ validItemsData, setValidItemsData ] = useState(initialItems);

  const onDragViewChange = (items) => {
    setValidItemsData(items);
  }

  const onJSONViewChange = (text) => {
    setValidItemsData(JSON.parse(text));
  }

  return (
    <div id="container">
      <DragView items={validItemsData} onDropCallback={onDragViewChange} />
      <JSONView text={JSON.stringify(validItemsData)} onChangeCallback={onJSONViewChange} />
    </div>
  );
}

export default App;
