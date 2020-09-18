import React from 'react';
import DragView from './DragView';
import JSONView from './JSONView';

const initialItems = [ "Hello 1", "Something something 2", "Que tal 3", "WTF 4???", "the end 5" ];

function App() {
  return (
    <div id="container">
      <DragView items={initialItems} />
      <JSONView text={JSON.stringify(initialItems)} />
    </div>
  );
}

export default App;
