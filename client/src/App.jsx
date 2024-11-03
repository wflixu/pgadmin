import React from "react";
import { useState } from "react";
import "./App.css";
import Theme from './Theme/index';
import BrowserComponent from './BrowserComponent';
import pgAdmin from './pgadmin'

function App() {
    return (
        <Theme>
            <BrowserComponent pgAdmin={pgAdmin} />
        </Theme>
    );
}

export default App;
