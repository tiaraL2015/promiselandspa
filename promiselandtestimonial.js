function addTestimonial(){
var userName = document.getElementById('personName').value;
var userTestiment = document.getElementById('testimonial').value;
database.ref('users/'+newUserKey+'/testiment').set(userTestiment);
database.ref('users/'+newUserKey+'/name').set("~"+userName+"~");
window.alert("Testiment has been created.");
}
function getAlllTestiments(){
  var userRef = firebase.database().ref("users/");
  userRef.orderByValue().on("value", function(data){
    data.forEach(function(data) {
      var para = document.createElement("P");
      var demo = document.getElementById("myCarousel3");
      var demo2 = document.getElementById("test");
       var x= document.getElementsByTagName('li');
      var d=document.createElement("LI");
      var y= document.getElementById("test2");
       d.datatarget  = "#myCarousel3";
       d.dataslideto++;
        para.className="item";
        para.innerHTML = data.val().testiment + "<br>" + data.val().name;
        demo2.appendChild(para);
        demo.appendChild(d);
        demo.appendChild(demo2);
        y.appendChild(d);
       });
  });
}
