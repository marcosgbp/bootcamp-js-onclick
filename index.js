function login(element){
    if(element.innerHTML=="Login"){
        element.innerHTML="Logout";
    }else{
        element.innerHTML="Login";
    }
}
function removeElem(element){
    element.remove();
}
function like(){
   alert("This page says \nNinja was liked");
}