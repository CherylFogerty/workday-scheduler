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


localStorage.setItem("time-input", "save");
const save = localStorage.getItem("time-input")
