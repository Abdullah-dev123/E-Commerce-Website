const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


const buttons = document.querySelectorAll('.btns button');
        const products = document.querySelectorAll('.gallery .content');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const brand = button.id.replace('btn_', '') || 'all';

                products.forEach(product => {
                    const productBrand = product.getAttribute('data-brand');

                    if (brand === 'all' || productBrand === brand) {
                        product.classList.remove('hidden');
                    } else {
                        product.classList.add('hidden');
                    }
                });
            });
        });

        document.getElementById('btn_all').click();
