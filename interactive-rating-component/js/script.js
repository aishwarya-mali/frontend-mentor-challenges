const ratings = document.querySelectorAll(".ratings");
const submitBtn = document.getElementById('submit');
const ratingContainerEl = document.querySelector('.rating-container')
const thanksContainerEl = document.querySelector('.thanks-container')
const selectedRatingEl = document.querySelector('.selected-rating') 
let rating;

function handleRatingClick(e) {
  if(e.target.classList.contains('ratings')) return;
  const selectedRating = e.target;
  const previousRating = document.querySelector(".circular-bg.active");

  if (previousRating) {
    previousRating.classList.remove("active");
  }

  selectedRating.classList.add("active");
  rating = selectedRating.dataset.rating 
}

function handleSubmit(e){
  if(!rating) return;
  ratingContainerEl.classList.add('d-none')
  thanksContainerEl.classList.remove('d-none')
  selectedRatingEl.innerHTML = `You selected ${rating} out of 5`
}

ratings.forEach((rating) => rating.addEventListener("click", handleRatingClick));
submitBtn.addEventListener('click', handleSubmit)
