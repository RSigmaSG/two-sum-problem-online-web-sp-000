
function bruteForceTwoSum(a, num)
{
  var pairs = []
   for (var i = 0; i < (a.length)-1; i++)
 {
   
   for(var j = i+1; j < a.length; j++)
   {
     if((a[i] + a[j]) === num)
     {
       pairs.push([a[i], a[j]])
       
     }
   }
 }
 return pairs
  
}


function binarySearchTwoSum(a, sum){
 
  var pairs = []
  let sortedArr = a.sort();
  var done = false
  var currArr = a
  
  for (var i = 0; (i < a.length) && !(a[i] >= sum); i++)
  {
    var findNum = sum - sortedArr[i];
    for (var j = a.length; j > i; j--)
    {
      if(sortedArr[j] === findNum)
      {
        pairs.push([sortedArr[i], sortedArr[j]])
      }
    }
    
  }
  
  return pairs
 
}
function binaryMatch(sortedArr, num)
{
  
  
   for (var i = 0; i < (sortedArr.length)-1; i++)
  {
    if(sortedArr.find(element => element + sortedArr[i] === num))
    {
      return true
    }
  }
 
  
}

function hashTwoSum(a, sum)
{
var pairs = []
  let sortedArr = a.sort();
  var done = false
  var currArr = a
  
  for (var i = 0; (i < a.length) && !(a[i] >= sum); i++)
  {
    var findNum = sum - sortedArr[i];
    for (var j = a.length; j > i; j--)
    {
      if(sortedArr[j] === findNum)
      {
        pairs.push([sortedArr[i], sortedArr[j]])
      }
    }
    
  }
  
  return pairs
 
}