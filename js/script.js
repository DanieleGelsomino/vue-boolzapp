console.log("Vue Js ok!");

/*
    Milestone 1
    Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
    e dall’interlocutore (bianco) assegnando due classi CSS diverse
    Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
    visualizzare nome e immagine di ogni contatto
    QUINDI solo la parte a sinistra sarà dinamica (per mostrare la lista contatti),
    mentre a destra ci sarà HTML statico, uguale a quello presentato nel layout
*/
const contacts = [
  {
    name: "Michele",
    avatar: "_1",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Hai portato a spasso il cane?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Ricordati di stendere i panni",
        status: "sent",
      },
      {
        date: "10/01/2020 16:15:22",
        message: "Tutto fatto!",
        status: "received",
      },
    ],
  },
  {
    name: "Fabio",
    avatar: "_2",
    visible: true,
    messages: [
      {
        date: "20/03/2020 16:30:00",
        message: "Ciao come stai?",
        status: "sent",
      },
      {
        date: "20/03/2020 16:30:55",
        message: "Bene grazie! Stasera ci vediamo?",
        status: "received",
      },
      {
        date: "20/03/2020 16:35:00",
        message: "Mi piacerebbe ma devo andare a fare la spesa.",
        status: "sent",
      },
    ],
  },
  {
    name: "Samuele",
    avatar: "_3",
    visible: true,
    messages: [
      {
        date: "28/03/2020 10:10:40",
        message: "La Marianna va in campagna",
        status: "received",
      },
      {
        date: "28/03/2020 10:20:10",
        message: "Sicuro di non aver sbagliato chat?",
        status: "sent",
      },
      {
        date: "28/03/2020 16:15:22",
        message: "Ah scusa!",
        status: "received",
      },
    ],
  },
  {
    name: "Alessandro B.",
    avatar: "_4",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Lo sai che ha aperto una nuova pizzeria?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Si, ma preferirei andare al cinema",
        status: "received",
      },
    ],
  },
  {
    name: "Alessandro L.",
    avatar: "_5",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ricordati di chiamare la nonna",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Va bene, stasera la sento",
        status: "received",
      },
    ],
  },
  {
    name: "Claudia",
    avatar: "_6",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao Claudia, hai novità?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Non ancora",
        status: "received",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "Nessuna nuova, buona nuova",
        status: "sent",
      },
    ],
  },
  {
    name: "Federico",
    avatar: "_7",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Fai gli auguri a Martina che è il suo compleanno!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Grazie per avermelo ricordato, le scrivo subito!",
        status: "received",
      },
    ],
  },
  {
    name: "Davide",
    avatar: "_8",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao, andiamo a mangiare la pizza stasera?",
        status: "received",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "OK!!",
        status: "received",
      },
    ],
  },
];

const app = new Vue({
  el: "#boolzapp",
  data: {
    contacts,
    contactSelected: 0,
    newMessage: "",
    search: "",
  },
  methods: {
    imgUrlContact(imgContacts) {
      return `img/avatar${imgContacts.avatar}.jpg`;
    },
    // funzione per ricavare l'indice
    selectActiveContact(i) {
      this.contactSelected = i;
      console.log(this.contactSelected);
    },
    // funzione per ricavare l'ultimo messaggio
    getLastMessage(contattiUser) {
      const messages = contattiUser.messages;
      const lastMessage =
        messages.length > 0 ? messages[messages.length - 1].message : "";
      return lastMessage;
    },
    // funzione per applicare le classi sent o received
    IsSentOrReceived(status) {
      if (status !== "received") {
        return "dg--sent";
      } else {
        return "dg--received";
      }
    },

    onlyHourString(fullDate) {
      return fullDate.split("").slice(11, 16).join("");
    },
    // funzione per aggiungere un nuovo messaggio
    addNewMessageText() {
      if (this.newMessage.trim().length > 0) {
        const chatContact = this.contactSelected;
        const newMessageText = {
          date: "10/01/2020 15:51:00",
          message: this.newMessage,
          status: "sent",
        };

        this.contacts[chatContact].messages.push(newMessageText);

        this.newMessage = "";
        // imposto timeout per la risposta al messaggio
        setTimeout(() => {
          const responseMessage = {
            date: "10/01/2020 15:51:00",
            message: "ok",
            status: "received",
          };

          this.contacts[chatContact].messages.push(responseMessage);
        }, 1000);
      }
    },
  },
});
