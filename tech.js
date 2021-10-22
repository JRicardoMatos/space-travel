const techType = document.querySelector('.tech-type')
const techDescription = document.querySelector('.tech-description')
const techOptions = document.querySelectorAll('.tech-option')
const techPhoto = document.querySelector('.tech-photo')
const techPhotoDesktop = document.querySelector('.tech-photo-desktop')

techOptions.forEach(option => {
    option.addEventListener('click', ()=>{
        techType.textContent = option.id
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                data.technology.forEach(tech => {
                    if(tech.name === option.id){
                        techDescription.textContent = tech.description
                        techPhoto.src = tech.images.landscape
                        techPhotoDesktop.src = tech.images.portrait
                    }
                })
            })
        
        techOptions.forEach(option => {
            if(option.id === techType.textContent){
                option.classList.add('selected')
            } else {
                option.classList.remove('selected')
            }
        })
    })
})