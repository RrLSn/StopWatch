// selector

const stopWatch = document.querySelector('#stopWatch')
const time = document.querySelector('.time')
const Start = document.querySelector('.start')
const Reset = document.querySelector('.reset')
const Stop = document.querySelector('.stop')
const body =  document.querySelector('body')

let interval 
let seconds = 0
let minutes = 0
let hours = 0

Start.addEventListener(
    'click',
    () => {
        interval = setInterval(() => {
            seconds++
            if(seconds === 60){
                minutes++
                seconds = 0
            }
            if(minutes === 60){
                hours++
                minutes = 0
            }
            time.textContent = `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
        }, 1000)
    }
    )

    Reset.addEventListener(
        'click',
        () => {
            clearInterval(interval)
            time.textContent = '00:00:00'
            seconds = 0
            minutes = 0
            hours = 0
        }
    )

    Stop.addEventListener(
        'click',
        () => {
            clearInterval(interval)
            time.textContent = '00:00:00'
            seconds = 0
            minutes = 0
            hours = 0
        }
    )