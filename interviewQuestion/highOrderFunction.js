const radius = [1,3,6,7]

const area= function(radius){
    return  Math.PI * radius * radius
}

const circumfrance = function(radius){
    return 2* Math.PI * radius
}

const daimeter= function(radius){
    return 2* radius
}


const calculate = function(radius, logic){
    const arrayRes = []
    for(i=1; i< radius.length ; i++){
        arrayRes.push(logic(radius[i]))
    }
    return arrayRes
}

console.log(calculate(radius, area))
console.log(calculate(radius, circumfrance))
console.log(calculate(radius, daimeter))