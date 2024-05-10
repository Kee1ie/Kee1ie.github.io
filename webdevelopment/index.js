var counter = document.querySelector(".website-counter");
var reset = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counter.innerHTML = visitCount;

reset.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counter.innerHTML = visitCount;
});