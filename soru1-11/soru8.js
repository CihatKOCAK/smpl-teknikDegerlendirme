function arraymove(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  //console.log("::"+arr);
  arr.splice(toIndex, 0, element);
}


var ul = document.getElementById("list-slide1092");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  //console.log(items[i]);
  items[i].addEventListener("click",function(){arraymove(items,i,0);});
}


//00:22:16