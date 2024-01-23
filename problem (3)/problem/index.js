// Import required module
const  readLine = require('readline');

const Solution = () => {
  // Write your code here
  const consoleInterface = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
  })

  consoleInterface.question("Enter the first number: ", (num1)=>{
    consoleInterface.question("Enter the second number: ", (num2)=>{
      num1 = Number(num1);
      num2 = Number(num2);
      const maxm = num1>num2 ? num1 : num2;
      console.log(`The maximum of the two numbers is: ${maxm}`);
    })
  })
};

Solution();
module.exports = Solution;
