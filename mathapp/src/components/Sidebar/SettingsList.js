import React from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import { SettingsMapping } from "./src/settings/Model/SettingsMapping";
import { SettingsMapping } from "../../settings/Model/SettingsMapping";

export default function SettingsList(props) {

    const settingsElements = SettingsMapping.filter((setting) => (setting.expose)).map((setting) => {
        
        return (
            <div className="settings-toggle" key = {setting.key}>
                <FormControlLabel control={
                    <Switch
                        checked = {props.settings[setting.key]}
                        onChange = {() => props.toggleSettings(setting.key)}
                    />} 
                    label = {`${setting.label}`} 
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