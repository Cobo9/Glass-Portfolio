import {stackText, stackItems} from "./elements"
import {stack} from "./constants"

function generateText (){
   const element= stack.find(item=> item.name == this.dataset.key)
   console.log(element)
   stackText.textContent ="";
   stackText.textContent=element.text
}

stackItems.forEach(item=>{
    item.addEventListener("click", generateText)
})

