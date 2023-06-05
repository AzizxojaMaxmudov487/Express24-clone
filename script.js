window.addEventListener('DOMContentLoaded', () => {
    let delivery = document.querySelector('.delivery')
    let btndelivery = document.querySelector('.delivery-box')

    let buyBtn = document.querySelectorAll('.price')
    let food = document.querySelectorAll('.food')
    let h2 = document.querySelectorAll('.h2')

    let foodsName = document.querySelector('.foods-name')
    let foodPrice = document.querySelector('.product-price')
    let foodStar = document.querySelector('.product-star')

    let payBtn = document.querySelector('.pay')


    delivery.addEventListener('click', () => {
        btndelivery.style.display = 'block'
    })


    buyBtn.forEach((item,e) =>{

        item.addEventListener('click', () =>{

            let name = food[e].querySelector('.h2');
            let price = food[e].querySelector('.price');
            let stars =  food[e].querySelector('.food-star');
            
            foodsName.textContent = `Foods Name: ${name.textContent}`

            foodPrice.textContent = `Price: ${price.textContent} `

            foodStar.textContent = `Stars: ${stars.textContent}`

        })
    })


    payBtn.addEventListener('click', () => {
        alert('Thank you for buy')
        location.reload()
    })

}) 