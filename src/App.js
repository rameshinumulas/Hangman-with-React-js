import React, { createContext, useContext } from 'react';
import Hangman from './components/Hangman';
import Bind from './practice/Bind';
import Context from './practice/Context';
import Refs from './practice/Refs';
export const userContext = createContext(null)

function App() {
  const [name, setname] = React.useState(1)
  return (
    <userContext.Provider value={{name,setname}}>
    <div className="App">
    {/* <Hangman /> */}
    <Refs />
    <Context />
    <Bind />
    </div>
    </userContext.Provider>
  );
}

export default App;
