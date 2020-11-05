import React from "react";

import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../context/LanguageContext";

const App = () => {
    return (
        <div className="ui container">
            <LanguageStore>
                <LanguageSelector />
                <UserCreate />
            </LanguageStore>
        </div>
    );
};

export default App;
