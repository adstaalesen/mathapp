
const possibleTypes = ["addition", "subtraction", "multiplication", "division"]


function generateRandomNumber(lower, upper) {
    return Math.ceil(Math.random()*(upper-lower) + lower)
}


function defineDifficultyAddition(difficulty) {
    // Difficulty goes on a scale from 1-10
    // 1 --> randomNumber in [1,10]
    // 2 --> randomNumber in [10,30]
    // 3 --> randomNumber in [10,50]
    // 4 --> randomNumber in [10,100]
    // 5 --> randomNumber in [50,150]
    // 6 --> randomNumber in [150,450]
    // 7 --> randomNumber in [300,900]
    // 8 --> randomNumber in [1000,2000]
    // 9 --> randomNumber in [2500,10000]
    // 10 --> randomNumber in [10000,20000]
}

function getAdditionQuestion(settings) {

    const upperTreshold = 10
    const lowerTreshold = settings.negativeNumber ? -upperTreshold : 1
    
    var x = generateRandomNumber(lowerTreshold, upperTreshold)
    var y = generateRandomNumber(lowerTreshold, upperTreshold)

    if (!settings.negativeNumber && ((x-y) <= 0)){
        var temp = x;
        x = y;
        y = temp;
    }

    const operator = '+'
    return `${x} ${operator} ${y}`
} 

function getSubtractionQuestion(settings) {

    const upperTreshold = 10
    const lowerTreshold = settings.negativeNumber ? -upperTreshold : 1
    
    var x = generateRandomNumber(lowerTreshold, upperTreshold)
    var y = generateRandomNumber(lowerTreshold, upperTreshold)

    if (!settings.negativeNumber && ((x-y) <= 0)){
            var temp = x;
            x = y;
            y = temp;
    }

    const operator = '-'
    return `${x} ${operator} ${y}`
} 

function getMultiplicationQuestion(settings) {

    const upperTreshold = 10
    const lowerTreshold = settings.negativeNumber ? -upperTreshold : 1
    
    var x = generateRandomNumber(lowerTreshold, upperTreshold)
    var y = generateRandomNumber(lowerTreshold, upperTreshold)

    const operator = 'x'
    return `${x} ${operator} ${y}`
} 

function getDivisionQuestion(settings) {

    const upperTreshold = 10
    const lowerTreshold = settings.negativeNumber ? -upperTreshold : 1
    
    var x = generateRandomNumber(lowerTreshold, upperTreshold)
    var y = generateRandomNumber(lowerTreshold, upperTreshold)
    var z = x * y

    const operator = '÷'
    return `${z} ${operator} ${x}`

} 


function drawQuestionType(questionTypes) {
    return questionTypes[Math.floor(Math.random()*questionTypes.length)]
}

export function getQuestion(settings) {

    const questionTypes = possibleTypes.filter(value => (settings[value]))

    const question = drawQuestionType(questionTypes)

    const questionGenerator = {
        "addition": getAdditionQuestion(settings),
        "subtraction": getSubtractionQuestion(settings),
        "multiplication": getMultiplicationQuestion(settings),
        "division": getDivisionQuestion(settings)
    }

    return questionGenerator[question]

}

export function getSolution(question) {

    const arr = question.split(' ');    

    var x = parseInt(arr[0])
    var operator = arr[1]
    var y = parseInt(arr[2])

    var math_it_up = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        'x': function (x, y) { return x * y },
        '÷': function (x, y) { return x / y },
    }

    return math_it_up[operator](x, y)
    
}
