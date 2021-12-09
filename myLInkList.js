
class Information {
    constructor(studentName, rollNumber) {
        this.head = {
            studentName: studentName,
            rollNumber: rollNumber,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
        return this
    }
    append(studentName, rollNumber) {
        const newData = {
            studentName: studentName,
            rollNumber: rollNumber,
            next: null,
        }
        this.tail.next = newData;
        this.tail = newData;
        this.length++
        return this
    }
    printList() {

        let arr = [];
        let correntNode = this.head;

        while (correntNode !== null) {
            arr.push(correntNode.studentName);
            correntNode = correntNode.next;

        }
        return arr
    }
    prepand(studentName, rollNumber) {
        const newData = {
            studentName: studentName,
            rollNumber: rollNumber,
            next: null
        }
        newData.next = this.head;
        this.head = newData;
        this.length++
        return this

    }

    insert(index,studentName,rollNumber){
        //Check for proper parameters;
        if(index >= this.length) {
          console.log('yes')
          return this.append(studentName,rollNumber);
        }
    
        const newNode = {
          studentName: studentName,
          rollNumber:rollNumber,
          next: null
        }
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
      }
    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
      }


    remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
      }
    }



const mylist = new Information("Ali", "071");
mylist.append("shoaib", "98")

mylist.insert(4, "Alidasaddadasdadasdasdadsdadada", "23")
mylist.insert(4, "Alidasaddadasdadasdasdadsdadada", "23")
mylist.insert(4, "Alidasaddadasdadasdasdadsdadada", "23") 
mylist.insert(4, "Alidasaddadasdadasdasdadsdadada", "23")
mylist.remove(2);
console.log(mylist)
console.log(mylist.printList());





// insert(index, value){
//     //Check for proper parameters;
//     if(index >= this.length) {
//       console.log('yes')
//       return this.append(value);
//     }

//     const newNode = {
//       value: value,
//       next: null
//     }
//     const leader = this.traverseToIndex(index-1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     //Check parameters
//     let counter = 0;
//     let currentNode = this.head;
//     while(counter !== index){
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
// }
