

function addNum(num) {
    if (num===0) {
        return "hogaya"
        
    }
    const randomnum=Math.floor(Math.random() * 2) + 0;
     return addNum(randomnum);
    

    
}

addNum(2)