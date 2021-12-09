function sortedjs(arr1,arr2) {
    let numArray = [...arr1,...arr2];
numArray = numArray.sort(function (a, b) {  return a - b;  });
numArray.forEach(element => {
    console.log(element)
});

    
}


sortedjs([2,1,0],[3,9,343333,4,6]);