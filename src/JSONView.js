import React from "react";


const JSONView = ({ text, onChangeCallback }) => {

  return (
    <section>
      <textarea
        className="text-area"
        onChange={(e) => { onChangeCallback(e.target.value)}}
        value={ text } />
    </section>
  );
}

export default JSONView;
