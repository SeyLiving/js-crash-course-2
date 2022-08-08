let score = 80;
if (score >= 0 && score <= 100) {
    if (score >= 90) {
    console.log("Excellent")
} else if (score >= 80) {
    console.log("You won a pen")
} else if (score >= 70) {
    console.log("Good") 
} else if (score >= 60) {
    console.log("Average")
} else if (score >= 50) {
    console.log("Credit")
} else if (score >= 40) {
    console.log("Pass")
}else if (score >= 0) {
    console.log("Fail")}

} else {
    console.log("Please enter a valid number")
}