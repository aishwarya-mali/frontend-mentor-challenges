const birthDateInput = document.getElementById('dateInput')
const birthMonthInput = document.getElementById('monthInput')
const birthYearInput = document.getElementById('yearInput')

const dayEl = document.getElementById('dayEl')
const monthEl = document.getElementById('monthEl')
const yearEl = document.getElementById('yearEl')

const lblDate = document.getElementById('lblDate')
const lblMonth = document.getElementById('lblMonth')
const lblYear = document.getElementById('lblYear')

const dateDiv = document.querySelector('.dateDiv')
const submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    resetValidationErrors()

    const birthDate = Number(birthDateInput.value)
    const birthMonth = Number(birthMonthInput.value)
    const birthYear = Number(birthYearInput.value)

    if (isValid(birthDate, birthMonth, birthYear)) {
        showCalculatedAge(birthYear, birthMonth, birthDate)
    }
})

function resetValidationErrors() {
    const errorElements = document.querySelectorAll('.failedMsg');
    errorElements.forEach(element => {
        element.remove();
    });

    dateDiv.classList.remove('error');
}

function isValid(date, month, year) {
    if (!isRequired(date, month, year)) {
        return false;
    }

    let validator = true;
    const totalDays = getDaysInMonth(year, month)

    if (!(date > 0 && date <= totalDays)) {
        lblDate.insertAdjacentHTML('beforeend', getValidationElement('Date'))
        validator = false
    }

    if (!(month > 0 && month <= 12)) {
        lblMonth.insertAdjacentHTML('beforeend', getValidationElement('Month'))
        validator = false
    }

    if (!(isValidYear(year))) {
        lblYear.insertAdjacentHTML('beforeend', getValidationElement('Year'))
        validator = false
    }

    if(!validator){
        dateDiv.classList.add('error')
    }

    return validator;
}

function isRequired(date, month, year) {
    const requiredElement = '<span class="failedMsg">This field is required</span>';
    let validator = true;
    if (!date || !month || !year) {
        dateDiv.classList.add('error')
    }
    if (!date) {
        lblDate.insertAdjacentHTML('beforeend', requiredElement)
        validator = false
    }
    if (!month) {
        lblMonth.insertAdjacentHTML('beforeend', requiredElement)
        validator = false
    }
    if (!year) {
        lblYear.insertAdjacentHTML('beforeend', requiredElement)
        validator = false
    }
    return validator
}

function getDaysInMonth(birthYear, birthMonth) {
    return new Date(birthYear, birthMonth, 0).getDate()
}

function isValidYear(year) {
    if (isNaN(year) || year.toString().length !== 4) {
        return false;
    }

    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
        return false;
    }

    return true;
}

function getValidationElement(element) {
    return `<span class="failedMsg">Enter Valid ${element}</span>`
}

function showCalculatedAge(birthYear, birthMonth, birthDate) {
    const now = new Date()
    const currDate = now.getDate()
    const currMonth = now.getMonth() + 1
    const currYear = now.getFullYear()

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
        const daysInMonth = getDaysInMonth(birthYear, birthMonth)
        dayDiff = (daysInMonth + currDate) - birthDate

        if (monthDiff < 0) {
            yearDiff--
            monthDiff = 11
        }
    }
    yearEl.innerHTML = yearDiff
    monthEl.innerHTML = monthDiff
    dayEl.innerHTML = dayDiff
}