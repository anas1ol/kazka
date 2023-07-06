const menuItems = document.querySelectorAll('.menu ul li a');
menuItems.forEach(function (item) {
        item.addEventListener('click', () => {
            event.preventDefault()
            const url = item.getAttribute('href')
            window.location.href = url
        })
    })
    let sliderIndex = 0;
    const slides = document.querySelectorAll('.slider img');
    const sliderInterval = setInterval(changeSlide, 3000);
    
    function changeSlide() {
        slides[sliderIndex].classList.remove('active');
        sliderIndex++;
        if (sliderIndex >= slides.length) {
            sliderIndex = 0;
        }
        slides[sliderIndex].classList.add('active');
    }