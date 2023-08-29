//You are presented with a string with a collection of data which are mixed alphabets i.e., "abdsgyhidsaadgbdaasbvcydsaabdgsaayre", create a function that will count through the string and show the number of a, b, d and y each contained in the string
function countString(){
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countY = 0;
    var alpha = "abdsgyhidsaadgbdaasbvcydsaabdgsaayre";
    for (let i = 0; i < alpha.length; i++){
        if(alpha[i] === "a"){
            countA += 1
        }
        if(alpha[i] === "b"){
            countB += 1
        }
        if(alpha[i] === "c"){
            countC += 1
        }
        if(alpha[i] === "y"){
            countY += 1
        }
    }
    return `A = ${countA}
            B = ${countB}
            C = ${countC}
            Y = ${countY}`
} 
console.log(countString());  
 //end

//  Given a string of items to be ``rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair" use methods to separate the edible and non-edible items from the string.
function listOfItems(){
    const items = "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair";
    const list = items.split(", ");
    let edible = []
    let nonedible = []
    for (let i = 0; i < list.length; i++){
        switch(list[i]){
            case "rice":
                edible.push(list[i])
                break;
            case "yam":
                edible.push(list[i])
                break;
            case "beans":
                edible.push(list[i])
                break;
            case "cocoyam":
                edible.push(list[i])
                break;
            case "banana":
                edible.push(list[i])
                break;
            case "semo":
                edible.push(list[i])
                break;
            case "table":
                nonedible.push(list[i])
                break;
            case "tyre":
                nonedible.push(list[i])
                break;
            case "milk":
                edible.push(list[i])
                break;
            case "phone":
                nonedible.push(list[i])
                break;
            case "watch":
                nonedible.push(list[i])
                break;
            case "chair":
                nonedible.push(list[i])
                break;
        }
    }
   return(`Edible: ${edible} | Nonedible: ${nonedible}`)
}
console.log(listOfItems())


  