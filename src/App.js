import React from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import TableData from "./components/TableData";

import "./App.css";


function App() {
  return (
    <div className="App">
    	<Wrapper>
    		<Header />
  			<TableData/>
  		</Wrapper>
    </div>
  );
}



export default App;
