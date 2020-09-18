import React, { useCallback } from "react";
import PropTypes from 'prop-types';
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
        <div id="valid-message">
          <div>Please enter valid JSON.</div>
          <button type="button" onClick={onReset}>Reset to last valid JSON</button>
        </div>
      }
      <textarea
        className="text-area"
        value={text}
        onChange={onChange} />
    </section>
  );
}

JSONView.propTypes = {
  text: PropTypes.string,
  lastValidJSON: PropTypes.array,
  onChangeCallback: PropTypes.func
};



export default JSONView;
