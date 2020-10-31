import './App.css';
import React from "react";
import SearchIcon from '@material-ui/icons/Search';

function App() {
    return (
        <div className="app">
            <h1>AeroSoar</h1>
            <div className="app__section">
                <div className="app__caption">
                    Please enter your ticket number
                </div>
                <div className="app__search">
                    <input type="text" className="app__searchBar" />
                    <SearchIcon className="app__searchIcon"
                                style={{fontSize: "32px", width: "40px"}}/>
                </div>
            </div>
        </div>
    );
}

export default App;
