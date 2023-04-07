function checkString(str) {
    if (str.includes("Marvellous")) {
        return "String Contains Marvellous in it.";
    }
    else {
        return "String does not contain Marvellous.";
    }
}
var str = "Pune Kothrud Marvellous Infosystems";
console.log(checkString(str));
