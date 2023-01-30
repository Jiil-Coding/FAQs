const quetions = document.querySelectorAll('.quetions')

quetions.forEach((element) =>{
    element.addEventListener('click', ()=>{
        if(element.nextElementSibling.classList.contains("text-hidden")){
            element.nextElementSibling.classList.remove("text-hidden");
            element.children[0].style.fontWeight= "600";
            element.children[0].style.color= '#000';
            element.children[1].style.transform= "rotate(180deg)";
        }else{
            element.nextElementSibling.classList.add("text-hidden");
            element.nextElementSibling.classList.add("text-hidden");
            element.children[0].style.fontWeight= "400";
            element.children[0].style.color= "hsl(237,12%,33%)";
            element.children[1].style.transform= "rotate(360deg)";
        }
    })
})