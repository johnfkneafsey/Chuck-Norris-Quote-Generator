'use strict';
var baseUrl = 'http://api.icndb.com/jokes/random';
const fn;
const ln;
const audio = new Audio('bang.mp3');
 const getDataFromApi =  () => {
  $.getJSON(baseUrl,  (quote) => {
    renderQuote(quote);
  })
}


const renderQuote = (quote) => $('.js-quote-box').html(`<q>${quote.value.joke}</q><br /><br />`);

//event handlers

$('.js-quote-generator').on('click', () => {
audio.play();
  getDataFromApi();
})

$('.dropdown-content').on('click', '.Nerdy', () => {
  baseUrl = "http://api.icndb.com/jokes/random";
  baseUrl += '?limitTo=[nerdy]';
if(fn && ln) {
    baseUrl +=`&firstName=${fn}&lastName=${ln}`;
  }

})

$('.dropdown-content').on('click', '.Explicit', () => {
  baseUrl = "http://api.icndb.com/jokes/random";
  baseUrl+= '?limitTo=[explicit]';
    if(fn && ln) {
      baseUrl +=`&firstName=${fn}&lastName=${ln}`;
    }


})

$('.dropdown-content').on('click', '.NerdyAndExplicit',() => {
  baseUrl = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]&limitTo=[explicit]';
    if(fn && ln) {
    baseUrl +=`&firstName=${fn}&lastName=${ln}`;
  }

})

$('.nameChange').on('submit', (event) => {
  baseUrl = 'http://api.icndb.com/jokes/random';
  let firstName  = $('.fn').val();
  let lastName = $('.ln').val();
  baseUrl+= `?firstName=${firstName}&lastName=${lastName}`;
   fn = firstName;
   ln = lastName;
  event.preventDefault();
});


$('.reset').on('click', () => {
 baseUrl='http://api.icndb.com/jokes/random';
  fn = undefined;
  ln = undefined;
})