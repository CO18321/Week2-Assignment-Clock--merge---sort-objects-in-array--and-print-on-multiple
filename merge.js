let arrayOne = [
    {
      name: 'xyz',
      age: 10
    },
     {
      name: 'ert',
      age: 4
    },
      {
      name: 'mvm',
      age: 45
    },
     {
      name: 'rere',
      age: 56
    },
  ]
  
  
  let arrayTwo = [
    {
      name: 'fdcd',
      age: 32
    },
     {
      name: 'ter',
      age: 1
    },
      {
      name: 'fdfg',
      age: 3
    },
     {
      name: 'gfdgd',
      age: 15
    },
  ]


array = [...arrayOne, ...arrayTwo];

// merge sort

function mergeSort(left, right, arr){
    // console.log(left, right);
    // console.log(arr[left]);
    if (left == right){
        return [arr[left]];
    } 
    else{
        let mid = Math.floor((left + right)/2);
        let leftSorted = mergeSort(left, mid, arr);
        let rightSorted = mergeSort(mid + 1, right, arr);

        // console.log("leftSorted", leftSorted, "rightSorted", rightSorted);
        
        let n1 = leftSorted.length;
        let n2 = rightSorted.length;
        let i = 0, j = 0;
        let res = [];


        while (i < n1 && j <n2) {
            if (leftSorted[i].age < rightSorted[j].age){
                res.push(leftSorted[i]);
                i+=1;
            }
            else{
                res.push(rightSorted[j]);
                j+=1;
            }
        }

        while (i < n1){
            res.push(leftSorted[i]);
            i+=1;
        }
        while (j < n2){
            res.push(rightSorted[j]);
            j+=1;
        }
        
        // console.log(res);
        return res;
        
    }
}
sortedArray = mergeSort(0, array.length-1, array);
array.sort((a,b)=> a.age - b.age);
console.log(sortedArray, array);