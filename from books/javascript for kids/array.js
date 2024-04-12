var friends = ['raees', 'rehman', 'sohail'];






var classMates = ['raees', 'rehman', 'sohail', 'ahmad', 'abdul', 'waseem', 'zohaib', 'jasim', 'umar', 'john', 'harry', 'ahsan', 'mohsan', 'talha', 'fahad', 'arslan', 'ali', 'tayyab'];

classMates[classMates.length] = 'usama';

classMates[4] = 'abdulRehman';



console.log(classMates)

friendCircles = [
    [classMates[0], classMates[1], classMates[2]],
    [classMates[4], classMates[5], classMates[6], classMates[8]],
    [classMates[11], classMates[12], classMates[14], classMates[15]],
    [classMates[13], classMates[17], classMates[18]]
]
console.log(friendCircles[3]);



















var shoppingList = [
    'eggs',
    'bread',
    'ketchup',
    'jam',
    'milk',
    'honey',
    'tomatos',
    'oil',
    'cookies',
    'chicken',
    'fish'
];
var favourites = [shoppingList[0], shoppingList[4], shoppingList[9]];
console.log(favourites);


favourites.push(shoppingList[8])
console.log(favourites)
var mostFavourite = favourites[2];
console.log(mostFavourite)
















var thingsToBuy = ['book', 'pen', 'pencil', 'eraser', 'sharpener', 'scale', 'ink', 'geomatery', 'notebook', 'markers'];


console.log(thingsToBuy);


var thingsBought = [];


thingsBought[0] = thingsToBuy[0];
thingsBought[1] = thingsToBuy[2];
thingsBought[2] = thingsToBuy[thingsToBuy.length - 5];
thingsBought[3] = thingsToBuy[thingsToBuy.length - 1];
thingsBought[4] = {
    vegetables: ['tomatos', 'carrots', 'spinich', 'potatos'],
    fruits: ['apples', 'grapes', 'mangos', 'bananas', 'oranges']
};
thingsBought.push('mouse')

console.log(thingsBought)








var grocery = {
    stationary: ['pen', 'markers', 'scale', 'ball point', 'gell pen', 'ink pen'],
    electronics: ['data cable', 'mouse', 'charger', 'handsfree', 'torch light'],
    snacks: ["Nachos", "Popcorn", "Crackers", "Pretzels", "Granola Bars", "Peanuts", "Dried Fruit"]
}


grocery["vegetables"] = thingsBought[4]["vegetables"];
grocery["fruits"] = thingsBought[4]['fruits'];

console.log(grocery);





var Bought = {};

Bought['fruits'] = [thingsBought[4]['fruits'][2], grocery['fruits'][0]];
Bought['vegetables'] = [grocery['vegetables'][0], grocery['vegetables'][2]];


Bought['stationary'] = [grocery['stationary'][2], grocery['stationary'][0], thingsToBuy[6]]

console.log(Bought)





let justputting = grocery['stationary'];
console.log(justputting.length)







allToBuy = [].concat(grocery['stationary'][0], grocery['stationary'][1], grocery['electronics'][4], grocery['snacks'][1])
console.log(allToBuy)
















var plans = ['first plan'];


plans[10] = 'last plan';
console.log(plans);
















var ComplexArray = [
    'string',
    10,
    true,
    false,
    [0, [1, 2, 3, [4, 5, [6, 7, 8, [56, 7, 1, 2]]]]]
]
console.log(ComplexArray);
console.log(ComplexArray[ComplexArray.length - 1][1][3][2][3][3]);











let added = [];

added.push('other string')
added.push('string', 10, true, false);
console.log(added)
console.log(added.length)
console.log(added[3]);


added.unshift(['array in the first place'], 10, 20)
console.log(added)
console.log(added.length)
console.log(added[0]);



let poped = added.pop();
console.log(added)
console.log(poped)
console.log(added.length)


let shifted = added.shift()
console.log(added)
console.log(shifted)

console.log(added.length);

let newarray = [1, 2, 3, 4, 5, 6, 7, 88, 9];
added.push(newarray);
console.log(added);
console.log(added[added.length - 2]);
















let animals = [];


animals.push('cat');
animals.unshift('dog');
animals.push('cow');
animals.push('lion');
animals.unshift('rat');
animals.push('tiger');
animals.push('elephant');
animals.unshift('wolf');

console.log(animals);

//wolf rat dog cat cow lion tiger elephant

console.log(animals.length)

console.log(animals[animals.length - 3]);



let last = animals.pop();

let first = animals.shift();
let second = animals.shift();
let third = animals.shift();
console.log(animals);



console.log(third);
console.log(first);
console.log(last);
console.log(second);


animals.unshift(last);
animals.push(second);
animals.push(first);
animals.push(third);


console.log(animals);














var firstArray = [1, 2, 3, 2, 4, 5, 3, 4, 2, 1, 0];
var secondArray = ['a', 'b', 'c'];
var thirdArray = ['one', 'two', 'three']
var fullArray = firstArray.concat(thirdArray,secondArray);
console.log(firstArray, secondArray, thirdArray);
console.log(fullArray);

//[ 1,2,3,2,4,5,3,4,2,1,0 "one", "two", "three", "a", "b", "c" ]



console.log(firstArray.concat(secondArray));




var thePlusSign = firstArray + secondArray + thirdArray;
console.log(thePlusSign);
console.log(typeof thePlusSign)



let CheckingIndex = fullArray.indexOf(3);
console.log(CheckingIndex);

console.log(fullArray.indexOf('c'));



allToBuy = [].concat(grocery['stationary'][0], grocery['stationary'][1], grocery['electronics'][4], grocery['snacks'][1])
console.log(allToBuy);











var joining = [0, 1, 2, 3, 4];
var aa = joining.join('-');
console.log(aa);





var myName = ['Raees', 'Wajahat', 'Islam', 'Mughal'];

var joiningMyName = myName.join(' ');
console.log(joiningMyName);






var wayToFriendHome = ['myhouse', 'unitedpark', 'mujahadnagar', 'phatak', 'rana',
    'street', 'friends house'];

// var backhome = [];
// for(let key = 0 ; key <= wayToFriendHome.length-1 ; key++){
//     backhome.unshift(wayToFriendHome[key]);
//     console.log(backhome);
// }


console.log(wayToFriendHome.pop())
console.log(wayToFriendHome.pop())
console.log(wayToFriendHome.pop())
console.log(wayToFriendHome.pop())
console.log(wayToFriendHome.pop())
console.log(wayToFriendHome.pop())
console.log(wayToFriendHome.pop())



console.log(Math.floor(Math.random() * 10));



let randomWords = ['he', 'she', 'it', 'I', 'we', 'you', 'they'];

console.log(randomWords[Math.floor(Math.random() * 7)])

let randomIndex = Math.floor(Math.random() * 2);
console.log(randomWords[randomIndex]);








let phrases = [
' It is certain.',
'It is decidedly so.',
'Without a doubt.',
'Yes definitely.',
'You may rely on it.',
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
'Don\'t count on it.',
'My reply is no.',
'My sources say no.',
'Outlook not so good.',
'Very doubtful.'
]

console.log(phrases)
var randomPhrases = Math.floor(Math.random()*20);

document.write(phrases[randomPhrases]);












let firstWord = ['I', 'We', 'You', 'They']
let secondWord = ['love', 'hate', 'like', 'miss', 'enjoy', 'ignore']
let thirdWord = ['icecream', 'juice', 'cake', 'cold drinks', 'cookies', 'fruits', 'vegetables', 'meat', 'dry fruits', 'bubble gum'];


let sentenceArray = [firstWord[Math.floor(Math.random() * 4)], secondWord[Math.floor(Math.random() * 6)], thirdWord[Math.floor(Math.random() * 10)]]

sentenceText = sentenceArray.join(' ');
sentenceText.toString()

console.log(sentenceText);
// document.write(sentenceText);






let numbersArray = [3,2,1];

let returning = [numbersArray[0],'is bigger than',numbersArray[1],'is bigger than',numbersArray[2]];

let retruningText = returning.join(' ');
console.log(retruningText);























let x = [1,'string',Boolean(10),[0,1,2,43,4],{name:'raees',age:20,blood:'B+',numbers:[12,23,40,91,13,28,37,{favourite:[37,12,23],mostFavourite:[13,40,91]}]}];

console.log(x[4]['numbers'][7]['mostFavourite'][0]);





















    let ar = [1,2,3,4,5,6];

    let b = [];
    for(let i = 0 ; i <ar.length;i++){
      b.push('awesome ' +ar[i]);
    }
console.log(b);






