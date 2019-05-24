import React from 'react';
import Character from "./rickandmorty/rickandmorty.controller";

function App() {
    return (
        <div>
           <Character pagination={9}/>
        </div>
  );
}

export default App;
