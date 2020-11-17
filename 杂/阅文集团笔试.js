var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');
function onClick(){
  alert('click');
  setTimeout(function(){
    alert('timeout');
  },0);
  
Promise.resolve().then(function(){
  alert('promise');
});
  outer.setAttribute('data-random',Math.random());
}
inner.addEventListener('click',onClick);
outer.addEventListener('click',onClick);
