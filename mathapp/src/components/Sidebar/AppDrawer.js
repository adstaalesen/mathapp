import React from "react"
import SettingsList from "./SettingsList";
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import DifficultyButton from "./DifficultyButton";

export default function AppDrawer(props) {

    return (

            <Drawer open={props.showSidebar} onClose={() => props.toggleSidebar()} className = "settings-app-drawer">
                <img className = "math-picture" src= "https://img.icons8.com/ios/344/math.png"/>
                <div className="settings-header">Settings</div>
                <Divider />
                <SettingsList settings = {props.settings} toggleSettings = {props.toggleSettings}/>
                <Divider />
                <DifficultyButton incrementDifficulty = {props.incrementDifficulty} difficulty = {props.settings.difficulty}/>
                <Divider />
            </Drawer>

    )
}

