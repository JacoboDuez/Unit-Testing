
const greet = (name)=>{
    let outputText = "";
    switch (typeof name){
        case "string":
            if(typeof name !==null){
                if(name.toUpperCase()==name){
                    outputText = 'HELLO ' + name + '!';
                }
                else{
                    outputText = 'Hello, ' + name;
                }
            }         
            
            break;
        case "object":
            if(name ===null){
                outputText = 'Hello there';
            }
            else{
                // I handle arrays in this part of the code
                for(let i=0;i<name.length;i++){
                    if(i>0){
                        outputText += ',' + name[i];
                    }
                    else{
                        outputText += name[i];
                    }
                    
                }
                outputText = 'Hello ' + outputText;
            }
            break;
    }
    return outputText;
}
        

module.exports = {greet};