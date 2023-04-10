//Filtrar texto o algo más, dependera de la regla que implementes

const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Bannana, Kiwi, Apple, Orange, Pineapple, Watermelon";


//es un for que crea una variable en donde los que coincidan, tendran que imprimirse, se determina si coincide gracias a matchAll(regla_que_queremos_implementar)
for (const match of fruit.matchAll(regex)){
    console.log(match);
}