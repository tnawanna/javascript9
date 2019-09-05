let orderCount = 0;

const takeOrder = (topping) => {
    console.log (`chicken sandwiches with ${topping}`);
    
    console.log (`Ham sandwiches with ${topping}`);
    console.log (`beef sandwiches with ${topping}`);
    
    orderCount++;
}

takeOrder("cheese");
