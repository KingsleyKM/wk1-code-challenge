function gradeGenerator(grade){
    if(grade < 40){
        return "E"
    }
    else if(grade >=40 && grade < 50){
        return "D"
    }
    else if(grade >= 50 && grade < 60){
        return "C"
    }
    else if(grade >= 60 && grade < 80){
        return "B"
    }
    else if(grade >= 80){
        return "A"
    }
    else if(grade <0 && grade >100){
        return "Enter valid grade"
    }
}
gradeGenerator();