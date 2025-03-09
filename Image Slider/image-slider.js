const images = [
    'https://bigcatsindia.com/wp-content/uploads/2018/06/Royal-Bengal-Tiger.jpg',
    'https://cdn.britannica.com/55/2155-050-604F5A4A/lion.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaLpMULWX_xcu0knYolLyHkdju9o00hqWzg&s',
    'https://www.nyc.gov/assets/wildlifenyc/images/content/pages/Stag_On_A_Hill.jpg',
    'https://cms.accuweather.com/wp-content/uploads/2024/11/cnn-L19jb21wb25lbnRzL2ltYWdlL2luc3RhbmNlcy9jbTNxYmxreDMwMDAzM2I2aDEzaW5menMw-L19jb21wb25lbnRzL2FydGljbGUvaW5zdGFuY2VzL2NtM3E4aHN3cjAwNG4yN25pMnp5eDRnaXk.jpg?w=632'
];

const sliderImage = document.querySelector('.slider img');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;

function updateImage() {
    sliderImage.src = images[currentIndex];
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateImage();
});

updateImage();
