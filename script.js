const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;

  sliderDots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    if (currentSlide === 0) {
      slider.appendChild(slider.firstElementChild);
    }
    updateSlider();
  }, 5000);


  let btn = document.getElementById('btn');
  btn.addEventListener('click' , () => {

    document.getElementById('contact-form').style.display = 'block';
    document.querySelector('.left1') .style.display = 'none';
  })

  //post form data
  let form = document.getElementById("contact");
  let button = document.getElementById('btn1');
  let inputs = document.querySelectorAll('.input')
  form.addEventListener("submit", formSubmit);

  function formSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);

      fetch("https://getform.io/f/raeqxywa", {
          method: "POST",
          body: formData,
          headers: {
              "Accept": "application/json",
          },
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
      inputNone()
  }

function inputNone() {
  inputs.innerHTML = '';
}

//image changer

const imgChange=(value)=>{
  document.getElementById("image").src=value;
}


