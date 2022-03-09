//Selection Sort
const selectionSort = (originalList) => {
    const list = [...originalList]
    const len = list.length
    for (let i = 0; i < len; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (list[min] > list[j]) {
          min = j
        }
      }
      if (min !== i) {
        ;[list[i], list[min]] = [list[min], list[i]]
      }
    }
    return list
  }
  
  const listOfNumbers = [1, 6, 3, 4, 5]
console.log("Sorting using Selection Sort algo:"(selectionSort(listOfNumbers)))

//Insertion Sort
const insertion_Sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    return nums
  }
  console.log("Sorting using Insertion Sort algo: "(insertion_Sort([3, 0, 2, 5, -1, 4, 1])));

  
  //Merge Sort
  function merge_sort(left_part,right_part) 
  {
      var i = 0;
      var j = 0;
      var results = [];
  
      while (i < left_part.length || j < right_part.length) {
          if (i === left_part.length) {
              // j is the only index left_part
              results.push(right_part[j]);
              j++;
          } 
        else if (j === right_part.length || left_part[i] <= right_part[j]) {
              results.push(left_part[i]);
              i++;
          } else {
              results.push(right_part[j]);
              j++;
          }
      }
      return results;
  }
  
  console.log(merge_sort([1,3,4], [3,7,9]));


  