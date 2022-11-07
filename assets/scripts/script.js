document.addEventListener('DOMContentLoaded', () => {
    const pricingFilter = document.querySelector('.catalog__filter-pricing');
    const rangeMin = document.querySelector('#pricing__range-min');
    const rangeMax = document.querySelector('#pricing__range-max');
    const priceMin = document.querySelector('.pricing__min');
    const priceMax = document.querySelector('.pricing__max');

    function rangeMaxWidth() {
        rangeMax.style.width = `calc(${100 - (rangeMin.value / rangeMin.max * 100)}% - ${12 - (12 / 50 * (rangeMin.value / rangeMin.max * 100))}px)`;
    }
    rangeMaxWidth();
    rangeMax.min = rangeMin.value;

    pricingFilter.addEventListener('change', (e) => {
        if (priceMin.value === '$') {
            priceMin.value = '$' + 0;
        }
        if (priceMax.value === '$') {
            priceMax.value = '$' + 0;
        }

        if (e.target) {
            if (e.target.classList.contains('pricing__min')) {
                if (priceMin.value > priceMax.value) {
                    priceMin.value = '$' + (priceMax.value.slice(1) - 1);
                }
                rangeMin.value = priceMin.value.slice(1);
                rangeMax.min = rangeMin.value;
                rangeMaxWidth();
            }
            if (e.target.classList.contains('pricing__max')) {
                if (priceMax.value < priceMin.value) {
                    priceMax.value = '$' + (Number(priceMin.value.slice(1)) + 1);
                }
                rangeMax.value = priceMax.value.slice(1);
            }
        }
    });

    pricingFilter.addEventListener('input', (e) => {
        if (e.target) {
            if (e.target.classList.contains('pricing__min') && e.target.value === '' || e.target.classList.contains('pricing__max') && e.target.value === '') {
                e.target.value = '$';
            }
            if (e.target === rangeMin) {
                priceMin.value = '$' + rangeMin.value;
                priceMin.focus();
                rangeMax.min = rangeMin.value;
                priceMax.value = '$' + rangeMax.value;
                if (rangeMin.value === rangeMax.value) {
                    rangeMax.value = Number(rangeMax.value) + 1;
                }
            }
            if (e.target === rangeMax) {
                priceMax.value = '$' + rangeMax.value;
                priceMax.focus();
                if (rangeMax.value === rangeMin.value) {
                    rangeMin.value -= 1;
                    priceMin.value = '$' + rangeMin.value;
                    rangeMax.min = rangeMin.value;
                }
            }
        }
        rangeMaxWidth();
    });

    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach(item => {
        item.addEventListener('change', () => {
            if (item.checked) {
                item.previousElementSibling.classList.add('checked');
                item.classList.add('checked');
            } else {
                item.previousElementSibling.classList.remove('checked');
                item.classList.remove('checked');
            }
        });
    });

    // const colorOption = document.querySelectorAll('.color__option');
    // colorOption.forEach(item => {
    //     item.addEventListener('click', () => {
    //         item.classList.toggle('selected');
    //     })
    // });

    const sizeSection = document.querySelector('.catalog__filter-size');
    const sizeStdBtn = document.querySelectorAll('.size__standart-btn');
    sizeSection.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('size__standart-btn')) {
            sizeStdBtn.forEach(item => {
                if (item.classList.contains('selected')) {
                    item.classList.remove('selected');
                }
            });
            e.target.classList.add('selected');
        }
        if (e.target && e.target.classList.contains('size__option')) {
            e.target.classList.toggle('selected');
        }
    });

    const labelsOption = document.querySelectorAll('.labels__option');
    labelsOption.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
        });
    });

    const sortSection = document.querySelector('.sort');
    const sortSelect = document.querySelector('.sort__select');
    const sortList = document.querySelector('.sort__list');
    const sortItem = document.querySelectorAll('.sort__list-item')
    sortSection.addEventListener('click', (e) => {
        sortSelect.classList.toggle('active');
        sortList.classList.toggle('active');
        if (sortSelect.classList.contains('active')) {
            window.addEventListener('click', (e) => {
                if (!e.target.closest('.sort')) {
                    sortSelect.classList.remove('active');
                    sortList.classList.remove('active');
                }
            });
        }
        if (e.target && e.target.classList.contains('sort__list-item')) {
            sortItem.forEach(item => {
                if (item.classList.contains('selected')) {
                    item.classList.remove('selected');
                }
            });
            e.target.classList.add('selected');
            sortSelect.innerHTML = e.target.innerHTML;
        }
    });
});