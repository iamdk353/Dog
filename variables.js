let next = document.querySelector("#next");
let url = `https://dog.ceo/api/breeds/image/random`;
let photo = document.querySelector("#photo");
let extend = document.querySelector("#extend");
let like = document.querySelector("#like");
let viewIcon = document.querySelector("#ViewLikes");
let view = document.querySelector("#view");
let likeGrid = document.querySelector("#likes-grid");
let body = document.getElementsByTagName("body")[0];
let likesPic = document.querySelector("#likePics");
let notFound = document.querySelector("#notFound");
let imgGrid = document.querySelector("#imgGrid");
let likesGrid = document.querySelector("#likesGrid");
let wrong = document.querySelector("#wrong");
let lastGrid = document.querySelector("#lastGrid");

let imgUrl;
let currentBreed = "";
let fav = [];
let likeHeight;
let likeWidth;
export {
  next,
  url,
  photo,
  extend,
  like,
  viewIcon,
  view,
  likeGrid,
  body,
  likesPic,
  notFound,
  imgGrid,
  likesGrid,
  wrong,
  lastGrid,
  imgUrl,
  currentBreed,
  fav,
  likeHeight,
  likeWidth,
};
