// function netSalary(){
//     // let the user enter their basic salary and allowances

//     const basicSalary = parse.float(prompt("Enter your basic salary : "))
//     const allowances = parse.float(prompt("Enter you allowances : "))

//     const taxRate = 0.3;
//     const nhifRate = 0.02;
//     const nssfRate = 0.01;

//     const grossSalary=basicSalary + allowances

//     const nssfDeduction = Math.min(grossSalary * nssfRate)
//     const nhifDeduction = Math.min(grossSalary * nhifRate)
//     const paye = Math.max(grossSalary - nssfDeduction - nhifDeduction) * taxRate

//     const netTotal = grossSalary - nhifDeduction - paye - grossSalary

    
//     console.log((`NHIF deduction is: ${nhifDeduction}`));
//     console.log((`NSSF deduction: ${nssfDeduction}`));
//     console.log((`PAYE: ${paye}`));
//     console.log((`The gross salary is: ${grossSalary}`));
//     console.log((`The net pay: ${netTotal}`)); 
// }
// netSalary();

const basicSalary = parse.float(prompt("Enter your basic salary : "))
const allowances = parse.float(prompt("Enter you allowances : "))

const afterNhifDeductions = function (){
    if (grossSalary < 6000){return (grossSalary-150)}
    else if (grossSalary >= 6000 && grossSalary < 8000){return (grossSalary-300)}
    else if (grossSalary >= 8000 && grossSalary < 12000){return (grossSalary-400)}
    else if (grossSalary >= 12000 && grossSalary < 15000){return (grossSalary-500)}
    else if (grossSalary >= 15000 && grossSalary < 20000){return (grossSalary-600)}
    else if (grossSalary >= 20000 && grossSalary < 25000){return (grossSalary-750)}
    else if (grossSalary >= 25000 && grossSalary < 30000){return (grossSalary-850)}
    else if (grossSalary >= 30000 && grossSalary < 35000){return (grossSalary-900)}
    else if (grossSalary >= 35000 && grossSalary < 40000){return (grossSalary-950)}
    else if (grossSalary >= 40000 && grossSalary < 45000){return (grossSalary-1000)}
    else if (grossSalary >= 45000 && grossSalary < 50000){return (grossSalary-1100)}
    else if (grossSalary >= 50000 && grossSalary < 60000){return (grossSalary-1200)}
    else if (grossSalary >= 60000 && grossSalary < 70000){return (grossSalary-1300)}
    else if (grossSalary >= 70000 && grossSalary < 80000){return (grossSalary-1400)}
    else if (grossSalary >= 80000 && grossSalary < 90000){return (grossSalary-1500)}
    else if (grossSalary >= 90000 && grossSalary < 100000){return (grossSalary-1600)}
    else if (grossSalary >= 100000){return (grossSalary-1700)}
    else if (grossSalary  < 0 ){return ("invalid value")}
}
const MonthlypayeDeductions = function (){
    if(grossSalary <= 24000){return (grossSalary * 0.1)}
    else if(grossSalary > 24000 && grossSalary < 32334){return (grossSalary * 0.25)}
    else if(grossSalary >= 32334 && grossSalary <= 500000){return (grossSalary * 0.3)}
    else if(grossSalary > 500000 && grossSalary <= 800000){return (grossSalary * 0.325)}
    else if(grossSalary > 800000){return (grossSalary * 0.35)}
}
const nssfDeduction = function(){
    if(grossSalary >= 1 && grossSalary <= 6000){return grossSalary * 0.06}
    else if (grossSalary >= 6001){return grossSalary * 0.06}

    return (afterNhifDeductions() - MonthlypayeDeductions() - nssfDeduction());
}
netsalary();
