
let key = prompt('enter a key');
let value = prompt('enter a value');

localStorage.setItem(key, value);


console.log(key + '=' + localStorage.getItem(key))

setTimeout(() => {
    localStorage.removeItem(key)
}, 4000);



















// you can also set properties like in the object;

localStorage['name'] = 'raees mughal';
localStorage['age'] = 20;

console.log(localStorage.name);

setTimeout(() => {
    localStorage.name = 'wajahat islam'
    console.log(localStorage['name']);
    setTimeout(() => {
        delete localStorage.name;
        // or :     localStorage.removeItem('name');
    }, 2000)
}, 2000);




















let arr = [1,2,3,4,5]
let obj = {a:1,b:2,c:3,}
localStorage.setItem('properties',JSON.stringify(arr));
localStorage.setItem('keyValuePair',JSON.stringify(obj));

let jsonObj = JSON.parse(localStorage.keyValuePair);
let jsonArr = JSON.parse(localStorage.properties);

console.log(jsonObj)
for(let i in jsonObj){
    let entry = i + ' = ' + jsonObj[i];
    console.log(entry)
}
console.log(jsonArr);

for(let i of jsonArr){
    console.log(i)
}

console.log('length of localStorage is '+localStorage.length);




// to access the key, use localStorage.key(index);

console.log(localStorage.key(1));