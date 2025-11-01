const yourMarks = 40;

 if ( yourMarks <= 100 && yourMarks >= 90){
    console.log('Your GPA : Golden A+');
 }
else if (yourMarks < 90 && yourMarks >= 80){
    console.log('Your GPA : A+')
}
else if (yourMarks < 80 && yourMarks >= 70){
    console.log('Your GPA : A')
}
else if (yourMarks < 70 && yourMarks >= 60){
    console.log('Your GPA : A-')
}
else if (yourMarks < 60 && yourMarks >= 50){
    console.log('Your GPA : B')
}
else if (yourMarks < 50 && yourMarks >= 40){
    console.log('Your GPA : C')
}
else if (yourMarks < 40 && yourMarks >= 33){
    console.log('Your GPA : D')
}
else if ( yourMarks >100){
    console.log('The marks out of exam marks')
}

 else {
    console.log( 'You are fail the exam');
 }