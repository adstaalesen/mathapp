import React from "react"
import Settings from "./Settings";

export default function Sidebar(props) {

    return (
        <Settings settings = {props.settings} toggleSettings = {props.toggleSettings}/>
    )
}
