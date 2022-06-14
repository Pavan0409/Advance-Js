

class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;

    }
    setPlacementAge(minPlacementAge){
        return (minMarks)=>{
            if(this.marks>minMarks && this.age>minPlacementAge){
                console.log(`${this.name} is redy for placement`)
            }else{
                console.log(`${this.name} is not redy for placement`) 
            }
        }

    }


}

let s1= new Student('Pavan',24,8123214911,15);
let s2= new Student('Akash',20,111122222,39);
let s3= new Student('Rikki',22,2223344455,85);
let s4= new Student('sattu',26,4355656434,32);
let s5= new Student('Polard',21,6655443322,59);


s1.setPlacementAge(21)(45);
// s1.countStudent();