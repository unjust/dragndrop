import React, { useState } from 'react';
import DragView from './DragView';
import JSONView from './JSONView';

const initialItems = [ "Hello 1", "Something something 2", "Que tal 3", "WTF 4???", "the end 5" ];

const isValidJSON = json => {
  try {
    JSON.parse(json);
    return true;
  } catch (err) {
    return false;
  }
}

function App() {
  const [ validItemsData, setValidItemsData ] = useState(initialItems);
  const [ jsonViewText, setJSONViewText ] = useState(JSON.stringify(initialItems));
  
  const onDragViewChange = (items) => {
    setValidItemsData(items);
  }

  const onJSONViewChange = (text) => {
    
    setJSONViewText(text);

    const isValid = isValidJSON(text);
    if (isValid) {
      setValidItemsData(JSON.parse(text));
    }
  }

  return (
    <div id="container">
      <DragView items={validItemsData} onDropCallback={onDragViewChange} />
      <JSONView text={jsonViewText} onChangeCallback={onJSONViewChange} />
    </div>
  );
}

export default App;
