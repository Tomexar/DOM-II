// Your code goes here
// prevent default

const atags = document.getElementsByClassName('nav');
console.log(atags)
for (var i = 0 ; i < atags.length; i++) {
    atags[i].addEventListener('click' , function(event){
        console.log('link was clicked')
        event.preventDefault();
        alert('Error!')
    }); 
}



//mouseover
const buspic = document.querySelector('img');
console.log(buspic);
buspic.addEventListener('mouseover', function(event){
    console.log('Mouse over');
    buspic.style.visibility = 'hidden';
});

//mouseleave
const head = document.getElementsByClassName('intro')
console.log(head[0])
head[0].addEventListener('mouseleave', function(event){
    console.log('Mouse left')
    buspic.style.visibility = 'visible';
});


//keydown 
const Wpage = document.querySelector('body');
Wpage.addEventListener('keydown', event => {
    console.log('This key was pressed:', event.key)  
})


//load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

//keyup
 Wpage.addEventListener('keyup', event => {
    if (event.key === 'ArrowRight'){
        if (Wpage.style.backgroundColor ==='red'){
            Wpage.style.backgroundColor = 'white';
        }
        else {
            Wpage.style.backgroundColor = 'red';
        }
    }  
  })

//click 
const footertxt = document.querySelector('footer p')
console.log(footertxt)

footertxt.addEventListener('click', event =>{
    console.log('Footer text was clicked')
    footertxt.style.visibility = 'hidden';
})

//dblclick 
const footer = document.querySelector('footer')
footer.addEventListener('dblclick', event => {
    console.log('footer was clicked x2')
    footertxt.style.visibility = 'visible'
})

//close 
window.onbeforeunload = confirmExit;
function confirmExit() {
    return " "
}

// window.addEventListener('beforeunload', function (event) {
//     event.preventDefault();
//     event.returnValue = true;
//   });

// window.onbeforeunload = function(){
//     return 'Yes?'
// }

//wheel
Wpage.addEventListener('wheel' , function(event){
    console.log('scrolling')
    Wpage.style.backgroundColor = 'green' 
}); ///is there anyway to check if the event is active 
///i was trying to only have this work while the user is scrollling but i couldnt figure it out
///somthing like if (event === true )


//offline
window.addEventListener('offline', event => {
    alert('You have lost connection to the internet')///I actually did check this by disconnecting my wifi
}) 


//prop

const paragraph = document.getElementsByClassName('destination')[0]
const button = document.getElementsByClassName('btn')[0]
console.log(paragraph)
console.log(button)



button.addEventListener('click', event =>{
    console.log('Button was clicked')
    event.stopPropagation();
    
})

paragraph.addEventListener('click', event =>{
    console.log('Paragraph was clicked')
})