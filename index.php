<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoes Store</title>
    <link rel="stylesheet" href="assets/styles/style.css">
</head>
<body>
    <div class="wrapper">
        <div class="catalog">
            <?php require('components/sidebar.php'); ?>
            <div class="catalog__showcase">
                <div class="sort-wrapper">
                    <button class="sort__filter-btn"><img src="assets/svg/filter-logo.svg" alt="filter">Filter</button>
                    <div class="sort">
                        <div class="sort__select">Sort by</div>
                        <ul class="sort__list">
                            <li class="sort__list-item">Price increase</li>
                            <li class="sort__list-item">Price reduction</li>
                            <li class="sort__list-item">The most popular</li>
                            <li class="sort__list-item">Biggest discount</li>
                        </ul>
                    </div>
                </div>
                <div class="showcase__items">
                    <?php $cards = [
                    ["name" => "Nike Air Force 1 Medium Blue", "image" => "assets/img/sneaker1.png", "price" => 77.98, "liked" => false],
                    ["name" => "New Balance 574 classic", "image" => "assets/img/sneaker2.png", "price" => 80.34, "liked" => false],
                    ["name" => "Nike Air Max 97", "image" => "assets/img/sneaker3.png", "price" => 120.00, "liked" => true],
                    ["name" => "Nike air JORDAN 4 RETRO THUNDER", "image" => "assets/img/sneaker4.png", "price" => 104.26, "liked" => false],
                    ["name" => "Adidas Gazelle Burgundy", "image" => "assets/img/sneaker5.png", "price" => 80.90, "liked" => false],
                    ["name" => "Adidas Yeezy Boost 700 Wave Runner", "image" => "assets/img/sneaker6.png", "price" => 176.00, "liked" => false],
                    ["name" => "Nike Air Huarache red", "image" => "assets/img/sneaker7.png", "price" => 108.00, "liked" => false],
                    ["name" => "Reebok Classic Leather", "image" => "assets/img/sneaker8.png", "price" => 125.70, "liked" => false],
                    ["name" => "Nike LeBron 14 CAVS PE ALTERNATE", "image" => "assets/img/sneaker9.png", "price" => 140.16, "liked" => false],
                    ["name" => "ADIDAS NMD_XR1 PRIMEKNIT BB2376", "image" => "assets/img/sneaker10.png", "price" => 110.26, "liked" => false],
                    ["name" => "Jordan 1 Retro Black Royal Blue", "image" => "assets/img/sneaker11.png", "price" => 170.50, "liked" => false],
                    ["name" => "Nike Zoom KD 9 Mic Drop", "image" => "assets/img/sneaker12.png", "price" => 90.35, "liked" => false]
                    ];
                    foreach($cards as $card) {
                        require "components/single-card.php";
                    } ?>
                </div>
                <div class="catalog__pagination">
                    <button class="pagination__item">1</button>
                    <button class="pagination__item">2</button>
                    <button class="pagination__item selected">3</button>
                    <div class="pagination__item dots">...</div>
                    <button class="pagination__item">16</button>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/scripts/script.js"></script>
</body>
</html>