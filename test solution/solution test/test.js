const redColour = document.querySelector('.btn--red');
const blueColour = document.querySelector('.btn--blue');
const body = document.querySelector('body');
let newText = document.querySelector('.p1')


const toggleColour = function (colour) {
  body.classList.toggle(colour);
  
};

redColour.addEventListener('click', function () {
  body.classList.remove('blue');
  toggleColour('red');
  newText.textContent =
    'Congratulations 🥳🥳🥳! You toggled the red colour.';
});

blueColour.addEventListener('click', function () {
  body.classList.remove('red');
  toggleColour('blue');
  newText.textContent =
  'Congratulations 🎉🎉🎉! You toggled the blue colour.';
});












// function btnClick() {
//     alert('You have clicked the button, thanks')
//   }
  
//   function myFunction() {
//     var txt;
//     var r = confirm("Press a button!");
//     if (r == true) {
//       txt = "You pressed OK!";
//     } else {
//       txt = "You pressed Cancel!";
//     }
//     document.getElementById("demo").innerHTML = txt;
//   }
  // newText.textContent = message;


// let newMessage = 'Congratulations 🎉🎉🎉! You did the red colour.'
//document.getElementById(`h1`).textContent =
    // 'Congratulations 🎉🎉🎉! You did the blue colour.';

    // document.getElementById(`h1`).textContent =
  // 'Congratulations 🎉🎉🎉! You did the blue colour.';

  // let newText = 'hello'


// const switchToRed = function () {
//   body.classList.toggle('red');
  
// };

// const switchToBlue = function () {
//   body.classList.toggle('blue');
// };

 // document.querySelector('#h1').textContent =
	// 			'Jackpot🏆 '
  // document.querySelector('#h1').textContent =
	// 			'Jackpot🏆 '