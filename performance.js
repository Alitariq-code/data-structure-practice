function numbers() {
    const t1=performance.now()
    for (let index = 0; index < 10000; index++) {
        console.log(index)
        
    }
    
    const t2=performance.now()
    console.log(`total timetaken is ${t1-t2}`)
}

numbers()