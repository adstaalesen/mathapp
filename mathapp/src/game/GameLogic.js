
const possibleTypes = ["addition", "subtraction", "multiplication", "division"]


function generateRandomNumber(lower, upper) {
    return Math.ceil(Math.random()*(upper-lower) + lower)
}


function getThresholds(difficulty) {
    
    function getThresholdsAddition() {
    if (difficulty === 1 ) {
        return [1,10]
    } else if ( difficulty === 2 ) {
        return [10,30]
    } else if ( difficulty === 3 ) {
        return [10,50]
    } else if ( difficulty === 4 ) {
        return [30,100]
    } else if ( difficulty === 5 ) {
        return [50,150]
    } else if ( difficulty === 6 ) {
        return [150,450]
    } else if ( difficulty === 7 ) {
        return [300,900]
    } else if ( difficulty === 8 ) {
        return [1000,2000]
    } else if ( difficulty === 9 ) {
        return [2500,10000]
    } else if ( difficulty === 10 ) {
        return [10000,20000]
    }}

}


    
function getThresholdsAddition(difficulty) {
    if (difficulty === 1 ) {
        return [1,10]
    } else if ( difficulty === 2 ) {
        return [10,30]
    } else if ( difficulty === 3 ) {
        return [10,50]
    } else if ( difficulty === 4 ) {
        return [30,100]
    } else if ( difficulty === 5 ) {
        return [50,150]
    } else if ( difficulty === 6 ) {
        return [150,450]
    } else if ( difficulty === 7 ) {
        return [300,900]
    } else if ( difficulty === 8 ) {
        return [1000,2000]
    } else if ( difficulty === 9 ) {
        return [2500,10000]
    } else if ( difficulty === 10 ) {
        // var a = String(generateRandomNumber(1, 10)) + String(generateRandomNumber(100, 1000)) 
        // var b = String(generateRandomNumber(1, 10)) + String(generateRandomNumber(100, 1000)) 
        // return [parseInt(a),parseInt(b)]
        return [10000,20000]
    }
}

function getAdditionQuestion(settings) {

    const tresholds = getThresholdsAddition(settings.difficulty)

    const upperTreshold = tresholds[0]
    const lowerTreshold = settings.negativeNumber ? -tresholds[0] : tresholds[1]
    
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
