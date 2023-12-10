const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
      this.className += " active-btn";
    });
  }
  allSections.addEventListener('click',(e)=>{
    const id=e.target.dataset.id;
    if(id){
        // remove selected from the btns
        secBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active');   
        // hide other section
        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element=document.getElementById(id);
        element.classList.add('active')
    }
  })
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form-container");
  const response = document.querySelector(".response");

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      response.innerText = "Message sent successfully!";
      response.style.color = "green"; 
      // Clear the form fields after submission
      form.reset();
  });
});
PageTransition();
const textContainer = document.getElementById("text-container");

function restartAnimation() {
    textContainer.style.animation = "none";
    void textContainer.offsetWidth; // Trigger a reflow
    textContainer.style.animation = "typing 2s steps(1, end), blink-caret 0.75s step-end infinite";
}

                                //  tOGGLE THEME
  const theme=document.querySelector('.theme-btn');
  theme.addEventListener('click',()=>{
    let element=document.body;
    element.classList.toggle('light-mode')
  })

textContainer.addEventListener("animationiteration", restartAnimation);
