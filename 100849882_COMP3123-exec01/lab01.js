//------------Taylor Martin, Student ID: 100849882-------------
// Question 01:
// Write JS program to capitalize first letter of each word in string

function capitalLetterCon(givenString)
{
    givenString = givenString.split(" ");
    
    for(let i=0, stringLength=givenString.length; i<stringLength; i++)
    {
        givenString[i]=givenString[i][0].toUpperCase() + givenString[i].substr(1);
    }

    return givenString.join(" ");
}

console.log(capitalLetterCon("the quick brown fox."))

//-------------------------------------------------------------
// Question 02:
// Write JS program to find largest of three ints

function largestInt(int1, int2, int3)
{
    console.log(Math.max(int1, int2, int3));
}

largestInt(1, 0, 1);
largestInt(0, -10, -20);
largestInt(1000, 510, 440);


//-------------------------------------------------------------
// Question 03:
// Write JS program to move last 3 char to start of string, string length <= 3
function moveChar(charString)
{
    if(charString.length >= 3)
    {
        return charString.slice(-3) + charString.slice(0,-3);
    }

    return charString
}

console.log(moveChar("Python"));
console.log(moveChar("JavaScript"));
console.log(moveChar("Hi"));

//-------------------------------------------------------------
// Question 04:
// Write JS program to find type of angle
function angleType(angle)
{
    if(angle<90)
    {
        console.log("Acute angle");
    }
    else if(angle==90)
    {
        console.log("Right angle");
    }
    else if(angle>90 && angle<180)
    {
        console.log("Obtuse angle");
    }
    else if(angle==180)
    {
        console.log("Straight angle");
    }
}

angleType(47);
angleType(90);
angleType(145);
angleType(180);