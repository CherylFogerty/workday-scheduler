var today=new Date().toLocaleDateString()
document.getElementById("currentDay").textContent=today

$(".row").each(function( index , element){
    
var hour=$(element).data("time")
console.log(hour)


})

function colorupdater (){
    var currentTime = moment().hours()
    $(".row").each(function() {
    var tabTime = parseInt($(this).attr("data-time"))
        if(tabTime < currentTime){
            $(this).addClass("past")
        }
        else if (tabTime === currentTime){
            $(this).removeClass("past")
            $(this).addClass("present")
  }
        else {
            $(this).removeClass("past")
            $(this).addClass("present")
            $(this).addClass("future")
        }
    })

}
colorupdater()


{
    function createItem(){
   localStorage.setItem("save" , "time-input");
    }
      function readValue(){
var x = localStorage.getItem("time-input");
    document.getElementsByClassName("time-input").innerHTML = x;
    }
    
}
{
     document.getElementsByClassName("myBtn").addEventListener("click" , myFunction);
     function myFunction(){
         alert ("Saved!")
     }
}