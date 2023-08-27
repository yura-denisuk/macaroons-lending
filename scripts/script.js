// Код для работы бургерного меню на адаптиве

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})
$(document).ready(() => {



//Часть №1

let product = $('.input_one');
    product.css('text-align', 'center');
let errorProduct = $('.errorChoice');
let name = $('.input_two');
    name.css('text-align', 'center');
let errorName = $('.errorName');
let phone = $('.input_third');
    phone.css('text-align', 'center');
let errorPhone = $('.errorPhone');
let orderButton = $('.order__button');
let loader = $('.loader');
let orderClose = $('.order__close');
let orderSuccess = $('.order__success');
    orderSuccess.hide();
let reg = /\D/gi;
phone.on('input', function (e) {
    e.target.value = e.target.value.replace(reg, '');
});

orderButton.click(function () {
    let hasError = false;
    if (!product.val()) {
        errorProduct.text('Необходимо выбрать макарун!').css('color', 'red');
        errorProduct.css({'margin-bottom': '20px', 'padding-left': '30px'});
        product.css({'margin-bottom': '10px', 'border-color': 'red'});
        hasError = true;
    } else {
        errorProduct.text('');
        product.css('border-color', '#821328');
    }

    if (!name.val()) {
        errorName.text('Необходимо ввести имя!').css('color', 'red');
        errorName.css('padding-left', '30px');
        name.css({'margin-bottom': '10px', 'border-color': 'red'});
        hasError = true;
    } else {
        errorName.text('');
        name.css('border-color', '#821328');
    }

    if (!phone.val()) {
        errorPhone.text('Необходимо ввести номер телефона!').css('color', 'red');
        errorPhone.css({'margin-bottom': '20px', 'padding-left': '30px'});
        phone.css({'margin-bottom': '10px', 'border-color': 'red'});
        hasError = true;
    } else {
        errorPhone.text('');
        phone.css('border-color', '#821328');
    }

    if (!hasError) {
        loader.css('display', 'flex')
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: { product: product.val(), name: name.val(), phone: phone.val() }
        })
            .done(function( msg ) {
                loader.hide();
                if (msg.success === 1) {
                    orderClose.hide();
                    orderSuccess.show();
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                }
            });
    }
})














})


