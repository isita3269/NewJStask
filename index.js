let BMI=[
    {
       name:"John",
       mass:60,
       height:2.1,
       bmi:0
    },
    {
        name:"Mark",
        mass:56,
        height:2.5,
        bmi:0        
    }
]


function bmiCalculator(BMI){
    let i;
    for(i in BMI){
        BMI[i].bmi=(BMI[i].mass/(BMI[i].height*BMI[i].height))
    }
}

display = (BMI) => {
    bmiCalculator(BMI);    
    let max=0;
    for(i in BMI){
        if(BMI[i].bmi>0)
        max=BMI[i].bmi;
    }

    console.log("TCL: BMI", BMI)

    for(i in BMI){
        if(BMI[i].bmi==max)
        console.log(BMI[i].name, "has the height BMI");
    }
}
display(BMI);