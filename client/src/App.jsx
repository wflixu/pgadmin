import React, { useEffect } from "react";
import "./App.css";
import Theme from './Theme/index';
import BrowserComponent from './BrowserComponent';
import pgAdmin from './pgadmin'
import pgBrowser from "./browser/browser";

function App() {
    useEffect(() => {
       console.log("App.js is mounted", pgAdmin);
    }, []);
    // pgAdmin?.init();
    pgBrowser.init();
    return (
        <Theme>
            <BrowserComponent pgAdmin={pgAdmin} />
        </Theme>
    );
}

export default App;
