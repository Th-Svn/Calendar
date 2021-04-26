 var today = new Date();

 var date=(today.getMonth()+1) + ' - ' + today.getDate() + ' - ' + today.getFullYear();
 document.getElementById("p1").innerHTML = date;

 $(document).ready(function(){
    $(".btn").click(function(){
        $("#myModal").modal('show');
    });
});