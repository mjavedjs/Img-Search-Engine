const searchFrom = document.querySelector("#search-item");
const userSearch  = document.querySelector("#userSearch");
const serachResult = document.querySelector("#userach-result");
const showMoreBtn = document.querySelector(".button")


let keyword = '';
let page= 1;

async function searchImages() {
    keyword = userSearch.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}1&query${keyword}=office&client_id=qiBYGz2F1rjRRUnSP7nzk8Y98iARxCWnEQwEM9nQMbY  `;
    const response =   await fetch(url);
    const data = await response.json()
  console.log(data)
}
searchFrom.addEventListener('submite',(e)=>{
  e.preventDefault();
  page = 1;
   searchImages()
})