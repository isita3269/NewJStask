let Johnbill = [
    {
    restaurant:124
    },
    {
    restaurant:48
    },
    {
    restaurant:248
    },
    {
    restaurant:180
    },
    {
    restaurant:42
    }
]
let Markbill = [
    {
    restaurant:77
    },
    {
    restaurant:375
    },
    {
    restaurant:110
    },
    {
    restaurant:45
    }    
]
let JohnArrayOfTip= [
    {          
        minbill:0,
        maxbill:50,
        tip:20/100
    },
    {          
        minbill:50,
        maxbill:200,
        tip:15/100
    },
    {          
        minbill:200,
        maxbill:999999999,
        tip:10/100
    }
]
let MarkArrayOfTip= [
    {          
        minbill:0,
        maxbill:100,
        tip:20/100
    },
    {          
        minbill:100,
        maxbill:300,
        tip:10/100
    },
    {          
        minbill:300,
        maxbill:999999999,
        tip:25/100
    }
]

let JohnbillAmount = [];
let MarkbillAmount = [];

function getRestaurantBillValue(Johnbill,Markbill) {           
    for (let i=0; i<Johnbill.length; i+=1) {
     JohnbillAmount.push(Johnbill[i].restaurant);
    }
    for (let i=0; i<Markbill.length; i+=1) {
    MarkbillAmount.push(Markbill[i].restaurant);
    }
    console.log("TCL: JohnbillAmount", JohnbillAmount);
    console.log("TCL: MarkbillAmount", MarkbillAmount);
}
let JohntotalBill =[];
let MarktotalBill =[];

function billCalculator(JohnArrayOfTip,MarkArrayOfTip) {
    getRestaurantBillValue(Johnbill,Markbill);
    JohnbillAmount.forEach(function(item, index, array) {
        for (let i=0; i<JohnArrayOfTip.length; i+=1) {
              if(item>JohnArrayOfTip[i].minbill && item<JohnArrayOfTip[i].maxbill)   {
                JohntotalBill.push(item+(JohnArrayOfTip[i].tip * item))               
              }      
        }
    })
    MarkbillAmount.forEach(function(item, index, array) {
        for (let i=0; i<MarkArrayOfTip.length; i+=1) {
              if(item>MarkArrayOfTip[i].minbill && item<MarkArrayOfTip[i].maxbill)   {
                MarktotalBill.push(item+(MarkArrayOfTip[i].tip * item))               
              }      
        }
    })
}

display = () => {
    billCalculator(JohnArrayOfTip,MarkArrayOfTip);   
    console.log("TCL: JohntotalBill", JohntotalBill);
    console.log("TCL: MarktotalBill", MarktotalBill);
}
display();