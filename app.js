const searchFrom = document.querySelector("#search-item");
const userSearch  = document.querySelector("#userSearch");
const serachResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector(".button")
let keyword = '';
let page= 1;

async function searchImages() {

    keyword = userSearch.value;
    
    try {
      const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=qiBYGz2F1rjRRUnSP7nzk8Y98iARxCWnEQwEM9nQMbY&per_page=16`;

      const response =   await fetch(url)
      const data = await response.json()
    console.log(data)
    if(page === 1){
      serachResult.innerHTML = ""
    }
    const  result = data.results;
    
    result.map((res)=>{
      const img = document.createElement("img"); // imag k tag 
      img.src = res.cover_photo.urls.small ; // Correct property access

    const imgLink = document.createElement("a");

    imgLink.href = res.cover_photo.links.html; // get data from api 
    imgLink.target = "_blank";
    imgLink.appendChild(img); // img inside in anker tage
    serachResult.appendChild(imgLink);
    });
  showMoreBtn.style.display = 'block'
    } catch (error) {
       console.log(error)
    }

}
userSearch.innerHTML = ""
searchFrom.addEventListener('submit',(e)=>{

  e.preventDefault();
  page = 1;
   searchImages();
})


showMoreBtn.addEventListener('click',(e)=>{
   page++
   searchImages()

})

