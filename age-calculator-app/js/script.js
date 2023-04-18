const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
const yearAge = document.getElementById('yearAge')
const monthAge = document.getElementById('monthAge')
const dayAge = document.getElementById('dayAge')
const submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let birthDate = Number(dayInput.value)
    let birthMonth = Number(monthInput.value)
    let birthYear = Number(yearInput.value)

    const now = new Date()
    let currDate = now.getDate()
    let currMonth = now.getMonth() + 1
    let currYear = now.getFullYear()

    let yearDiff = currYear - birthYear

    let monthDiff
    if (currMonth >= birthMonth) {
        monthDiff = currMonth - birthMonth
    } else {
        yearDiff--
        monthDiff = (12 + currMonth) - birthMonth
    }

    let dayDiff 
    if (currDate >= birthDate) {
        dayDiff = currDate - birthDate
    } else {
        monthDiff--
        let daysInMonth = new Date(birthYear, birthMonth, 0).getDate()
        dayDiff = (daysInMonth + currDate) - birthDate


        if(monthDiff < 0){
            yearDiff-- 
            monthDiff = 11
        }
    }

    console.log(yearDiff  + " Years, " + monthDiff + " Months, " + dayDiff + " Days.")
})