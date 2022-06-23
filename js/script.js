// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data (in data avrò l'src).

var app = new Vue(
    {
        el: '#root',
        data: {
            // Titolo 
            pageTitle: 'Ciao sono un h1',
            // Immagine
            pageImg: 'https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg',
            pageImgAlt: 'vue.js-img'

        }
    }
);