function openModal(modalSelector, openSelector, modalTimer, closeClickOverlay = true) {
    const modal = document.querySelector(modalSelector);
    const btn = document.querySelectorAll(openSelector);
    // const windows = document.querySelectorAll('[data-modal]');
    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            clearTimeout(modalTimer);
            if(item.getAttribute('data-check') === 'true') {
                let width = document.querySelector('#width');
                let height = document.querySelector('#height');
                if(width.value && height.value) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                } 
                    if(!width.value) {
                        width.style.border = '1px solid red';
                    } else {
                        width.style.border = '1px solid #ccc';
                    }
                    if(!height.value) {
                        height.style.border = '1px solid red';
                    } else {
                        height.style.border = '1px solid #ccc';
                    }
            } else if(item.getAttribute('data-checkbox') === 'true') {
                let check = true;
                document.querySelectorAll('input[type=checkbox]').forEach(item => {
                    if(item.checked) {
                        console.log(item.value);
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                        check = false; 
                    } 
                });
                if(check) {
                    document.querySelectorAll('.checkbox-custom').forEach(item => {
                        item.style.border = '1px solid red';
                    });
                    
                } else {
                    document.querySelectorAll('.checkbox-custom').forEach(item => {
                        item.style.border = '2px solid #ccc';
                    });
                }
            }
             else {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            
        });
    });
    modal.addEventListener('click', (e) => {
        if((e.target.getAttribute('data-close') || 
        (e.target.classList.contains(modalSelector.replace(/\./, ''))) && closeClickOverlay)) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            // windows.forEach(item => {
            //     item.style.display = 'none';
            // });
        }
    });
    
}

export default openModal; 