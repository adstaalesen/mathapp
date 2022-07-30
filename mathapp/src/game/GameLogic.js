
const possibleTypes = ["addition", "subtraction", "multiplication", "division"]


function generateRandomNumber(lower, upper) {
    return Math.ceil(Math.random()*upper + lower)
}

function getAdditionQuestion() {

    const upperTreshold = 10
    
    var x = generateRandomNumber(1, upperTreshold)
    var y = generateRandomNumber(1, upperTreshold)
    var temp;

    if ((x - y) < 0) {
        temp = x;
        x = y;
        y = temp;
    }

    const operator = '+'
    return `${x} ${operator} ${y}`
} 

function getSubtractionQuestion() {

    const upperTreshold = 10

    var x = generateRandomNumber(1, upperTreshold)
    var y = generateRandomNumber(1, upperTreshold)
    var temp;

    if ((x + y) < 0) {
        temp = x;
        x = y;
        y = temp;
    }

    const operator = '-'
    return `${x} ${operator} ${y}`
} 



function drawQuestionType(questionTypes) {
    return questionTypes[Math.floor(Math.random()*questionTypes.length)]
}

export function getQuestion(settings) {

    const questionTypes = possibleTypes.filter(value => (settings[value]))

    const question = drawQuestionType(questionTypes)

    const questionGenerator = {
        "addition": getAdditionQuestion(),
        "subtraction": getSubtractionQuestion(),
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
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y },
    }

    return math_it_up[operator](x, y)
    
}
