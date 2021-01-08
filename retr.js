var ans=document.getElementsById("name");
var f1=firebaseRef=firebase.database().ref().child("age");
f1.on('value',function(datasnapshot){
  ans.innerText=datasnapshot.val();

})
