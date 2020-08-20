var addButton = document.querySelector(".addbutton")
var input = document.querySelector(".input")
var container = document.querySelector(".container")


class item{
    constructor(itemName){
        this.createDiv(itemName)
    }

     createDiv(itemName){
       let input = document.createElement("input")
       input.type="text"
       input.classList.add("item_input")
       input.value=itemName
       input.disabled=true
       let itemBox = document.createElement("div")
       itemBox.classList.add('item')
       

       let editBUtton = document.createElement("button")
       editBUtton.classList.add('editbutton')
       editBUtton.innerText="Edit"
       

       let removeBUtton = document.createElement("button")
       removeBUtton.classList.add('removebutton')
       removeBUtton.innerText="Remove"

       container.appendChild(itemBox)
       itemBox.appendChild(input)
       itemBox.appendChild(editBUtton)
       itemBox.appendChild(removeBUtton)
       

       editBUtton.addEventListener("click",()=>this.edit(input))
       removeBUtton.addEventListener("click",()=>this.remove(itemBox))

       
     }

     edit(input){
         input.disabled=!input.disabled
     }


     remove(itemBox){
      container.removeChild(itemBox)
     }




}


addButton.addEventListener("click",()=>{
    if(input.value !=""){
    new item(input.value)
    input.value=""
    }else{
        alert("input is empty")
    }
})