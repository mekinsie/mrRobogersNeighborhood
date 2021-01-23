//let functionString = function() {
  


$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();
    let number =$("input#number").val();
    let array = [];
    let result = [];
    for (let i=0; i <= number; i ++) {
      array.push(i.toString());
      if (array[i].includes("3")) {
        result.push("Won't you be my neighbor? ");
      }
      if (array[i].includes("2")) {
        result.push("Beep! ");
      }
      if (array[i].includes("1")) {
        result.push("Boop! ");
      }
      // if (i % 100 == 31) {
      //   result.push("Won't you be my neighbor? ");
      // }
      // else if (i % 100 == 32) {
      //   result.push("Won't you be my neighbor? ");
      // }
      // else if (i % 100 == 21) {
      //   result.push("Boop! ");
      // }
      // else if (i % 10 == 1) {
      //   result.push("Beep! ");
      // }
      // else if (i % 10 == 2) {
      //   result.push("Boop! ");
      // }
      // else if (i % 10 == 3) {
      //   result.push("Won't you be my neighbor? ")
      // }
      else {
        result.push(array[i]+ ", ");
      }    
    }
    $(".container2").show();
    $("#output").append(result);
  });
});