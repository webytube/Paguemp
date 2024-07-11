
const ACCESS_TOKEN = 'APP_USR-338217440534890-061308-331c751b8de87a80189a2b23e03bc442-1728455248';

fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    },
    body: JSON.stringify({

payment_methods: {
          excluded_payment_methods: [
                    
                    {
                              id: "bolbradesco"
                    },
                    {
                              id: "pec"
                    }
          ],
          excluded_payment_types: [
                    {
                              id: "debit_card"
                    }
          ],
          excluded_payment_types: [
                    {
                              id: "debit_card"
                    }
          ],
          installments: 12
},
        
        items: [{
            title: 'assinando EpicPlay',
            currency_id: 'BRL',
            category_id: 'app',
            quantity: 1,
            unit_price: 01
        }],
        auto_return: 'all',
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

requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
