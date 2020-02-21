let person1={
    name:"mark",
    height:1.522,
    mass:17
}

let person2={
    name:"john",
    height:1.72,
    mass:50
}
let bmiarray=[];

function bmi (){
    let bmi= this.mass / (this.height * this.height);        
    bmiarray.push(bmi)  
    // console.log(bmiarray);   
}

person1.f=bmi;
person2.f=bmi;

person1.f();
person2.f();

function display() {
    console.log(bmiarray); 
    bmiarray[0]>bmiarray[1] ? console.log(`${person1.name} bmi is greater than ${person2.name}`):console.log(`${person2.name} bmi is greater than ${person1.name}`);
};
display();
