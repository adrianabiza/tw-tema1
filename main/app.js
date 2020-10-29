function removeOrderItem(orderInfo, position){
    
    if(!Array.isArray(orderInfo.items)){ 
        throw 'Items should be an array';
    }

    for(let i=0;i<orderInfo.items.lenght;i++){
        if(orderInfo.items[i].price===undefined || orderInfo.items[i].quantity===undefined){
            throw 'Malformed item';
        }
    }

  
    if(orderInfo.items[position]===undefined){
        throw 'Invalid position';
    }
    else
    {
        orderInfo.total-=orderInfo.items[position].price*orderInfo.items[position].quantity
        if(position >-1) {orderInfo.items.splice(position,1);}
    }

    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;