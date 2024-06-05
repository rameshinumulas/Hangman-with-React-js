import React, { createContext } from 'react';
import Hangman from './components/Hangman';
export const userContext = createContext(null)

function App() {
  const [name, setname] = React.useState(1)
  return (
    <userContext.Provider value={{name,setname}}>
    <div className="App">
    <Hangman />
    </div>
    </userContext.Provider>
  );
}

export default App;
