// challenge 1

// span variable
var myName = document.getElementById("user");

myName.addEventListener("load",myNameFunc()) 

function myNameFunc(){
    myName.innerHTML="Arun Kumar_S"
    
}

// challenge 2

// button variable
var BgColor = document.getElementById("btn-click")

BgColor.addEventListener("click",()=>{

    BgColor.style.backgroundColor="chocolate"

})

// challenge 3

// build variable
var build = document.getElementById("build-button")

build.addEventListener("click",makeSentence)


function makeSentence() {
    
    const noun = document.getElementById("noun").value
    const verb= document.getElementById("verb").value
    const adverb= document.getElementById("adverb").value

    const sentence = `${noun} ${verb} ${adverb}`
    document.getElementById("statement").innerHTML=sentence
}

// challenge 4.1 bubbling and 4.2 capturing

var grandParent = document.getElementById("grandparent")
var parent = document.getElementById("parent")
var child = document.getElementById("child")


// capturing (large to small)
grandParent.addEventListener("click",()=>{

    console.log("Grandparent clicked")

},true)

parent.addEventListener("click",()=>{

    console.log("Parent clicked")

},true)

child.addEventListener("click",()=>{

    console.log("Child clicked")
    
},true)
/

// bubbling (small to large)
grandParent.addEventListener("click",()=>{

    console.log("Grandparent clicked")

})

parent.addEventListener("click",()=>{

    console.log("Parent clicked")

})

child.addEventListener("click",()=>{

    console.log("Child clicked")

})

// challenge 5
var category = document.getElementById("category")

category.addEventListener("click", (e)=>{

    if(e.target.id=="blazers"){
        console.log("blazers");
    }

})


