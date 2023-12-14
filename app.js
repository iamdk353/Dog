import { executeEvent, getname, options } from "./functions.js";

const next = document.querySelector("#next");
const url = `https://dog.ceo/api/breeds/image/random`;
const photo = document.querySelector("#photo");
const extend = document.querySelector("#extend");
const like = document.querySelector("#like");
const viewIcon = document.querySelector("#ViewLikes");
let imgUrl;
let currentBreed;
let fav = [];
let realoptions = [];
const view = document.querySelector("#view");
let likeHeight;
let likeWidth;
const likeGrid = document.querySelector("#likes-grid");
const body = document.getElementsByTagName("body")[0];
const likesPic = document.querySelector("#likePics");
const notFound = document.querySelector("#notFound");
const imgGrid = document.querySelector("#imgGrid");
const likesGrid = document.querySelector("#likesGrid");
const wrong = document.querySelector("#wrong");
const lastGrid = document.querySelector("#lastGrid");
const listAns = document.querySelectorAll(".list-js");
let Arr = [];
let score = 0;
let quiz = document.querySelector("#Quiz");
let quizDom = document.querySelector("#quizMode");
let liDom = document.querySelectorAll("#options");
let hint = document.querySelector("#hint");
let realLi;
let scoreDom = document.querySelector("#scoreHolder");
let Total = 1;
const Bar = document.querySelector("#Bar");
liDom.forEach((i) => {
  i.addEventListener("click", () => {
    checkAns(i.innerHTML, i);
  });
});
executeEvent(wrong, "click", displayfav);
next.addEventListener("click", () => {
  getDog();
});
executeEvent(viewIcon, "click", displayfav);
executeEvent(like, "click", animateLike);
executeEvent(quiz, "click", displayquiz);

document.addEventListener("DOMContentLoaded", function () {
  getDog();
});
function displayfav() {
  if (likesGrid.style.display == "none") {
    likesGrid.style.width = "100vw";
    likesGrid.style.display = "grid";
  } else {
    likesGrid.style.width = "0vh";
    likesGrid.style.display = "none";
  }
  renderLikes();
}
function displayquiz() {
  if (quizDom.style.display === "none") quizDom.style.display = "grid";
  else quizDom.style.display = "none";
}
window.addEventListener("keypress", (event) => {
  if (event.key.length < 2) {
    if (event.key === "n" || event.key === "N") getDog();
    else if (event.key === "e" || event.key === "E") extendImg();
    else if (event.key === "l" || event.key === "L") animateLike();
    else if (event.key === "v" || event.key === "V") displayfav();
    else if (event.key === "q" || event.key === "Q") displayquiz();
  }
});

function animateLike() {
  if (like.style.fill === "white") {
    like.style.fill = "#ff4d6c";
    addTofav();
  } else {
    like.style.fill = "white";
    removeFromFav();
  }
}
async function getDog() {
  addLoading();
  const fetched = await fetch(url);
  const data = await fetched.json();
  imgUrl = data.message;
  currentBreed = getname(data.message);
  realoptions = getOptions(options, currentBreed);
  displayImg(photo, imgUrl);
  updateOptions();
  like.style.fill = "white";
  Total++;
}
function addTofav() {
  fav.push(imgUrl);
}
function removeFromFav() {
  fav.pop();
}

function displayImg(ele, value) {
  ele.innerHTML = `<img src="${value}" class="w-full h-full object-cover"     id="pic" alt="FAILED TO LOAD IMAGE"/> `;
  const pic = document.querySelector("#pic");
  extend.addEventListener("click", extendImg);
}
function extendImg() {
  if (pic.style.objectFit === "cover") pic.style.objectFit = "contain";
  else pic.style.objectFit = "cover";
}
// setInterval(getDog, 3000);
function addLoading() {
  let svg = `<svg viewBox="0 0 691 756" style="width:58vh;overflow:hidden;">
  
  <circle cx="179.10794" cy="181.97066" r="143.89207" fill="#6f1413" />
  <path
  d="M394.07971,55.60182L116.93066,208.26465c-32.01562,41.04785,576.32227,43.58545,571.30177,.15088L419.48215,55.7528c-7.64948-4.34526-17.67978-4.40488-25.40244-.15098Z"
  fill="#ff5459" />
  <path
  d="M394.07971,55.60182L116.93066,208.26465c-32.01562,41.04785,576.32227,43.58545,571.30177,.15088L419.48215,55.7528c-7.64948-4.34526-17.67978-4.40488-25.40244-.15098Z"
  isolation="isolate" opacity=".2" />
  <path
  d="M687.08313,756.35742l-70.49878-1.50256H133.16432L0,751.84973c441.47836-104.33716,305.73724-95.35333,687.08313,4.50769Z"
  fill="#f2f2f2" isolation="isolate" opacity=".8" />
  <path
  d="M622.1795,751.84973l-5.59515,3.00513H133.16432c330.45421-68.21252,132.33598-62.20673,489.01518-3.00513Z"
  fill="#e6e6e6" />
  <path
  d="M388.59668,42.85742h20.80664l-7.0166-39.54785c-.43359-2.44336-2.09473-3.30957-3.38672-3.30957s-2.95312,.86621-3.38672,3.30957l-7.0166,39.54785Z"
  fill="#3f3d56" />
  <rect x="386.62415" y="173.34387" width="22.94006" height="559.51398" fill="#3f3d56" />
  <path
  d="M398.15976,260.68814c-9.78711,0-18.9874-3.78983-25.94308-10.69524l-57.89658-57.48132,4.72964-4.7646,57.89658,57.48132c5.75687,5.71535,13.3562,8.8353,21.50742,8.74458,8.11185-.07651,15.68933-3.32539,21.33804-9.14783l55.32413-57.03328,4.81924,4.675-55.32413,57.03328c-6.90759,7.1207-16.17453,11.09302-26.0939,11.18701-.11911,.0011-.23932,.0011-.35736,.0011v-.00003Z"
  fill="#3f3d56" />
  <path
  d="M406.18164,216.80469c-28.48828,0-57.20117-.09766-85.07031-.29492-59.0459-.41992-109.45801-1.24902-145.78516-2.39941-61.91895-1.95996-62.57812-4.1875-62.86035-5.1377-.06445-.21973-.08691-.64648,.49609-1.03027L389.35059,26.18359c6.64551-4.38184,15.19824-4.32227,21.78613,.15625l279.43066,181.75196c.58301,.39551,.55371,.82324,.48535,1.04297-.34863,1.11719-1.40723,4.5166-124.09766,6.51367-46.68066,.75977-103.25586,1.15625-160.77344,1.15625Z"
  fill="#ff5459" />
        <g>
        <path
        d="M459.39432,486.49445l-35.02914,.03818c-3.92194,8.71719,1.43729,18.91238,8.29044,25.57608s15.44553,11.77582,20.50586,19.88531c11.22882,17.99493,.64725,41.65912,4.35623,62.54327,4.99432,28.12152,34.47626,45.81927,43.45404,72.93317,5.07867,15.33826,2.77008,32.94324-6.09158,46.45343-1.63593,2.49408-3.52509,4.95624-4.09729,7.88361-.77814,3.98077,1.31693,8.35223,4.90726,10.23944s8.37903,1.13397,11.21671-1.76422c-2.7713,3.14917-1.86273,8.46564,1.24811,11.27991s7.74503,3.41382,11.84946,2.54712c13.30072-2.80859,19.99622-18.17297,20.53418-31.75641,.53796-13.58337-2.87061-27.34625-.21094-40.67755,1.69635,19.13263,23.34375,31.28271,25.0401,50.41528,.31439,3.54547-19.2796,14.21002-17.4563,17.26697,4.60956,7.72803,15.59546,7.75446,24.54602,6.82843,15.40881-1.59412,32.52118-4.07745,42.18652-16.18335,6.51184-8.15613,8.19916-19.13361,8.41345-29.56818,.55939-27.24182-7.55603-54.5968-22.88104-77.12622-20.39648-29.98505-52.82098-51.23627-68.83252-83.77466-5.44177-11.05872-8.77228-23.05023-14.06677-34.18024-5.29456-11.12997-13.08334-21.77951-24.35104-26.77426-11.26767-4.99475-26.43762-2.53131-32.93991,7.93906"
        fill="#3f3d56" />
        <path
        d="M568.01141,725.8775c-.69751,0-1.38086-.14893-2.02368-.44873-.50073-.23291-.71729-.82812-.48413-1.32861s.82739-.71826,1.32886-.48389c1.10327,.51318,2.16553,.17676,2.86206-.19727,1.43018-.7666,2.55054-2.3374,2.78833-3.90869,.45972-3.03564-1.06177-6.1377-2.40405-8.87451-3.91455-7.979-7.78491-16.5249-8.36597-25.55518-.65503-10.18213,3.5481-19.6665,10.70825-24.1626,5.32251-3.34229,12.35913-4.21631,19.81396-2.46436,6.38599,1.50195,12.27002,4.65186,18.23633,8.02295,.48071,.27148,.65039,.88184,.37866,1.3623-.27173,.48145-.88135,.65088-1.36255,.37891-6.05835-3.42285-11.57251-6.37354-17.71045-7.81689-6.92993-1.62988-13.42676-.84424-18.29248,2.21045-6.54712,4.11133-10.38452,12.88037-9.77563,22.34082,.55737,8.66455,4.33936,17.00391,8.16528,24.80273,1.39868,2.85156,3.1394,6.40039,2.58618,10.05469-.33252,2.19727-1.83203,4.30566-3.82056,5.37207-.86328,.46289-1.75659,.6958-2.62842,.6958h0Z"
        fill="#2f2e41" />
        <path
            d="M509.73431,503.89847c5.14105,10.20047,2.42822,23.74826-6.24411,31.18265-1.86234,1.5965-3.95874,2.93335-5.62402,4.73444s-2.88739,4.2406-2.46744,6.65735c-5.6814-5.63605-11.47427-11.42664-14.91052-18.65399-3.43628-7.22742-4.10703-16.30032,.36505-22.93683,2.13351-3.16614,5.24329-5.54001,7.66452-8.49194,2.42126-2.95193,4.16815-6.97137,2.8587-10.55768"
            fill="#2f2e41" />
            <path
            d="M611.90485,699.8111c-2.71692,8.30768,1.75659,17.86768,9.09601,22.61432s16.82422,5.23834,25.29694,3.09082c16.38403-4.15283,29.84033-18.18103,33.30798-34.72363,1.44226-6.88043,1.34088-14.25366,4.60608-20.47937,2.05206-3.91266,5.43933-7.44806,5.53717-11.86511,.07953-3.5896-2.25031-6.9975-5.4292-8.66675s-7.05054-1.72833-10.47241-.64087c-8.15625,2.59198-13.16254,10.85193-15.75739,19.0072-2.59491,8.15533-3.56287,16.87524-7.33472,24.55737-3.77185,7.68219-11.56812,14.39014-20.04565,13.21808-7.33112-1.01355-13.53638-7.62347-20.88232-6.72345"
            fill="#3f3d56" />
            </g>
            <g>
            <path id="uuid-54f431d9-8f52-4369-9c0b-5619dfe5d050-179"
            d="M202.23212,596.14337c-9.91676,1.51996-17.17084,7.86884-16.20245,14.17975,.96838,6.31097,9.79149,10.19305,19.71159,8.6712,3.97101-.55359,7.75172-2.05005,11.02579-4.36426l71.73747-10.80792,2.70352-24.78223-77.14529,17.9635c-3.81828-1.22742-7.87498-1.52234-11.83057-.86005h-.00006Z"
            fill="#ffb6b6" />
            <polygon
            points="382.94525 544.47235 366.68433 578.97766 284.93851 606.49622 284.93851 606.49622 288.92178 578.45148 288.92178 578.45148 364.35733 542.80377 382.94525 544.47235"
            fill="#e6e6e6" />
            <polygon
            points="232.17526 675.48987 217.57631 712.41669 198.68349 699.53522 209.8474 660.89087 232.17526 675.48987"
            fill="#ffb6b6" />
            <polygon
            points="171.20306 661.74963 132.5587 698.67645 148.01645 714.99298 187.51958 684.07745 171.20306 661.74963"
            fill="#ffb6b6" />
          <polygon
          points="390.18777 541.5227 389.75839 538.51703 379.8826 519.19489 347.2496 527.78247 353.26093 554.40417 390.18777 541.5227"
            fill="#ffb6b6" />
          <path
            d="M376.44754,670.33728l1.00357,12.89838s4.14899,54.08521-29.3428,58.37909-48.09076,8.58759-67.84232-24.90411l-30.9155-54.96088-18.05769,21.48596-24.0217-18.90973s17.17528-66.98352,30.91548-69.55981c1.71751-.32202,3.43504-.48309,5.12575-.51825,11.37514-.237,22.09795,5.3269,28.90395,14.4444l38.96524,52.19867,14.16959-6.44073,51.09644,15.88715v-.00012Z"
            fill="#2f2e41" />
            <path
            d="M190.95462,710.69916l8.67735-12.80438,19.91531,9.45471s6.61659,23.1012-1.11227,25.67755-29.19798-.85876-29.19798-.85876c0,0-39.50311,8.58759-40.36188,.85876s18.03406-9.44641,18.03406-9.44641l24.04538-12.88147,.00005-.00006-.00002,.00006Z"
            fill="#ffb6b6" />
            <path
            d="M275.11343,700.39398l-59.68408-37.60638-30.48611,27.30127-20.61032-24.04541s37.7856-55.81964,48.94951-58.39594c11.16393-2.57629,29.19798-4.29382,29.19798-4.29382l54.96088,50.66705-22.32782,46.37323v-.00006l-.00003,.00006Z"
            fill="#2f2e41" />
            <path
            d="M136.7197,695.38025l12.62109,18.00421-.49403,5.55408s-5.12416,22.31769-17.14685,14.76801-12.88146-9.26721-12.88146-9.26721c0,0-34.35054,7.72888-37.7856-6.01135s6.01136-11.16394,6.01136-11.16394l8.57749,5.15259,33.43514-11.17651,7.66286-5.8598v-.00006Z"
            fill="#ffb6b6" />
            <circle cx="357.55478" cy="509.74847" r="27.48043" fill="#ffb6b6" />
            <path
            d="M351.11404,548.82227l39.50314-12.02271s15.45776,36.06812,12.88147,52.38458c-2.57629,16.31653-26.04749,94.05151-26.04749,94.05151l-52.10001-28.78552s-.85876-17.17529-3.43506-24.90411-10.73453-31.34485,7.29947-51.09644c18.03403-19.75159,21.8985-29.62738,21.8985-29.62738l-.00003,.00006Z"
            fill="#e6e6e6" />
            <g>
            <path id="uuid-b26c39a4-6f50-479a-8ec8-74191e458edf-180"
            d="M264.17029,729.14673c-6.42892,7.70203-7.66602,17.26233-2.7637,21.35297,4.90228,4.09058,14.08621,1.16229,20.51639-6.54333,2.61081-3.04285,4.45496-6.66669,5.37811-10.56836l60.85678-68.23883-18.85889-10.19397-55.68997,67.00739c-3.67487,1.60657-6.91144,4.07001-9.43875,7.18427l.00003-.00006v-.00006Z"
            fill="#ffb6b6" />
            <polygon
            points="381.4147 566.14783 390.75183 603.13232 345.05267 676.28448 349.17725 675.34314 324.20197 656.99396 330.32925 652.08545 365.99234 576.65717 381.4147 566.14783"
            fill="#e6e6e6" />
            </g>
            <path
            d="M332.22122,505.0253c7.0477-.01685,7.44781,.03006,8.58762,0,8.7413-.2305,11.02713-3.66956,15.45776-3.43506,7.90793,.41855-2.52933,40.06638-6.87012,58.3959-4.25714,17.9765,10.1301,34.0849,11.16391,35.20929,14.60327,15.88196,40.25424,18.78607,44.6557,12.02271,3.56262-5.4743-9.06335-13.79797-6.01135-25.76288,2.98343-11.69617,16.75949-10.45068,20.61032-21.46906,4.03281-11.53912-9.51959-17.35895-18.03403-45.51447-4.88986-16.16986-4.02484-19.18277-8.58762-29.19794-12.19629-26.77005-71.97723-15.37207-65.26602,9.44641,1.29822,4.80084-2.15665,10.32059,4.29382,10.30515v-.00006Z"
            fill="#2f2e41" />
            </g>
            </svg>`;
  photo.innerHTML = svg;
  like.style.fill === "white";
  liDom.forEach((i, index) => {
    i.innerHTML = "Loading.....";
  });
}

function renderLikes() {
  let text = ``;
  fav.forEach((i, index) => {
    text += `<div class="bg-red-400 w-full h-lessHeight rounded-md object-fit" id="img">
      <img src="${i}" class="w-full h-full rounded-md" alt="IMAGE NOT FOUND" id="likedImg"/>
    </div>`;
  });
  lastGrid.innerHTML = text;
}

function renderPics() {
  let text = ``;
  fav.forEach((i) => {
    text += `
    <div class="w-full relative">
    
    <img src="${i}" class=" w-full h-full object-cover" id="img"> 
    </div>
    `;
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function getOptions(array, breed) {
  if (array.length < 3) {
    console.error("Array does not have enough elements.");
    return null;
  }
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  Arr = array.slice(0, 3);
  Arr.push(breed);

  shuffleArray(Arr);
  return Arr;
}

function updateOptions() {
  liDom.forEach((i, index) => {
    i.innerHTML = realoptions[index];
  });
  liDom.forEach((i) => {
    if (i.innerHTML === currentBreed) {
      realLi = i;
    }
  });
}
function checkAns(val, ele) {
  if (val === currentBreed) {
    correctAns(ele);
    setTimeout(getDog, 1000);
    score++;
    updateScore(score);
  } else {
    correctAns(realLi);
    score--;
    updateScore(score);
    setTimeout(() => {
      getDog();
    }, 1000);
  }
}
hint.addEventListener("click", () => {
  correctAns(realLi);
  score -= 0.5;
  updateScore(score);
});
function correctAns(ele) {
  ele.style.backgroundColor = "#43c343";
  setTimeout(function () {
    ele.style.backgroundColor = "#EF4444";
  }, 350);
}
function updateScore(num) {
  scoreDom.innerHTML = num;
  updateBar(Math.floor(Total * num) / 10);
}
function updateBar(num) {
  Bar.style.width = `${num}%`;
}
