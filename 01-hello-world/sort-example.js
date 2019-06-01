
var sortMe = [5, 14, 7, 5, 42, 2, 1, -3, 6, 32]
var sorted = []

while(sortMe.length !== 0) {
    if (sortMe.length === 1) {
        // we found the max value
        sorted.push(sortMe[0])
        break;
    }

    var smallest = sortMe[0];
    var smallestIndex = 0
    for (var i = 1; i < sortMe.length; i++) {
        if(sortMe[i] <= smallest) {
            smallest = sortMe[i]
            smallestIndex = i
        }
    }
    sorted.push(smallest)
    sortMe.splice(smallestIndex, 1)
}

console.log(sorted)
