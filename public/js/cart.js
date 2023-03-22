const price = 2.99
const currency = 'UGX'
const formattedPrice = numeral(price).format('0,0.00')
const formattedCurrency = `${currency} ${formattedPrice} `