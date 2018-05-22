var myImgs = document.querySelectorAll("img");
// console.log(myImgs);
var i = 0;

for(i = 0; i < myImgs.length; i++){

myImgs[i].addEventListener("click", function(evt) {
    //creating a overlay
        var myOverlay = document.createElement("div");
        myOverlay.style.width = "100%";
        myOverlay.style.height = "100%";
        myOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        myOverlay.style.position = "absolute";
        myOverlay.style.zIndex = "10";

    //create img on overlay
        var img = document.createElement("img");
        img.src = evt.target.src;
    
     
        img.style.display = "block";
        img.style.marginLeft = "auto";
        img.style.marginRight = "auto";
        img.style.width = "600px";
        img.style.height = "600px";
        img.style.marginTop = "52px";
        img.style.backgroundColor = ""
     

    //adding image to overlay
        myOverlay.appendChild(img);

    //adding overlay to html body
    document.body.appendChild(myOverlay);
    img.addEventListener("click", function(){
        if(myOverlay){
            myOverlay.parentNode.removeChild(myOverlay);
        }
    })


});


}

