const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ul = document.querySelector("ul.gallery");
console.log(ul);
const [...image] = images;
const markup = image.map(
  (imag) =>
    `<li class="list-item"><img class = "img" src="${imag.url}", alt="${imag.alt}", width="370", height="294",/></li>`
);
// ul.insertAdjacentHTML("beforeend", markup);
ul.insertAdjacentHTML("afterbegin", markup);
