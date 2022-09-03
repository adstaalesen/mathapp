function getThresholds(difficulty) {
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
    }
}


function getThresholds(operation, negativeNumbers, difficulty) {
    
    

}
