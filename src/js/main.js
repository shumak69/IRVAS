import './slider';
import openModal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
window.addEventListener('DOMContentLoaded',() => {
    let modalState = {form: 0};
    changeModalState(modalState);
    const modalTimer = setTimeout(() => {
        document.querySelector('.popup').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 60 * 1000);
    openModal('.popup_engineer', '.popup_engineer_btn', modalTimer);
    openModal('.popup', '.phone_link', modalTimer);
    openModal('.popup_calc','.glazing_price_btn', modalTimer);
    openModal('.popup_calc_profile','.popup_calc_button', modalTimer, false);
    openModal('.popup_calc_end','.popup_calc_profile_button', modalTimer, false);
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons','.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
    forms(modalState);
    
});