const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', "");

const personaMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};       
   for (let i = 0; i < 2; i++) {
       const a = prompt('Один из последних просмотренних фильмов', ''),
             b = prompt('На сколько оцените его?', '');
            
    if ( a != null & b != null & a != "" & b != "" & a.length < 50)  {       
            personaMoviDB.movies[a] = b;
            console.log('donne');
            }  else {
                console.log(" error"); 
                i--;
            }
        }

    if (personaMoviDB.count < 10) {
        console.log("Вы просмотрели мало фильмов");
    }  else if (personaMoviDB.count >= 10 & personaMoviDB.count < 30) {
        console.log("Вы посмотрели много фильмов");
    }  else if (personaMoviDB.count >= 30 ) {
        console.log("Вы кономан");
    }  else {
        console.log("произошла ошибка");
    }             

     console.log(personaMoviDB);

            
   