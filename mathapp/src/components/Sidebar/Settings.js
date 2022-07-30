import React from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function Settings(props) {

    const allSettings = Object.keys(props.settings)

    const settingsElements = allSettings.map((setting) => {
        
        return (
            <div className="settings-toggle">
            <FormControlLabel control={
                <Switch
                    checked = {props.settings[setting]}
                    onChange = {() => props.toggleSettings(setting)}
                />} 
                label = {`${setting} | ${props.settings[setting]}`} 
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