

const distance = 1
const priceKm = 0.21
let ticket_price = (priceKm * distance)

console.log(distance)
console.log(priceKm)
console.log(ticket_price)

const passenger_age = prompt('type your age')
const km = prompt('type your km')

const minorDiscount = 0.2
const over65Discount = 0.4

console.log(ticket_price)
console.log(minorDiscount)
console.log(over65Discount)

let message


//richiesta km 
//richiesta età

//calcolo prezzo standard

ticket_price = km * priceKm
console.log(ticket_price)

//sconto minorenni -20%

if (passenger_age < 18) {

    ticket_price -= ticket_price * minorDiscount
    message = 'prezzo biglietti minorenni'

}

//sconto over65 - 40%%

else if (passenger_age > 65) {

    ticket_price -= ticket_price * over65Discount
    message = 'prezzo biglietti over65'
}

// verifica l'errore su message 
console.log(message, ticket_price.toFixed(2))
