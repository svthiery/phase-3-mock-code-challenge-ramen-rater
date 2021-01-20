// write your code here
const ramenMenu = document.querySelector('#ramen-menu')
const detailDiv = document.querySelector('#ramen-detail')
const detailImg = document.querySelector('#ramen-detail img')
const detailName = document.querySelector('#ramen-detail h2')
const detailRes = document.querySelector('#ramen-detail h3')
const ratingForm = document.querySelector('#ramen-rating')
const rating = document.querySelector('#rating')
const comment = document.querySelector('#comment')
console.log(rating)
console.log(comment)



fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramensArray => {
        ramensArray.forEach(ramenObj => {
            newRamenImg(ramenObj)
        })
    });

const newRamenImg = ramen => {
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenImg.dataset.id = ramen.id

    ramenImg.addEventListener("click", event => {
         detailImg.src = event.target.src
         detailName.textContent = ramen.name
         detailRes.textContent = ramen.restaurant
         const ratingStr = parseInt(ramen.rating)
         console.log(ratingStr)
         rating.value = ratingStr
         
         comment.textContent = ramen.comment

    })

    ramenMenu.append(ramenImg)
}