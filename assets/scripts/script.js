document.addEventListener('DOMContentLoaded', () => {
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

    const sortSelect = document.querySelector('.sort');
    sortSelect.addEventListener('click', () => {
        sortSelect.classList.toggle('active');
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.sort')) {
                sortSelect.classList.remove('active');
            }
        })
    });
});