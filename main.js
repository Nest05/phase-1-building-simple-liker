// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const likeGlyphs = document.querySelectorAll('.like-glyph')
const modal = document.querySelector('#modal')
const modalMessage = document.querySelector('#modal-message')
const serverCall = mimicServerCall();

likeGlyphs.forEach(likeGlyph =>{
likeGlyph.addEventListener('click', () => {
  if (likeGlyph.innerHTML === EMPTY_HEART) {
    likeGlyph.innerHTML = FULL_HEART
    likeGlyph.classList.add('activated-heart')
    serverCall
   .then(res => {
    likeGlyph.innerHTML = FULL_HEART
    likeGlyph.classList.add('activated-heart')
   })
   .catch(error => {
    
    modalMessage.textContent = error;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('hidden'), 3000)
  })
 }else{
    likeGlyph.innerHTML = EMPTY_HEART
    likeGlyph.classList.remove('activated-heart')
 }
  
  
  
})
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
