// Write your code here
import * as fs from 'node:fs';

export function writeBlog(filePath, blogData){
    //save data to file
    try{
        fs.writeFileSync(filePath, blogData);
    } catch(err){
        console.log("Could not save blog data to file."+err);
    }
}

export function publishBlog(filePath){
    //return content of specified file
    try{
        const data = fs.readFileSync(filePath, {encoding : 'utf-8'});
        //console.log(data);
        return data;
    } catch(err){
        console.log("Could not save blog data to file."+err);
    }
}
