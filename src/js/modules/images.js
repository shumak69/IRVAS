function images() {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');
    
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path); 
            document.body.style.overflow = 'hidden';
        }

        if(e.target && e.target.classList.contains('popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}   

export default images;