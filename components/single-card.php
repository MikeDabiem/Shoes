<div class="showcase__items-item">
    <a href="#" class="item__thumb">
        <img src="<?php echo $card["image"]; ?>" alt="sneaker">
    </a>
    <a href="#" class="item__title"><?php echo $card["name"]; ?></a>
    <p class="item__price">$<?php echo $card["price"]; ?></p>
    <div class="item__buttons">
        <a href="#" class="item__buttons-view">View item</a>
        <input class="item__buttons-heart" type="checkbox" name="heart" <?php echo $card["liked"] ? "checked" : null ?>>
    </div>
</div>