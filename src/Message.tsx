// Message component

// PascalCasing unlike camelCasing the word starts captial letter
function Message() {
  const name = 'Javier';
  // JSX: Javascript XML
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello Stranger</h1>; //else statement
}

export default Message;
