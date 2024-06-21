
const ACCESS_TOKEN = 'TEST-7683778213528282-061306-0afbdb004e7fe9a646c6be96c0d228ac-1728455248';

fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    },
    body: JSON.stringify({
        items: [{
            title: 'assinando EpicPlay',
            quantity: 1,
            unit_price: 01
        }],
        
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