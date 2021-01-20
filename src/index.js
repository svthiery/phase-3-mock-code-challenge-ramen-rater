// write your code here
const ramenMenu = document.querySelector('#ramen-menu')
console.log(ramenMenu)

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
      ramenMenu.append(ramenImg)
   }