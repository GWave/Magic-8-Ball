$(document).ready(function(){
    
    // Creating empty arrays and adding values
 
    var answerArray = [];
    answerArray.push( "yes" );
    answerArray.push( "It is certain" );
    answerArray.push( "It is decidedly so" );
    answerArray.push( "Without a doubt" );
    answerArray.push( "Yes definitely" );
    answerArray.push( "You may rely on it" );
    answerArray.push( "As I see it, yes" );
    answerArray.push( "Most likely" );
    answerArray.push( "Outlook good" );
    answerArray.push( "Signs point to yes" );
    answerArray.push( "Reply hazy try again" );
    answerArray.push( "Ask again later" );
    answerArray.push( "Better not tell you now" );
    answerArray.push( "Cannot predict now" );
    answerArray.push( "Concentrate and ask again" );
    answerArray.push( "Don't count on it" );
    answerArray.push( "My reply is no" );
    answerArray.push( "My sources say no" );
    answerArray.push( "Outlook not so good" );
    answerArray.push( "Very doubtful" );
     
    
  var randomAnswer = function() {
        var randomGenerator = answerArray[Math.floor(answerArray.length * Math.random())];
        return randomGenerator;
    };
    
    // Execute random answer on click
    $('#shakeButton').click(function(){
        
        $( "#answerBox" ).effect( "shake", {times:5, distance:2}, 200 );
        $( "#ballContent" ).effect( "shake", {times:5, distance:20}, 750 );
        $( "#answerBox" ).fadeOut( 500, "linear");
        $( "#answerText" ).fadeOut( 1000, "linear", function(){
            $('#answerText').replaceWith( "<span id='answerText'>" + randomAnswer() + "</span>" ); 
            $( "#answerText" ).fadeIn(2000, "linear");
            $( "#answerBox" ).fadeIn(1000, "linear");
        });
    });
});