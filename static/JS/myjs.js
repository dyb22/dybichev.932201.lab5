var new1contain = document.getElementById('new1contain');
var new2contain = document.getElementById('new2contain');
var new3contain = document.getElementById('new3contain');
function On1click(){     
    new1contain.style.display = 'flex';   
}

function On2click(){     
   new2contain.style.display = 'flex';      
}

function On3click(){   
    new3contain.style.display = 'flex';       
}




 new1contain.addEventListener('click', (e) => {
   if (e.target === new1contain) {  
      new1contain.style.display = 'none';
    }
});

new2contain.addEventListener('click', (e) => {
    if (e.target === new2contain) {  
       new2contain.style.display = 'none';
     }
 });

 new3contain.addEventListener('click', (e) => {
    if (e.target === new3contain) {  
       new3contain.style.display = 'none';
     }
 });