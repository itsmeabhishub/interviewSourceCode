let arr = ['abc','gft','ktv','cyp']

const rev= arr.reduce((prev, cur) =>
    [cur, ...prev],[]
)

console.log(rev)