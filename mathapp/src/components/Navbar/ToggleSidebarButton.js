import React from "react"
import ToggleButton from "@mui/material/Button"
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';


export default function ToggleSidebarButton(props) {

    return (

            <ToggleButton value="justify" key="justify" onClick = {() => props.toggleSettings("showSidebar")}>
                <FormatAlignJustifyIcon />
            </ToggleButton>
                    
    )
}