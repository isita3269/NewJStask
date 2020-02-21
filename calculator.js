let bill = [
    {
    restaurant:124
    },
    {
    restaurant:48
    },
    {
    restaurant:248
    }
]

let billAmount = [];
let totalBill =[];
function getRestaurantBillValue(bill) {           
    for (let i=0; i<bill.length; i+=1) {
     billAmount.push(bill[i].restaurant);
    }
    console.log("TCL: getRestaurantBillValue -> billAmount", billAmount)    
}

let ArrayOfTip= [
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

function billCalculator(ArrayOfTip) {
    getRestaurantBillValue(bill);
    billAmount.forEach(function(item, index, array) {
        for (let i=0; i<ArrayOfTip.length; i+=1) {
              if(item>ArrayOfTip[i].minbill && item<ArrayOfTip[i].maxbill)   {
                totalBill.push(item+(ArrayOfTip[i].tip * item))               
              }      
        }
    })
}


display = () => {
    billCalculator(ArrayOfTip);
    console.log("TCL: billCalculator -> totalBill", totalBill)
}
display();



