// Write your code here
// Import required module
import * as readline from 'node:readline';
import { writeBlog,  publishBlog} from './blogActions.js';

const Solution = () => {
  // Write your code here
  const consoleInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  })

  consoleInterface.question("Enter your blog: ", (inputData)=>{
    writeBlog('myblog.txt', inputData);
    const data1 = publishBlog('myblog.txt');
    console.log(data1);
  })
};

Solution();
