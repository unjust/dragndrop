export const isValidJSON = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch (err) {
    return false;
  }
}

export const prettifyJSON = (json) => JSON.stringify(json, null, "\t");
