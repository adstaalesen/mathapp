import React from "react";
import DenseAppBar from "./components/Navbar/DenseAppBar";
import AppDrawer from "./components/Sidebar/AppDrawer";
import Game from "./game/Game";
//https://mui.com/material-ui/react-switch/

export default function App() {

    const [score, setScore] = React.useState(0)
    
    const [settings, setSettings] = React.useState({
        addition: true,
        subtraction: false,
        multiplication: false,
        division: false,
        darkMode: false,
        showSidebar: false
    })

    function incrementScore() {
        setScore(prevScore => (prevScore+1))
    }

    function toggleSettings(setting) {

        setSettings(prevSettings => {
            return {
                ...prevSettings,
                [setting]: !prevSettings[setting],
            }
        })
    }

    return(

        <div >

            {settings.showSidebar && <AppDrawer settings = {settings} toggleSettings = {toggleSettings}/>}
            <DenseAppBar score = {score} toggleSettings = {() => toggleSettings("showSidebar")}/>
            <Game settings = {settings} score = {score} setScore = {setScore} incrementScore = {incrementScore}/>

        </div>

    )
}
