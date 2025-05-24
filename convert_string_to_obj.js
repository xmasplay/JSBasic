const csvData = "Alice,25,New York;Bob,30,Los Angeles;Charlie,28,Chicago";

// Define the keys for the objects
const keys = ['name', 'age', 'city'];

// Split the string into rows (by semicolon)
const result = csvData.split(';');

let personArrayObj = [];

for (let i = 0; i < result.length; i++) {
    // Split each row by comma
    const personArray = result[i].split(',');

    // Create an object from keys and personArray values
    let personObj = {};
    for (let j = 0; j < keys.length; j++) {
        personObj[keys[j]] = keys[j] === 'age' ? Number(personArray[j]) : personArray[j];
    }

    // Push the object to the result array
    personArrayObj.push(personObj);
}

console.log(personArrayObj);


// function parseCSVData(csvString) {
//   const keys = ['name', 'age', 'city'];

//   return csvString.split(';').map(entry => {
//     const values = entry.split(',');
//     return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
//   });
// }

// // Example usage
// const csvData = "Alice,25,New York;Bob,30,Los Angeles;Charlie,28,Chicago";
// const result = parseCSVData(csvData);
// console.log(result);
