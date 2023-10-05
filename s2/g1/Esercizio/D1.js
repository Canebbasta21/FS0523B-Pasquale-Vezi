/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
var numero = 3; //Esistono solo 1 tipo di dato numerico,ovvero che non e presente una distinzione formale tra decimale o intero,si indica con i numeri//
var stringa = 'Ciao Mondo'; //è una sequenza di caratteri delimitata da doppi o singoli apici,non esiste una regola per stabilire quale delimitatore usare,esiste solo 1 regola,cioe che il delimitatore finale deve essere uguale al delimetatore iniziale,si indica con:''//
var array = [];// una variabile che può contenere molteplici valori ai quali ci si può riferire attraverso un indice,per indicarlo si usa:[]//
var booleano= true//Un valore booleano è semplicemente un dato che può assumere solo due valori//
var oggetto = {};//sono entità molto flessibili e dinamiche e si indicano con {}

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Pasquale';
console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
var n1 = 12;
        var n2= 20;
        var risultato= n1+n2;// 32
        console.log(var risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
var nomex=12
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = Vezi


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var n1 =4
var risultato=n1+namex//8
co
console.log(var risultato)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';
console.log(name1 == name2);
  console.log(name1 == name2);
  console.log(name1.toLowerCase == name2.tolowercase);
