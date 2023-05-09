const shareBtn = document.querySelector('#share')
const shareIcons = document.querySelector('.share-icons')

document.addEventListener('click', function (e) {
    if (e.target === shareBtn || shareBtn.contains(e.target)) {
        shareIcons.style.visibility = 'visible'
    } else {
        shareIcons.style.visibility = 'hidden'
    }
})