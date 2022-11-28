let date = new Date('Dec 15 2022 12:10:00')
function counter(){
    let now = new Date()
    gap = date-now


    let days = Math.floor(gap / 1000 / 60 / 60 / 24)
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24
    let minutes = Math.floor(gap / 1000 / 60) % 60
    let seconds = Math.floor(gap / 1000) % 60

    document.getElementById('days').innerText = days
    document.getElementById('hours').innerText = hours
    document.getElementById('minutes').innerText = minutes
    document.getElementById('seconds').innerText = seconds
}


setInterval(counter, 1000)
