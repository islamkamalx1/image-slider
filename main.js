let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
let slideCount = sliderImages.length;
let currentIndex = 1;
let slideNumberElement = document.getElementById('slide-number');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let ulContainer = document.getElementById('indicators');

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

let paginationElement = document.createElement('ul')
paginationElement.setAttribute('id','pagination-ul');

for (i = 1; i <= slideCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index',i);
    let itemText = document.createTextNode(i);
    paginationItem.appendChild(itemText);
    paginationElement.appendChild(paginationItem);
}
ulContainer.appendChild(paginationElement);

let paginationUl = document.getElementById('pagination-ul');
let paginationsArr = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationsArr.length; i++) {
    paginationsArr[i].addEventListener('click',()=>{
        currentIndex = parseInt(paginationsArr[i].dataset.index);
        theChecker();
    });
}

theChecker()

function nextSlide() {
    if (nextBtn.classList.contains('disabled')) {
        return false;
    } else {
        currentIndex++;
        theChecker();
    }
}

function prevSlide() {
    if (prevBtn.classList.contains('disabled')) {
        return false;
    } else {
        currentIndex--;
        theChecker();
    }
}

function theChecker() {
    slideNumberElement.textContent = `Slide #${currentIndex} From ${slideCount}`;
    removeAllActive();
    sliderImages[currentIndex - 1].classList.add('active');
    paginationUl.children[currentIndex - 1].classList.add('active')
}

function removeAllActive() {
    sliderImages.forEach((image) => {
        image.classList.remove('active');
    });
    paginationsArr.forEach((bullet) => {
        bullet.classList.remove('active');
    });
    if (currentIndex === 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    if (currentIndex === slideCount) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}