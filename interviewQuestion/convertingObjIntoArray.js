const obj = {
    name:'Abhi',
    add:'jamui'
}

const arr = Object.values(obj)

console.log(arr); // [ 'Abhi', 'jamui' ]

const objKeyIntoArray = Object.keys(obj)

console.log(objKeyIntoArray);// [ 'name', 'add' ]

const objEnteriesIntoarray = Object.entries(obj)

console.log(objEnteriesIntoarray) // [ [ 'name', 'Abhi' ], [ 'add', 'jamui' ] ]


const objEnteriesKeyValueIntoarray = Object.entries(obj).map(([key,value])=> ({key, value}))

console.log(objEnteriesKeyValueIntoarray) // [ { key: 'name', value: 'Abhi' }, { key: 'add', value: 'jamui' } ]