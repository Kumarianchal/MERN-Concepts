// Please don't change the pre-written code
// Import the necessary modules here
const fileSystem = require('fs');

const Solution = () => {
  // Write your code here
  try{
    fileSystem.writeFileSync('notes.txt', "The world has enough coders ");
  } catch(err){
    console.log(err);
  }

  const fileData = fileSystem.readFileSync('notes.txt', {encoding : 'utf8'});
  console.log(fileData);

  try{
    fileSystem.appendFileSync('notes.txt', "BE A CODING NINJA!");
  } catch(err){
    console.log(err);
  }

  const updatedFileData = fileSystem.readFileSync('notes.txt');
  console.log(updatedFileData.toString());
  
};
Solution();
module.exports = Solution;
