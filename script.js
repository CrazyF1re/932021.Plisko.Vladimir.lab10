let lamp_state = false
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.cirtains').onclick = function(element){
        element.target.style = "bottom:100%; transition: 1s;";
    }
    document.querySelector('.hover-torch').onclick = function(){
        if(!lamp_state){
            document.querySelector('.light').style = 'opacity:0.5;';
            document.querySelector('.magicbox').style='opacity:0.5;';
            document.querySelector('.turnoff').style = 'top:11vh;'
            document.querySelector('.hover-torch').style = 'height:18.5%;'
            lamp_state = true;
        }
        else{
            document.querySelector('.light').style = 'opacity:0;';
            document.querySelector('.magicbox').style='opacity:0;';
            document.querySelector('.turnoff').style = 'top:7vh;'
            document.querySelector('.hover-torch').style = 'height:9%;'   
            lamp_state = false;
        }
    }
    document.querySelector('.rabbit').onclick = function(element) {
        element.target.style = 'top:20%;'
        setTimeout(function(){
            document.querySelector('.bird').style = 'top:9%';
        },500);
    }
    document.querySelector('.bird').onclick = function(element){
        element.target.style = 'top:20%;'
        setTimeout(function(){
            document.querySelector('.rabbit').style = 'top:9%';
        },500);
    }
})
