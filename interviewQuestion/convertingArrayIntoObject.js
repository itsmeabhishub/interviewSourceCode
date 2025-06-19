const arr= ['a','c','e']

const changingIntoObj= arr.reduce((acc,it,i)=>
({...acc,[i]:it}),{})

console.log(changingIntoObj)