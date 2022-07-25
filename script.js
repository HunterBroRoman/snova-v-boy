 let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', "");
    }
}
start();

const personaMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};       
   
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренних фильмов', '').trim(),
              b = prompt('На сколько оцените его?', '');
             
     if ( a != null & b != null & a != "" & b != "" & a.length < 50)  {       
             personaMoviDB.movies[a] = b;
             console.log('donne');
             }  else {
                 console.log(" error"); 
                 i--;
             }
     }
}
    rememberMyFilms();

           
    function detectPersonalLEvel() {
        if (personaMoviDB.count < 10) {
            console.log("Вы просмотрели мало фильмов");
        }  else if (personaMoviDB.count >= 10 & personaMoviDB.count < 30) {
            console.log("Вы посмотрели много фильмов");
        }  else if (personaMoviDB.count >= 30 ) {
            console.log("Вы кономан");
        }  else {
            console.log("произошла ошибка");
        }      
    }
     detectPersonalLEvel();

     function showMyDB (hidden) {
        if (!hidden) {
        console.log(personaMoviDB);
     }
    }
showMyDB(personaMoviDB.privat);

  function writeYourGenres() {
    for (i = 1; i <=3; i++) {
        personaMoviDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      }
}
writeYourGenres();
   