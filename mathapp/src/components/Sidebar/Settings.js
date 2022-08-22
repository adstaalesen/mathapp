import React from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { SettingsMapping } from "../Models/SettingsMapping";

export default function Settings(props) {

    const settingsElements = SettingsMapping.filter((setting) => (setting.expose)).map((setting) => {
        
        return (
            <div className="settings-toggle">
                <FormControlLabel control={
                    <Switch
                        checked = {props.settings[setting.key]}
                        onChange = {() => props.toggleSettings(setting.key)}
                    />} 
                    label = {`${setting.label} | ${props.settings[setting.key]}`} 
                />
            </div>
        )}
    )

    return (
        <FormGroup className = "settings-elements"> 
            {settingsElements}
        </FormGroup>
    )
}