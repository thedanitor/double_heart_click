const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", e => {
  // if clickTime is 0 set to current time
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    // if clickTime is not 0
  } else {
    // if difference between current time and clickTime is less than 800ms
    if (new Date().getTime() - clickTime < 800) {
      // call createHeart with e param, set clickTime to 0
      createHeart(e);
      clickTime = 0;
      // otherwise set clickTime to current time
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
    // create i tag
    const heart = document.createElement("i");
    // add class fas fa-heart (to get fontAwesome heart icon)
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    // coordinates for click in viewport
    const x = e.clientX;
    const y = e.clientY;
    // left and top edge coordinates of loveMe
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
    // coordinates inside loveMe
    const xInside = x - leftOffset
    const yInside = y - topOffset
    // position heart according to click
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
    // append heart to loveMe
    loveMe.appendChild(heart);
    // add 1 to times span
    times.innerHTML = ++timesClicked;
    // remove heart after 1 second
    setTimeout(() => heart.remove, 1000);
}