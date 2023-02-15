const starContainer = document.getElementById("star-container");
const num = document.querySelector(".num");
console.log(starContainer);
//const star1 = document.querySelector(".star-1");
//console.log(star1);
starContainer.addEventListener("mouseover", function (e) {
  //star1.classList.toggle("add-color");
  e.target.classList.toggle("add-color");
  let temp,
    j = 1;
  const lim = e.target.classList[2];
  if (lim != undefined) {
    num.innerHTML = lim[5];
  }
  //console.log(lim[5]);
  //   while (j <= lim[5]) {
  //     e.target.classList.toggle("add-color");
  //     j++;
  //   }
});
