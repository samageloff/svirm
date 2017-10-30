export const replaceMergeTags = (text, variable, value) => {
  const re = new RegExp('{\\s*' + variable + '\\s*(\\|{2})*\\s*([\'"](\\s*([a-zA-Z0-9\\s])*)[\'"])*\\s*}', 'g');
  let matches;
  let mergeTag;
  let defaultValue;
  let replaceValue;
  let textCopy = text;

  // Search for all instances of merge tag with optional default value, example: {first_name || 'Your friend'}
  // Example matches array: ["{first_name || "Your friend"}", "||", "'Your friend'", "Your friend", "d"]
  while((matches = re.exec(text)) !== null) {
    if (matches.length >= 4) {
      mergeTag = matches[0]; // Example mergeTag: {first_name || 'Your friend'}
      defaultValue = matches[3] ? matches[3] : ''; // Example defaultValue: Your friend

      // If value is empty use defaultValue from mergeTag
      replaceValue = value || defaultValue;
      textCopy = textCopy.replace(mergeTag, replaceValue);
    }
  }

  return textCopy;
}
