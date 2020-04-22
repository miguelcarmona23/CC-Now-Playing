new Vue({
    el: '#slider',
    data: {
        slides: [{
                title: 'Black Widow',
                description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. ',
                image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/uAUCHOYwFKQvSRZByP8rCgWKwT.jpg'
            },
            {
                title: 'Free Guy',
                description: 'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
                image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7BdpESY7uRi6BNOuj9nIhkLc775.jpg'
            },
            {
                title: 'The New Mutants',
                description: 'Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.',
                image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xZNw9xxtwbEf25NYoz52KdbXHPM.jpg'
            },
        ],
        selectedIndex: 0,
        dragging: false,
        initialMouseX: 0,
        initialCardsX: 0,
        cardsX: 0
    },
    computed: {
        selectedSlide() {
            return this.slides[this.selectedIndex]
        }
    },
    methods: {
        startDrag(e) {
            this.dragging = true
            this.initialMouseX = e.pageX
            this.initialCardsX = this.cardsX
        },
        stopDrag() {
            this.dragging = false

            const cardWidth = 290
            const nearestSlide = -Math.round(this.cardsX / cardWidth)
            this.selectedIndex = Math.min(Math.max(0, nearestSlide), this.slides.length - 1)
            TweenLite.to(this, 0.3, { cardsX: -this.selectedIndex * cardWidth })
        },
        mouseMoving(e) {
            if (this.dragging) {
                const dragAmount = e.pageX - this.initialMouseX
                const targetX = this.initialCardsX + dragAmount
                this.cardsX = targetX
            }
        }
    }
})