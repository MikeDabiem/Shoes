document.addEventListener('DOMContentLoaded', () => {
    const pricingFilter = document.querySelector('.catalog__filter-pricing');
    const rangeMin = document.querySelector('#pricing__range-min');
    const rangeMax = document.querySelector('#pricing__range-max');
    const priceMin = document.querySelector('.pricing__min');
    const priceMax = document.querySelector('.pricing__max');
    pricingFilter.addEventListener('input', (e) => {
        if (e.target) {
            if (e.target.classList.contains('pricing__min')) {
                rangeMin.value = priceMin.value.slice(1, priceMin.value.length);
            }
            if (e.target.classList.contains('pricing__max')) {
                rangeMax.value = priceMax.value.slice(1, priceMax.value.length);
            }
        }
        priceMin.value = '$' + rangeMin.value;
        priceMax.value = '$' + rangeMax.value;
        // rangeMax.style.width = 95 - rangeMin.value + '%';
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

    const colorOption = document.querySelectorAll('.color__option');
    colorOption.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
        })
    });

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