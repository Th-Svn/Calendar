 var today = new Date();

 var date=(today.getMonth()+1) + ' - ' + today.getDate() + ' - ' + today.getFullYear();
 document.getElementById("p1").innerHTML = date;


$("button").on("click", function() {
    event.preventDefault();
    var container = $(this).parent().parent();  
    var inputValue = container.find("input").val();
    var inputId = container.find("input").attr("id");
    var textObj = {
      "input-id": inputId,
      "input-value": inputValue };
    
    if (textObj["input-value"] !== "") {
      plannerContent.push(textObj);
      localStorage.setItem("planner-items", JSON.stringify(plannerContent));
    }
  });