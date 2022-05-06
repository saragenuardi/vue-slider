//Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

//1- al click su una thumb, visualizzare in grande l'immagine corrispondente

const app = new Vue(
    {
        el: '#root',
        data: {
           thumbs: [ 
                {    
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {    
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },
                {    
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {    
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {    
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
            ],
            currentSlide: 0
        },
        methods: {
            next() {
                this.currentSlide ++
                if (this.currentSlide > this.thumbs.length - 1) {
                    this.currentSlide = 0;
                }
                console.log('next');

            },
            prev() {
                this.currentSlide --
                if (this.currentSlide  < 0 ) {
                    this.currentSlide = this.thumbs.length - 1;
                }
                console.log('prev');
            },
            clickImage(index) {
                this.currentSlide = index;
            }

        }

    }
); 

