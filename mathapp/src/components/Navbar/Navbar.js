import React from "react"
import ToggleSidebarButton from "./ToggleSidebarButton";

export default function Navbar(props) {

    return (
        <div className="top-app-bar">
            <ToggleSidebarButton settings = {props.settings} toggleSettings = {props.toggleSettings}/>
            <nav className={props.settings.darkMode ? "dark": ""}>
                            
                <img 
                    className="nav--logo_icon"
                    src="./images/math-operations-1.png"
                    alt = ""
                />
                
                <h3 className="nav--logo_text">The Math App</h3>
            </nav>
        </div>
    )
}

