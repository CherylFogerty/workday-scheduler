var today=new Date().toLocaleDateString()
document.getElementById("currentDay").textContent=today

$(".row").each(function( index , element){
    
var hour=$(element).data("time")
console.log(hour)


})