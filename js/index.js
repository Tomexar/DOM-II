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