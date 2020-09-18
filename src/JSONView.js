import React, { useCallback } from "react";
import { prettifyJSON, isValidJSON } from './jsonUtils';

const JSONView = ({ text, onChangeCallback, lastValidJSON }) => {

  const isValid = isValidJSON(text);

  const onChange = useCallback((e) => {
    onChangeCallback(e.target.value);
  },[ onChangeCallback ]);

  const onReset = () => {
    onChangeCallback(prettifyJSON(lastValidJSON));
  }

  return (
    <section>
      { !isValid &&
        <>
          <p>Please enter valid JSON.</p>
          <button type="button" onClick={onReset}>Reset to last valid JSON</button>
        </>
      }
      <textarea
        className="text-area"
        value={text}
        onChange={onChange} />
    </section>
  );
}

export default JSONView;
