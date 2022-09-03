import { SettingsMapping } from "./Model/SettingsMapping"

function getNumberOfActiveSettings(settings) {

    const gameSettings  = SettingsMapping.filter((setting) => ((setting.category === "game") && (setting.type === "toggle")))
    const activeSettings = gameSettings.filter((setting) => settings[setting.key])
    return activeSettings

}

function assertSettings(setting, stateSettings) {

    const allActiveSettings = getNumberOfActiveSettings(stateSettings).filter(
        setting => (setting.required)
    )

    const activeOperations = allActiveSettings.map(setting => setting.key)

    if ((activeOperations.includes(setting)) && (activeOperations.length === 1)) {
        return false
    }    

    return true
}

export {assertSettings}