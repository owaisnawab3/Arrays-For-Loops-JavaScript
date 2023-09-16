var stringsArray = ["Hello", "World", "JavaScript"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true, true];
var mixedArray = ["John", 25, true, "Jane", 30];
var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log(stringsArray)
console.log(numbersArray)
console.log(booleanArray)
console.log(mixedArray)
console.log(qualificationsArray)


var studentNames = ["Ali", "Sara", "Ahmed"];

var studentScores = [420, 380, 460];

var totalMarks = 500;
var percentages = [];

for (var i = 0; i < studentScores.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  percentages.push(percentage);
}

for (var i = 0; i < studentNames.length; i++) {
  console.log("Student: " + studentNames[i]);
  console.log("Score: " + studentScores[i]);
  console.log("Percentage: " + percentages[i] + "%");
  console.log("------------");
}


var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan"];

var selectedCities = []

selectedCities.push(cities[0]);
selectedCities.push(cities[1]);
selectedCities.push(cities[2]);

console.log("Selected Cities:");
for (var i = 0; i < selectedCities.length; i++) {
  console.log(selectedCities[i]);
}

var arr = ["This", "is", "my", "cat"];

var singleString = arr.join(" ");

console.log(singleString);



var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
  document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

document.write("</select>");
