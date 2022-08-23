import React from "react"
import Settings from "./Settings";
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import DifficultyButton from "./DifficultyButton";

export default function AppDrawer(props) {

    return (

            <Drawer open={props.showSidebar} onClose={() => props.toggleSidebar()}>
                <div className="settings-header">Settings</div>
                <Divider />
                <Settings settings = {props.settings} toggleSettings = {props.toggleSettings}/>
                <Divider />
                <DifficultyButton incrementDifficulty = {props.incrementDifficulty} difficulty = {props.settings.difficulty}/>
                <Divider />
            </Drawer>

    )
}

