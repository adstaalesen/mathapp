// Components that we need

// A Game that can be played
// toolbar
// calculator mode
// text mode 
// app component 

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import MenuBar from "./navbar/MenuBar";
import MenuBarWrapper from "./navbar/MenuBarWrapper";
import Game from "./game/Game";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);

        