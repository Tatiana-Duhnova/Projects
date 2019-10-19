var communicateBtn = document.getElementsByClassName('form__communicate')[0],
    communicateBtnFooter = document.getElementsByClassName('form__communicate')[1],
    socialInput = document.getElementsByClassName('social-input')[0],
    socialInputFooter = document.getElementsByClassName('social-input')[1],
    items = document.getElementsByClassName('items')[0],
    itemsFooter = document.getElementsByClassName('items')[1],
    socialBtn = document.getElementsByClassName('items_social_network')[0],
    socialBtnFooter = document.getElementsByClassName('items_social_network')[1];

communicateBtn.onclick = function () {
    items.classList.toggle('items_on');
};

communicateBtnFooter.onclick = function () {
    itemsFooter.classList.toggle('items_on');
};

socialBtn.onclick = function (event) {
    var target = event.target;

    if (target.className == 'items_social_network') {
        socialInput.innerHTML = '<input class="form_item-social" type="text" placeholder="Ссылка на Ваш аккаунт" name="account">';
    }
};

socialBtnFooter.onclick = function (event) {
    var target = event.target;

    if (target.className == 'items_social_network') {
        socialInputFooter.innerHTML = '<input class="form_item-social" type="text" placeholder="Ссылка на Ваш аккаунт" name="account">';
    }
};