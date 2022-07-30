import React from "react"
import Settings from "./Settings";
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

export default function AppDrawer(props) {

    return (

            <Drawer open={props.settings["showSidebar"]} onClose={() => props.toggleSettings("showSidebar")}>
                <div className="settings-header">Settings</div>
                <Divider />
                <Settings settings = {props.settings} toggleSettings = {props.toggleSettings}/>
                <Divider />
            </Drawer>

    )
}

