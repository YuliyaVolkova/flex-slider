'use strict';
 
var slider = (function() {
  var list = document.body.querySelector('.slider__list'),
    items = list.querySelectorAll('.slider__item'),
    control = document.body.querySelector('.slider__controls'),
    indexMax = items.length - 1,
    orderMax = items.length,
     new_seat;
    
 function next(el) {
    if(el.nextElementSibling) 
       return el.nextElementSibling
    else return items[0]
 }

function prev(el) {
  if(el.previousElementSibling) return el.previousElementSibling
    else return items[indexMax]
}

  function change(e) { 
    e.preventDefault();
    var refEl = list.querySelector('.is-ref');
    refEl.classList.remove('is-ref');
    if(e.target.classList.contains('slider__button-prev')) {
     new_seat = prev(refEl);
     list.classList.add('is-reversing');
     }
    else if(e.target.classList.contains('slider__button-next')) {
     new_seat = next(refEl);
     list.classList.remove('is-reversing');
    }   
    new_seat.classList.add('is-ref');
    new_seat.style.order = '1'; 
    new_seat = next(new_seat);
    for(var i=2; i<=orderMax; i++) {
      new_seat.style.order = i;
      new_seat = next(new_seat);
    }

   list.classList.remove('is-set');
    setTimeout(function() {list.classList.add('is-set');}, 50);  
  }
  function handler() {   
    control.addEventListener("click", change, false);      
  }
  return { handler }
})();
window.onload = slider.handler;
