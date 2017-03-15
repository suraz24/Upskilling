function submitAnswers(){

    var total = 3;
    var score = 0;
  
    //Get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;

   //validation
   for(var i=1;i<=total; i++){
        if(eval('q'+i) == null || eval('q'+i)== ""){
        alert('You missed question' + i);
        return false;
       }
   }
   
   //set correct answers
   var answers = ["b", "a", "d"];

   //check the answers
   for(var i=1; i<=total; i++){
        if(eval('q'+i)==answers[i-1]){
        score++;
       }
   }

   //display results
   var result= document.getElementById('results');
   results.innerHTML = '<h3> You Scored <span>' + score+'</span> out of <span>' + total + '</span></h3>';

 return false;
}