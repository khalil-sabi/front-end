const dropDownUser = document.getElementById("main-drop");
const dropDownli = document.getElementById("main-li");
const body = document.getElementById("body");

dropDownUser.addEventListener("click", function(e){
    if(!(e.target.parentNode.parentNode.className== "sub-drop")){
        dropDownli.classList.toggle("active");        
    }
})
function hideDropDown(e){
   if(!(e.target.parentNode.parentNode.className== "sub-drop") 
        && !(e.target.parentNode.parentNode.classList.contains("main-drop"))
        && !(e.target.parentNode.parentNode.parentNode.classList.contains("main-drop")) 
    ){ 
    dropDownli.classList.remove("active");
    console.log(e.target.parentNode.parentNode.className);
    
       
   }
}

body.addEventListener('click', hideDropDown, false);