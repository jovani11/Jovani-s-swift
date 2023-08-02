document.querySelectorAll(".image-container img").forEach(image => {
  
  
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block"
    document.querySelector(".popup-image img").src = image.getAttribute('src')
}
})

let returnBtn = document.querySelector(".popup-image span")

returnBtn.addEventListener("click", () => {
  document.querySelector(".popup-image").style.display = "none"
})



//swap1


function swap1() {

  setTimeout( () => {
  
  document.querySelector("#image1").src = "../tshirts/swap/swap1.jpg"
  
    setTimeout( () => {
    document.querySelector("#image1").src = "../tshirts/swap/swap2.jpg"
    
    
    setTimeout( () => {
    document.querySelector("#image1").src = "../tshirts/swap/swap3.jpg"
    
    setTimeout( () => {
      document.querySelector("#image1").src = "../tshirts/item9.jpg"
      
    },4000)
  
  },3000)
  
  },2000)
  
},1000)



}

setInterval( () => {
  swap1();
  
},4000)




//swap2..
function swap2() {

  setTimeout( () => {
  
  document.querySelector("#image2").src = "../tshirts/swap/swap4.jpg"
  
    setTimeout( () => {
    document.querySelector("#image2").src = "../tshirts/item12.jpg"
    
    

  }, 3000)
  
},2000)

}

setInterval( () => {
  swap2();
  
},2500)



//swap3..
function swap3() {

  setTimeout( () => {
  
  document.querySelector("#image3").src = "../tshirts/swap/swap5.jpg"
  
    setTimeout( () => {
    document.querySelector("#image3").src = "../tshirts/swap/swap6.jpg"
    
    

  }, 3000)
  
},2000)

}

setInterval( () => {
  swap3();
  
},2300)


//swap4


function swap4() {

  setTimeout( () => {
  
  document.querySelector("#image4").src = "../tshirts/item15.jpg"
  
    setTimeout( () => {
    document.querySelector("#image4").src = "../tshirts/swap/swap7.jpg"
    
    

  }, 2500)
  
},500)

}

setInterval( () => {
  swap4();
  
},2000)




function swap5() {

  setTimeout( () => {
  
  document.querySelector("#image5").src = "../bags/swap/swap1.jpg"
  
    setTimeout( () => {
    document.querySelector("#image5").src = "../bags/swap/swap2.jpg"
    
    
        setTimeout( () => {
    document.querySelector("#image5").src = "../bags/swap/swap3.jpg"
    
    
        setTimeout( () => {
    document.querySelector("#image5").src = "../bags/item1.jpg"
    
    

  }, 1000)
    

  }, 1000)
    
    
    
    

  }, 1000)
  
},1000)

}

setInterval( () => {
  swap5();
  
},5000)












