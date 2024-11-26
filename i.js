let d = [
    {
        "id": 1,
        "name": "John",
    },
    {
        "id":2,
        "name": "Jane",
    }
]

let e = d.find(e => e.id == 2 && e.name == 'Jane');
console.log(e);