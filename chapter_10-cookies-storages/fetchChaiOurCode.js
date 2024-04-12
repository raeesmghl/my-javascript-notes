


// javascript k engine me 2 chizen hoti hain
// 1 heap memory
// 2 callstack

// callstack me bottom pe global execution context hota hai, or functional executions us k uper aare rehte hain (LIFO) principle pe kaam krta hai


// subse last pe jo function aye ga, wo subse pehle execute hoga

// but sometimes special function aa jate hain eg: setTimeout , jo execute hone main time lenge 
// in k callback register kr k task queue me stay krwata ha (callbacks ko)
// yaha ek event loop hota hai jo check krta hai k agar time complete ho gya to iss function ko callstack me send krdo
// jab time complete ho jata hai, to inhen callstack k top pe bejh deta hai or execte ho jata hai



//setTimeout
//setInterval
//DOM Api
// fetch()
// all of these are not the part of javascript, they are the part of web browser (browser Api(s))



// special functions me jab fetch aa jata hai to isse task que me send ni kia jata

// iss k liye ek new 'micro task queue' banai jati hai (ek special queue)
// jo fetch kaam krwa rhe hain, woh pehle execute ho rha hai, or baki ka baad me execute ho rha hai, even setTimeout bhi baadme execute ho rha hai
// means, micro task queue ko zyada priority di jaati hai 
// isse "priority queue" bhi kha jata h




// jab bhi fetch istmaal hota hai yeh 2 parts main kaam krta hai
// 1 part (jo phle bhaagta hai) memory or variables main space reserve krne k liye bhaagta hai

// yeh memory main ek space reserve krta ha (let iss ka name "data" hai , naam exactly data nahi hota hai bs let kia hai);

// iss data(memory) k ilawa apke pass 2 array hota hain  (jinka koi specific name nahi h)

// onfulfilled[]
// onrejection[]

// yeh dono arrays apki range main nahi hota, ap inhen access nahi kr skte , directly values push nahi kr skte, yeh private fields hote hain
// data bhi private field hota hai , directly access nhi kr skte



// 2nd part main ek network request jati hai, directly nahi jaa skti , koi resource chahiye hota hai (web browser/node js)

// yaha 2 possibilities hain

// 1: network request jye gi
// 2: network request nhi jaa ski

// agar network request jyegi to kuch bhi response aane per (ever error 404 or any other) wo response onfulfilled main jye ga

// jab error 404 (file not found) aata hai, iss k matlab network pe request gai to phir hi response aya, iss liye ye b onfulfilled me hi count ho ga


// lakin agar network request jaa hi na ski ya phir koi response nahi aaya (atak gye request), to uss case me rejection aye ga



// jo data hai, ye memory main apke pas reserve rehta ha
// iss ki initial value empty hoti h, undefined b bol skte hain

// jab network request ho jati hai , ab ya to onfulfilled[] fire hoga, ya phr onrejection[] fire hoga

// in 2no ke under functions milte ha, jo k responsible hota h data ko fulfilled krne k liye

// to ab jo data (memory) bni hai, yeh jab fulfilled ho jata hai to ab data ki responsibility hoti hai k response (variable) ko fulfill kre