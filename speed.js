function speedDetector(){
    // demerit =(speed-70)/5
    if(speed >= 70 && speed <= 130){
        demerit =(speed-70)/5
        return `Points: ${demerit}`
    }
    else if(demerit >= 12){
        return "License suspended"
    }
    else{
        return "ok"
    }
}
speedDetector();