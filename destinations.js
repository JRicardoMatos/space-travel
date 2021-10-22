const destinationOptions = document.querySelectorAll('.option')
const title = document.querySelector('.title')
const moonImgs = document.querySelector('.moons-img')
const description = document.querySelector('.description')
const distance = document.querySelector('.distance')
const time = document.querySelector('.time')






destinationOptions.forEach(option => {
    option.addEventListener('click', ()=>{
        title.textContent = option.textContent
        fetch('./data.json')
            .then(res => res.json())
            .then(data => { 
                data.destinations.forEach(item => {
                    if(title.textContent ===  item.name){
                        description.textContent = item.description
                        moonImgs.src = item.images.png
                        distance.textContent = item.distance
                        time.textContent = item.travel
                    } else {
                    }
                })
            })

            destinationOptions.forEach(moon => {
                if(moon.textContent === title.textContent && !moon.classList.contains('selected')){
                    moon.classList.add('selected')
                    console.log(moon.textContent)
                    console.log(title.textContent)
                } else {
                    moon.classList.remove('selected')
                }
            })
            
        })
})