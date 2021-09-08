let usernames = ["kamabng", "sinclaire", "prince", "juluis", "joan"];

let emails = ["kambang@gmail.com", "sinclaire@gmail.com", 
"prince@gmail.com", "juluis@gmail.com", "joan@gmail.com"];

let gender = ["male", "female", "male", "male", "female"];


import Data from "./backend.js";
//let users = []

/**FOR LOOP SOLUTION
for(let i=0; i<emails.length; i++){
    let user ={}
    user.name = usernames[i];
    user.email = emails[i];
    user.gender = gender[i];
    users.push(user);
}
*/
console.log(Data)

/**WHILE LOOP SOLUTION 
let i=0;
while(i<usernames.length){
    let user = {}
    user.name = usernames[i];
    user.email = emails[i];
    user.gender = gender[i];
    users.push(users);
    i++;
}
    */
   console.log(Data)

/** 
 * ARRAY HIGHER-ORDER FUNCTION(MAP)
*/
let users = usernames.map((item,index)=>{
    let user ={}
    user.name = Datausernames[index];
    user.email = Dataemails[index];
    user.gender = Datagender[index];
    return user;

})



console.log(users);