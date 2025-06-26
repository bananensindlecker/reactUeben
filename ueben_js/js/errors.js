

//wenn try{}einen error wirft, stoppt das programm nicht sondern wirft einen error und fährt dann fort
//gut für verbindungen oder inputs
try {
    //console.leg("hallo");
} catch (error) {
    console.log(error);
}
finally{//wird ausgeführt egal ob es einen error gibt oder nicht
    console.log("passiert immer")
}




try {
    const dividend = Number(100);
    const divisor =Number("pizza");
    if (divisor == 0) {
        throw new Error("man kann nicht durch 0 teilen!")
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("das ist keine Zahl!")
    }
    const result = dividend / divisor;
    console.log(result);
} catch (error) {
    console.error(error);
}

console.log("programm finished")