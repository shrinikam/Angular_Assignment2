function checkString(str: string): string {

  if (str.includes("Marvellous")) {
    return "String Contains Marvellous in it.";
  } else {
    return "String does not contain Marvellous.";
  }
}
const str = "Pune Kothrud Marvellous Infosystems";
console.log(checkString(str));
