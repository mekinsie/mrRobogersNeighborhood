// Busniess Logic



//User Interface Logic
$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();
    
    let number =$("input#number").val();
    let result = [];
    const priority3 = ("2","3");
    const priority2 = ["1","2"];
    console.log(number);
    for (let i=0; i <= number; i ++) {
      
      if (priority3.includes(number)) {
        result.push(i + " ");
        result[i]="Boop!";
      }
      
      
      // if (i === 0) {
        //   result.push(i + " ");
        // }
        // else if (i % 20 == 1) {
          //   result.push(i + " ");
          //   result[i] = "Boop! "
          // }
          // else if (i % 10 == 1) {
            //   result.push(i + " ");
            //   result[i] = "Beep! "
            // }
            // else if (i % 10 == 2) {
              //   result.push(i + " ");
              //   result[i] = "Boop! "
              // }
              // else if (i % 10 == 3) {
                //   result.push(i+ " ");
                //   result[i] = "Won't you be my neighbor? "
                // }
                else if (i != 1) {
                  result.push(i+ ", ");
                }
                
                
              }
              $(".container2").show();
              $("#output").append(result);
              console.log(result);
            });
          });