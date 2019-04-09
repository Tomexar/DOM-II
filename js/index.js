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
footer.addEventListener('ckick', event => {
    console.log('footer was clicked x2')
    footertxt.style.visability = 'visible'
})

//close 
window.addEventListener('close', function( event ) {
    // make the close button ineffective
    event.preventDefault();
    alert('DON\'T GO')
  },false);

//wheel
Wpage.addEventListener('wheel' , function(event){
    
    }); 



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