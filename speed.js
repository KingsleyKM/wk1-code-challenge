// declaring the speed detector functions 
function speedDetector(){
    // demerit =(speed-70)/5
    if(speed >= 70 && speed <= 130){
   // if statement for the speed range of 70-130     
        demerit =(speed-70)/5
    // calculates the demerit of the calculation (speed-70)/5
        return `Points: ${demerit}`
    }
    // the condition of else where demerit >= 12
    else if(demerit >= 12){
        return "License suspended"
    }
    else{
        return "ok"
    }
}
// calling the function
speedDetector();