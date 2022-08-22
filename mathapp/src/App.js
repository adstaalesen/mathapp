import React from "react";
import MathAppBar from "./components/Navbar/MathAppBar";
import AppDrawer from "./components/Sidebar/AppDrawer";
import Game from "./game/Game";
import BottomModal from "./components/Bottombar/BottomModal";
import { SettingsMapping } from "./components/Models/SettingsMapping";

//https://mui.com/material-ui/react-switch/

export default function App() {

    const [score, setScore] = React.useState(0)
    const [showSidebar, setShowSidebar] = React.useState(false)
    const [difficulty, setDifficulty] = React.useState(1)
    
    const [settings, setSettings] = React.useState({
        addition: true,
        subtraction: false,
        multiplication: false,
        division: false,
        negativeNumber: false,
        darkMode: false,
    })

    function incrementScore() {
        setScore(prevScore => (prevScore+1))
    }

    function getNumberOfActiveSettings() {

        const gameSettings  = SettingsMapping.filter((setting) => setting.category === "game")
        const activeSettings = gameSettings.filter((setting) => settings[setting.key])
        return activeSettings

    }

    function assertSettings(setting) {
        const allActiveSettings = getNumberOfActiveSettings()
        const activeOperations = allActiveSettings.map(setting => setting.key)

        if ((activeOperations.includes(setting)) && (activeOperations.length === 1)) {
            return false
        }

        return true

    }

    function toggleSidebar() {
        setShowSidebar( prevShowSidebar => !prevShowSidebar )
    }

    // Fikse at den må toggles riktig, hvilken setting som togles må væer med å bestemme, samt lengeden på antall activesettings

    function toggleSettings(settingBeingToggled) {
       
        if ( assertSettings(settingBeingToggled) ){
            setSettings(prevSettings => {
                return {
                    ...prevSettings,
                    [settingBeingToggled]: !prevSettings[settingBeingToggled],
                }
            })  
        }

    }



    return(

        <div className="app-container">

            <div className="top-container">
                {showSidebar && <AppDrawer settings = {settings} toggleSettings = {toggleSettings} toggleSidebar = {toggleSidebar} showSidebar = {showSidebar}/>}
                <MathAppBar score = {score} toggleSidebar = {toggleSidebar}/>
            </div>

            <div className="middle-container">
                <Game settings = {settings} score = {score} setScore = {setScore} incrementScore = {incrementScore}/>
            </div>

            <div className="bottom-container">
                <BottomModal />
            </div>
            

        </div>

    )
}
