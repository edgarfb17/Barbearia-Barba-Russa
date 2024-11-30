let targetHeader = document.querySelector(".topo")

function transitionScroll(){
    if(window.pageYOffset != 0){
        targetHeader.classList.add("transition")
    }
    else{
        targetHeader.classList.remove("transition")
        console.log(targetHeader)
    }
}


window.addEventListener('scroll', transitionScroll)
