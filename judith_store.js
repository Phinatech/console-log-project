const prompt  = require("prompt-sync")();
const store = [
    {
        name:'Gucci bag',
        color:['pink','blue','white','black'],
        price: '$400',
        deliveryTime: '2days',
        payment:'Cash on delivery'
    },
    {
        name:'Prada bag',
        color:['pink','blue','white','black'],
        price:'$350',
        deliveryTime: '2days',
        payment:'Cash on delivery'
    },
    {
        name:'Louis Vuitton bag',
        color:['pink','blue','white','black'],
        price:'$500',
        deliveryTime: '2days',
        payment:'Cash on delivery'
    },
    {
        name:'JuBaby bag',
        color:['pink','blue','white','black'],
        price:'$500',
        deliveryTime: '2days',
        payment:'Cash on delivery'
    },
    {
        name:'ViBaby bag',
        color:['pink','blue','white','black'],
        price:'$500',
        deliveryTime: '2days',
        payment:'Cash on delivery'
    },
    {
        name:'CodeBaby bag',
        color:['pink','blue','white','black'],
        price:'$500',
        deliveryTime: '2days',
        payment:'Cash on delivery'
    },
]
const mapStore = store.map(item=>`* ${item.name}\n`)

  console.log("Welcome to Juddy's Bag Collections.");

  let cust = prompt('Please Enter your name: ');
  console.log(`Good day ${cust}`);
  while(true){
    console.log(`This are the list of bags available: \n${mapStore.join('')}`);
    
    let custBag = prompt('Please choose the type of bag you want or press Q to quit: ')
    if (custBag === "Q"){
        console.log(`Oops!! Thanks dear ${cust}, you're welcome to shop with us next time.!`);
        break;
    }
    let exist = store.find(item=> item.name.toLowerCase() === custBag.toLowerCase() || item.name.slice(0,-4).toLowerCase() === custBag.toLowerCase())
    if(!exist){
        console.log(`No such ${custBag} bag available in Juddy's store.`);
        continue;
    }else{
        while(true){
            let col = prompt(`Please choose color ${exist.color} or press Q to quit: `)
            if (col === "Q"){
                console.log(`Oops!! Thanks dear ${cust}, you're welcome to shop with us next time.!`);
                break;
            }
            if(exist.color.includes(col.toLowerCase())){
             console.log(`Dear ${cust}, Your order is:\n Brand: ${exist.name}\n Color: ${col}\n Price: ${exist.price}\n Delivery-time: ${exist.deliveryTime}\n Payment-method: ${exist.payment}`);
             let location = prompt(`Please enter your delivery location: `)
             console.log(location);
             console.log(`Dear ${cust}, Thanks for shopping at Juddy's store`);
             break;
            }else{
             console.log(`${col} color for ${exist.name} is not available`);
            }
        }
        break;
    }
  }
  