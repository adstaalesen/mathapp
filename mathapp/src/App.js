import React from "react";
import MathAppBar from "./components/Navbar/MathAppBar";
import AppDrawer from "./components/Sidebar/AppDrawer";
import Game from "./game/Game";
import BottomModal from "./components/Bottombar/BottomModal";
import { SettingsMapping } from "./settings/Model/SettingsMapping";
import { assertSettings } from "./settings/settingsLogic";

import {collection, query, orderBy, onSnapshot, where, getDocs} from "firebase/firestore"
import {db} from './Firebase'

//https://mui.com/material-ui/react-switch/

export default function App() {

    const [score, setScore] = React.useState(0)
    const [showSidebar, setShowSidebar] = React.useState(false)


    async function getScores(db) {
        const scoresCol = collection(db, 'scores');
        const scoreSnapshot = await getDocs(scoresCol);
        const scoreList = scoreSnapshot.docs.map(doc => doc.data());
        console.log(scoreList)
        return scoreList;
    }
  
    // const a = getScores(db)

    const [settings, setSettings] = React.useState({
        addition: true,
        subtraction: false,
        multiplication: false,
        division: false,
        negativeNumber: false,
        darkMode: false,
        difficulty: 1
    })

    function incrementScore() {
        setScore(prevScore => (prevScore+1))
    }

    function toggleSettings(settingBeingToggled) {
       
        if ( assertSettings(settingBeingToggled, settings) ){
            setSettings(prevSettings => {
                return {
                    ...prevSettings,
                    [settingBeingToggled]: !prevSettings[settingBeingToggled],
                }
            })  
        }
    }

    function toggleSidebar() {
        setShowSidebar( prevShowSidebar => !prevShowSidebar )
    }

    function incrementDifficulty(increment) {

        setSettings(prevSettings => {
            
            const newDifficulty = prevSettings.difficulty + increment
            
            if ((newDifficulty <= 10) && (newDifficulty > 0)) {
                return{
                    ...prevSettings,
                    difficulty: (prevSettings.difficulty + increment)
                }
            }else {
                return {
                    ...prevSettings
                }
            }
        })
    }

    return(

        <div className="app-container">
            <div className="top-container">
                {showSidebar && <AppDrawer settings = {settings} toggleSettings = {toggleSettings} toggleSidebar = {toggleSidebar} showSidebar = {showSidebar} incrementDifficulty = {incrementDifficulty}/>}
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
