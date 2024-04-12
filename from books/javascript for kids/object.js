

let intro = {
    "First Name": 'Raees',
    "Last Name": 'mughal',
    "Age": 20,
    "DOB": '31st December 2002',
    "Religion": 'Islam'
}
console.log(intro);






let cow = {
    legs: 'four',
    horns: 'two',
    givesMilk: true,
    color: 'white',
}
console.log(cow);
console.log(cow['horns']);

cow.color = ['black', 'red', 'white'];

cow["teats"] = 'four';
console.log(cow);













let iceCream = {
    size: ['Small', 'Medium', 'Large', 'Extra Large'],
    flavour: ['vanila', 'kulfa', 'pistaa', 'mango', 'chocolate', 'strawberry', 'almond'],
    goesWith: ['chocolate syrup', 'caramel sauce', 'fruit sauce', 'Hot Fudge', 'Sprinkles', 'Peanuts']
}

let servingIceCream = [
    'would you like a',
    iceCream['size'][Math.floor(Math.random() * 4)],
    'ice cream of',
    iceCream['flavour'][Math.floor(Math.random() * 7)],
    'flavour that goes with',
    iceCream['goesWith'][Math.floor(Math.random() * 6)],
    'on it?'
]

console.log(servingIceCream.join(' '));

console.log(iceCream['cone']);// undefined










let arr = [1, 2, 3, 4, 5];
let str = 'this is a string';
let numb = 40;
let booleanValue = true
let objt = {
    name: 'raees',
    age: 20,
    isGraduate: false
}

let obj = {};

obj.array = arr;
obj.string = str;
obj.number = numb;
obj.boolean = booleanValue;
obj.object = objt;
console.log(obj)

let getKeysOfObject = Object.keys(obj);
console.log(getKeysOfObject);











let dogs = [
    { name: 'German Shepherd', life: '9 to 13 Years' },
    { name: 'Bulldog', life: '8 to 10 Years' },
    { name: 'Labrador Retriever', life: '10 to 12 Years' },
    { name: 'Golden Retriever', life: '10 to 12 Years' },
    { name: 'French Bulldog', life: '10 to 14 Years' },
    { name: 'Siberian Husky', life: '10 to 15 Years' },
    { name: 'Alaskan Malamute', life: '10 to 14 Years' }
]


console.log(dogs[4]['life'])













let rollNo = {
    Ninth: 530249,
    Tenth: 210251,
    Eleventh: 749769,
    Twelveth: 546994,
}






let raees = {
    name: 'Raees Mughal',
    age: 20,
    school: 'government comprehensive higher secondary school sheikhupura',
    'roll no': rollNo
}



let sohail = {
    name: 'Sohail Ahmad',
    age: 19,
    school: 'Furqan Shaheed high school',
    subjects: ['chemistry', 'physics', 'math']
}

let rehman = {
    name: 'Rehman Idrees',
    age: 18,
    college: 'government post graduate college sheikhupura',
    'lucky numbers': [20, 10, 31, 5, 7]
}



let friends = [raees, rehman, sohail]

console.log(friends)


console.log('my inter part 1 roll no is', friends[0]['roll no']['Eleventh']);



let luckyNumberString = friends[1]['lucky numbers'].join();

console.log('Rehman\'s lucky numbers are ', luckyNumberString)

















let programming = {
    'HTML': ['@codewithharry', 'freecodecamp', 'apnacollege', 'w3schools', 'developers.mozilla'],
    'CSS': ['@codewithharry', 'freecodecamp', 'w3school', 'developers.mozilla'],
    'JS': ['@codewithharry', '@yahoobaba', 'hussain sir', 'w3school', 'freecodecamp', 'developers.mozilla', 'javascriptForKids']
}


let Studies = {
    'Primary': 'Private School in Sheikhupura',
    'Matric': 'Government Comprehensive Higher Secondary School Sheikhupura',
    'Inter': 'Government Post Graduate College Sheikhupura',
    'programming': programming
}


let myIntro = {
    'Full Name': 'Raees Wajahat Islam Mughal',
    '(Date of Birth) and Age': ['31st December 2002', 20],
    'Studies': Studies
}
console.log(myIntro);




document.write(`My name is ${myIntro['Full Name']}. I am ${myIntro['(Date of Birth) and Age'][1]} years old. ${myIntro['(Date of Birth) and Age'][0]} is the day When I was born. I got my early education from ${myIntro['Studies']['Primary']}, then I moved to ${myIntro['Studies']['Matric']} for matric. I did Fsc from ${Studies['Inter']},Later I wanted to do programming so i choosed ${myIntro['Studies']['programming']['HTML'].join(' ')} for HTML and ${myIntro['Studies']['programming']['CSS'].join(' ')} for CSS . For JavaScript, I choosed ${myIntro['Studies']['programming']['JS'].join(' , ')} and some online resources`)



















// Keeping track of owed money;



let owedMoney = {};


owedMoney['raees'] = 20;
owedMoney['aihan'] = 34;
owedMoney['rumman'] = 52;
owedMoney['rahat'] = 41;



console.log(owedMoney);


owedMoney['raees'] += 432;
owedMoney['aihan'] += 530;
owedMoney['rumman'] += 980;
owedMoney["rahat"] += 777;






console.log(owedMoney);






owedMoney['raees'] -= 400;
owedMoney['aihan'] -= 500;
owedMoney['rumman'] -= 1000;
owedMoney['rahat'] -= 800;


console.log(owedMoney);
















let movies = {

    'Harry Potter and the Philosophers Stone': {
        "Release date": "November 14, 2001 (USA)",
        "Director": "Chris Columbus",
        "Film series": "Harry Potter",
        "Budget": "125 million USD",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },


    'Harry Potter and the Chamber of Secrets': {
        "Release date": "November 3, 2002 (UK)",
        "Director": "Chris Columbus",
        "Film series": "Harry Potter",
        "Box office": "$879.8 million",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },



    'Harry Potter and the Prisoner of Azkaban': {
        "Release date": "May 31, 2004 (UK)",
        "Director": " Alfonso Cuarón",
        "Film series": "Harry Potter",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },




    'Harry Potter and the Goblet of Fire': {
        "Release date": "November 18, 2005 (USA)",
        "Director": "Mike Newell",
        "Film series": "Harry Potter",
        "Box office": "$896.7 million",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },




    'Harry Potter and the Order of the Phoenix': {
        "Release date": "October 14, 2007 (Pakistan)",
        "Director": "David Yates",
        "Film series": "Harry Potter",
        "Box office": "$942.2 million",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },



    'Harry Potter and the Half-Blood Prince': {
        "Release date": "July 15, 2009 (USA)",
        "Director": "David Yates",
        "Film series": "Harry Potter",
        "Box office": "$934.5 million",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },




    'Harry Potter and the Deathly Hallows – Part 1': {
        "Release date": "November 19, 2010 (USA)",
        "Director": "David Yates",
        "Film series": "Harry Potter",
        "Box office": "$977.1 million",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },




    'harry potter and the Deathly hallows – part 2': {
        "Release date": "July 15, 2011 (UK)",
        "Director": "David Yates",
        "Film series": "Harry Potter",
        "Box office": "1.342 billion USD",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    }




}



console.log(movies['Harry Potter and the Philosophers Stone']['Director'])




console.log(Object.keys(movies))











var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
    };





//getting number 123

number123 = myCrazyObject['some array'][2]['number'];
console.log(number123)



