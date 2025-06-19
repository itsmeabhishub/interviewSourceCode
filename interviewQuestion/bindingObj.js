const obj = {
    a: 1,
    b:2,

    add() {
        return this.a + this.b;
    }
}

const res = obj.add.bind(obj);
console.log(res());

