// Function to fade in an element
function fadeIn(element) {
    element.style.opacity = '1';
  }
  
  // Function to slide in an element from the left
  function slideInLeft(element) {
    element.style.left = '0';
  }
  
  // Function to slide in an element from the right
  function slideInRight(element) {
    element.style.right = '0';
  }
  
  // Function to fade out an element
  function fadeOut(element) {
    element.style.opacity = '0';
  }
  
  // Function to replay the animation
  function replayAnimation() {
    // Reset all element positions and opacity
    const femaleCharacter = document.querySelector('.female-character');
    const headline1 = document.querySelector('.headline1');
    const headline2 = document.querySelector('.headline2');
    const subheadline = document.querySelector('.subheadline');
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    const logo = document.querySelector('.logo');
    const replayBtn = document.querySelector('.replay-btn');
  
    fadeIn(femaleCharacter);
    slideInLeft(headline1);
    fadeOut(femaleCharacter)
    slideInRight(headline2);
    fadeIn(subheadline);
    fadeIn(learnMoreBtn);
    slideInRight(logo);
    fadeIn(replayBtn);
  
    // Remove replay button click event listener to prevent multiple replays
    replayBtn.removeEventListener('click', replayAnimation);
  }
  
  // Function to start the animation
  function startAnimation() {
    const femaleCharacter = document.querySelector('.female-character');
    const headline1 = document.querySelector('.headline1');
    const headline2 = document.querySelector('.headline2');
    const subheadline = document.querySelector('.subheadline');
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    const logo = document.querySelector('.logo');
    const replayBtn = document.querySelector('.replay-btn');
  
    fadeIn(femaleCharacter);
  
    setTimeout(function() {
      slideInLeft(headline1);
    }, 1000);
  
    setTimeout(function() {
      fadeOut(femaleCharacter);
      slideInLeft(headline1);
    }, 3000);
  
    setTimeout(function() {
      slideInRight(headline2);
    }, 3500);
  
    setTimeout(function() {
      fadeIn(subheadline);
    }, 4500);
  
    setTimeout(function() {
      fadeIn(learnMoreBtn);
    }, 5000);
  
    setTimeout(function() {
      slideInRight(logo);
    }, 5500);
  
    setTimeout(function() {
      fadeIn(replayBtn);
      replayBtn.addEventListener('click', replayAnimation);
    }, 6000);
  }
  
  // Call startAnimation function when the page loads
  window.addEventListener('load', startAnimation);
  