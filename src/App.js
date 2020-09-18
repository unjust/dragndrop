import React, { useState } from "react";
import DragView from "./DragView";
import JSONView from "./JSONView";
import { prettifyJSON, isValidJSON } from "./jsonUtils";

const initialItems = [ "1 🐠 ", "2 🐟 🐟", "3 🐙 🐙 🐙", "4 🐬 🐬 🐬 🐬 ", "5 🐢 🐢 🐢 🐢 🐢" ];

function App() {
  const [ validItemsData, setValidItemsData ] = useState(initialItems);
  const [ jsonViewText, setJSONViewText ] = useState(prettifyJSON(initialItems));
  
  const onDragViewChange = (items) => {
    setValidItemsData(items);
    setJSONViewText(prettifyJSON(items));
  }

  const onJSONViewChange = (text) => {
    setJSONViewText(text);
    const isValid = isValidJSON(text);
    if (isValid) {
      setValidItemsData(JSON.parse(text));
    }
  }

  return (
    <div className="flex-container">
      <DragView items={validItemsData} onDropCallback={onDragViewChange} />
      <JSONView text={jsonViewText} lastValidJSON={validItemsData} onChangeCallback={onJSONViewChange} />
    </div>
  );
}

export default App;
