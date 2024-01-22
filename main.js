// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

// const auto = [
//     { marca: "Fiat", modello: "500", alimentazione: "benzina" },
//     { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
//     { marca: "Fiat", modello: "Tipo", alimentazione: "diesel" },
//     { marca: "Lancia", modello: "Ypsilon", alimentazione: "gpl" },
//     { marca: "Lamborghini", modello: "Huracán", alimentazione: "elettrico" },
//     { marca: "Audi", modello: "A4", alimentazione: "metano" },
//     { marca: "BMW", modello: "320i", alimentazione: "benzina" },
//     { marca: "Mercedes-Benz", modello: "C-Class", alimentazione: "diesel" },
//     { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" }
//   ];
  
//   const ArrayBenzina = [];
//   const ArrayDiesel = [];
//   const ArrayAltro = [];
  
//   auto.forEach((car) => {
//     const { marca, modello, alimentazione } = car;
  
//     if (alimentazione === "benzina") {
//       ArrayBenzina.push({ marca, modello });
//     } else if (alimentazione === "diesel") {
//       ArrayDiesel.push({ marca, modello });
//     } else {
//       ArrayAltro.push({ marca, modello });
//     }
//   });
  
//   console.log("Auto a benzina:", ArrayBenzina);
//   console.log("Auto a diesel:", ArrayDiesel);
//   console.log("Altre auto:", ArrayAltro);






// //  -------------------------------- SECONDO SNACK -----------------------------------------------------


// // A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// // Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

// const nomi = [
//     "Mario",
//     "GIOVANNI",
//     "Marco",
//     "Luca",
//     "ANDREA",
//     "AlessaNdro",
//     "MaTTeo",
//     "Francesco",
//     "EmANuele"
//   ];

//   const ArrayNomiMaiuscola = nomi.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase());


//   console.log(ArrayNomiMaiuscola);






//  -------------------------------- TERZO SNACK -----------------------------------------------------

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
//   { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
//   { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
// ]
// Crea un nuovo array con la lista dei mammiferi.

const animali = [
    {
      nome: "Leone",
      famiglia: "Felidae",
      class: "Mammalia"
    },
    {
      nome: "Tigre",
      famiglia: "Felidae",
      class: "Mammalia"
    },
    {
      nome: "Elefante",
      famiglia: "Elephantidae",
      class: "Mammalia"
    },
    {
      nome: "Giraffa",
      famiglia: "Giraffidae",
      class: "Mammalia"
    },
    {
      nome: "Giaguaro",
      famiglia: "Felidae",
      class: "Mammalia"
    },
    {
      nome: "Canguro",
      famiglia: "Macropodidae",
      class: "Mammalia"
    },
    {
      nome: "Orso",
      famiglia: "Ursidae",
      class: "Mammalia"
    },
    {
      nome: "Pinguino",
      famiglia: "Spheniscidae",
      class: "Aves"
    },
    {
      nome: "Uccello del paradiso",
      famiglia: "Paradisaeidae",
      class: "Aves"
    }
];

const ArrayMammiferi = animali.filter(elemento => {
    return elemento.class === "Mammalia";
});

console.log(ArrayMammiferi);

