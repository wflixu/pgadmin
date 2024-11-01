import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Theme from './Theme/index';
import BrowserComponent from './BrowserComponent';

function App() {
	const [count, setCount] = useState(0);

	return (
	<Theme>
		<BrowserComponent pgAdmin={pgAdmin} />
	  </Theme>
	);
}

export default App;
