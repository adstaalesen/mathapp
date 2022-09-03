
// const SettingsMapping = [
//         {"addition" : {key: "addition", label: "Addition", expose: true, category: "game"}},
//         {"subtraction" : {key: "subtraction", label: "Subtraction", expose: true, category: "game"}},
//         {"multiplication" : {key: "multiplication", label: "Multiplication", expose: true, category: "game"}},
//         {"division" : {key: "division", label: "Division", expose: true, category: "game"}},
//         {"negativeNumber" : {key: "negativeNumber", label: "Negative number", expose: true, category: "game"}},
//         {"darkMode" : {key: "darkMode", label: "Dark mode", expose: true, category: "visual"}},
//         {"showSidebar": {key: "showSidebar", label: "Show sidebar", expose: false, category: "visual"}}]

export const SettingsMapping = 
    [{key: "addition", label: "Addition", required: true, expose: true, category: "game", type: "toggle"},
    {key: "subtraction", label: "Subtraction", required: true, expose: true, category: "game", type: "toggle"},
    {key: "multiplication", label: "Multiplication", required: true, expose: true, category: "game", type: "toggle"},
    {key: "division", label: "Division", required: true, expose: true, category: "game", type: "toggle"},
    {key: "negativeNumber", label: "Negative number", required: false, expose: true, category: "game", type: "toggle"},
    {key: "darkMode", label: "Dark mode", required: false, expose: true, category: "visual", type: "toggle"},
    {key: "showSidebar", label: "Show sidebar", required: false, expose: false, category: "visual", type: "toggle"},
    {key: "difficulty", label: "", required: false, expose: false, category: "visual", type: "increment"}
]

