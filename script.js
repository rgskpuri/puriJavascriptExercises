function ExerciseOne()
{
    var total=0;
    var number = prompt("Gimme a number!","5");
    if(number != null)
    {
        for(i=0; i<=number; i++)
        {
            total = total + i;
        }

        console.log(total);
    }    
}

function ExerciseTwo()
{
    var cocatenatedwords = null;
    var doyouwanttoplay = prompt("Do you want to play?","yes");
    do 
    {
        var word = prompt("Enter a word");
        if(cocatenatedwords != null)
        {
            cocatenatedwords = cocatenatedwords + " " + word 
        }
        else
        {
            cocatenatedwords = word;
        }
        doyouwanttoplay = prompt("Do you want to play again?", "yes");
    } while(doyouwanttoplay == "yes")

    console.log(cocatenatedwords);
}

function ExerciseThree()
{
    var exclamation;
    var nameprint = prompt("Do you want to print my name?", "yes");
    if(nameprint=="yes")
        console.log("Hello my name is Sharad");
    while(nameprint=="yes")
    {
        nameprint = prompt("Do you want to print my name again?", "yes");
        if(nameprint == "yes")
        {
            if(exclamation != null) {
                exclamation = exclamation + "!";
            }
            else
            {
                exclamation = "!";
            }
            console.log("Hello my name is Sharad"+exclamation);            
        }
    }
}

function ExerciseFour()
{
    var timeofday = prompt("What time of day is it?");
    var mealtype;
    var foodsuggestion;
    switch(timeofday)
    {
        case "morning":
            mealtype = "breakfast";
            foodsuggestion = "eggs and toast";
            break;
        case "noon":
            mealtype = "lunch";
            foodsuggestion = "a salad";
            break;
        case "evening":
            mealtype = "dinner";
            foodsuggestion = "chicken and rice";
            break;
        default:
            mealtype = "a snack";
            foodsuggestion = "cookies!";
    }
    console.log("Since it is " + timeofday + ", you should be eating " + mealtype + ".  We suggest " + foodsuggestion);

}