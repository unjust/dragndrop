import React from "react";


const JSONView = ({ text }) => {
  
  return (
    <section>
      <textarea
        className="text-area"
        onChange={(e) => {}}
        value={ text } />
    </section>
  );
}

export default JSONView;
