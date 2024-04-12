console.log('hello world');

let name = 'Raees Wajahat Islam Mughal';
document.write("<h1>" + 'Hello \"' + name + "\"</h1>");

if(name.length > 7){
    document.write('(wow you have a REALLY long name)');
}
else{
    document.write('you don\'t have a very long name')
}




let rice = !false;
let roti = true;
let pizza = true;

if(rice){
    console.log('i will have rice');
}else if(roti){
    console.log('i will have roti');
}
else if(pizza){
    console.log('so i will have pizza');
}else{
    console.log('a super cake with a regular pepsi please!!');
}














// let age = prompt('enter your age');
// age = Number.parseInt(age);

// if(age<0){
//     alert('invalid age');
//     window.location.reload();
// }else if(age >=0 && age<18){
//     alert('you are ' + age + ' but this content is for 18+')
//     window.location.reload();
// }else if(age>=18){
//     alert('you are '+ age + '. Welcome!!')
// }else if(!age){
//     alert('please enter your age in numbers');
//     window.location.reload();
// }






let rollno = prompt('Enter your roll no.');
rollno = Number.parseInt(rollno);


if(rollno<=0 && rollno> 374){
    alert('invalid roll no.')
}else if(rollno%3 === 0){
    alert('you are in E0 section (room number 67)')
}else if(rollno%3===1){
    alert('you are in E1 section (room number 68)')
}else if(rollno%3===2){
    alert('you are in E2 section (room number 69)')
}






