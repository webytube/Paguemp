
const ACCESS_TOKEN = 'APP_USR-7683778213528282-061306-ca5abb469f91bd4e26734d1a1f3f0dd9-1728455248';

fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    },
    body: JSON.stringify({
        items: [{
            title: 'assinando EpicPlay',
            currency_id: 'BRL',
            category_id: 'app',
            quantity: 1,
            unit_price: 01
        }],
        auto_return: 'success',
        back_urls: {
            success: 'http://seusite.com/success',
            pending: 'http://seusite.com/pending',
            failure: 'http://seusite.com/failure'
        }
    })
})
.then(response => response.json())
.then(data => {

window.location.href = data.init_point;


const preferenceUrl = data.init_point;
    console.log('success:', preferenceUrl);


})
.catch(error => {
    console.error('Erro ao gerar preferência:', error);
});
