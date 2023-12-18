new Vue({
    el: '#cont_green',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                lastMessage: 'Hai portato a spasso il cane?',
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                lastMessage: 'Ciao come stai?',
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                lastMessage: 'Ciao che stai facendo?',
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar_4.jpg',
                lastMessage: 'Come hai fatto?',
            },
        ],
        messages: {
            Michele: [
                { text: 'Hai portato a spasso il cane?', sender: 'Michele' },
                { text: 'Si', sender: 'You' },
                { text: 'Bene bene!', sender: 'Michele' },
            ],

            Fabio: [
                { text: 'Ciao come stai?', sender: 'Michele' },
                { text: 'Bene, tu?', sender: 'You' },
                { text: 'Bene bene!', sender: 'Michele' },
            ],

            Samuele: [
                { text: 'Ciao che stai facendo?', sender: 'Michele' },
                { text: 'Sono a lavoro', sender: 'You' },
                { text: 'Ah ok, poi ci sentiamo', sender: 'Michele' },
            ],

            'Alessandro B.': [
                { text: 'Come hai fatto?', sender: 'Michele' },
                { text: 'Poi ti spiego, sono impegnato ora', sender: 'You' },
                { text: 'Ah ok ok', sender: 'Michele' },
            ]
        },
        activeContact: null,
    },

    methods: {
        // metodo per selezionare il cotatto da visualizzare
        selectContact(contact) {
            this.activeContact = contact;
        },
    },

    computed: {
        // metodo per selezionare il contatto da stampoare al selezionamento del contatto
        selectedPerson: function () {
            if (this.activeContact) {
                return {
                    name: this.activeContact.name,
                    lastAccess: 'Ultimo accesso oggi alle 12:00',
                    avatar: this.activeContact.avatar,
                };
            } else {
                return null;
            }
        },
    },

    mounted() {
        // faccio in modo di visualizzare la prima chat all' apertura del sito
        this.activeContact = this.contacts[0];
    },
});
