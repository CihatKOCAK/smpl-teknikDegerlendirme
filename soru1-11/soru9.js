
let myDiv = document.getElementsByClassName('fl col-12 sh-pr-title');
for (var i = 0; i < myDiv.length; ++i) {
if(myDiv[i].getElementsByClassName('fl col-12 detailLink listProductName')[0].getAttribute('title').split(' ')[1] == "Pantolon")
{
   let img = document.createElement("IMG");
   img.src ="https://cdn.hellosmpl.com/uploads/2021/08/23/8tgkhals8bo94pjo7ulma6pdlk.png";;
   myDiv[i].appendChild(img);
}  
}

//00:16:10