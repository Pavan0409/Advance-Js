
//Call Method
let name = {firstName:"Pavan",lastName:"Chitaguppa",}
printFullName= function(){
    console.log(this.firstName+ " " + this.lastName)
}
printFullName.call(name); 


//Apply method 
let user1={firstName:"Pavan",   lastName:"Chitaguppa"}
printFullName= function(city, state){ 
    console.log(this.firstName+ " " + this.lastName +" from "+ city+" "+state)
}
printFullName.apply(user1,["Bidar","Karnataka"]);


//Bind
let obj={num:2}
let add= function(a,b){
return this.num+a+b;
}
let bound = add.bind(obj);
console.log(bound(2,3));

//Student object
let student={name:"Kalki",age:26}
let printAge= function(){
    console.log(this.age);
}
let K_age = printAge.bind(student)
console.log(K_age());