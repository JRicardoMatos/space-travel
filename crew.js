const crewName = document.querySelector('.crew-name')
const crewPosition = document.querySelector('.crew-position')
const crewDescription = document.querySelector('.crew-description')
const crewPhoto = document.querySelector('.crew-photo')
const crewOption = document.querySelectorAll('.crew-option')

console.log(crewName.textContent)
crewOption.forEach(option => {
    option.addEventListener('click', ()=>{
        crewName.textContent = option.id
        fetch('/data.json')
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                data.crew.forEach(person => {
                    if(person.name === option.id){
                        console.log(option.id)
                        crewPosition.textContent = person.role
                        crewPhoto.src = person.images.png
                        crewDescription.textContent = person.bio
                    }
                })
            })

        crewOption.forEach(option => {
            if(option.id === crewName.textContent){
                option.classList.add('selected')
            } else {
                option.classList.remove('selected')
            }
        })
    })
})


