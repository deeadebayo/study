var imdeeb = [
    {
        title: "Cowboy Bebop",
        rating: 10,
        hasWatched: true
    },
    {
        title: "Blue is the Warmest Color",
        rating: 9,
        hasWatched: true
    },
    {
        title: "Blade Runner",
        rating: -1,
        hasWatched: false
    },
    {
        title: "Logan",
        rating: 10,
        hasWatched: true
    },
    {
        title: "Jamon Jamon",
        rating: 7,
        hasWatched: true
    },
    {
        title: "Game of Thrones",
        rating: 9,
        hasWatched: true
    },
    {
        title: "Mad Max Fury Road",
        rating: -1,
        hasWatched: false
    }
];

// function watchList (){
//     imdeeb.forEach(function(movie){
//         //I have seen "THIS MOVIE" - (number of stars)
//         movie.hasWatched ? console.log('I have seen "' + movie.title + '" - ' + movie.rating + 'star(s).') : console.log("broken")
//     });
// };
///Refactored
function watchList2 (){
    imdeeb.forEach(function(movie) {
        console.log(buildString(movie));
    });
};

function buildString (movie) {
    var result = "You have ";
    if(movie.hasWatched) {
           result += 'seen "' + movie.title + '\" - ' + movie.rating + 'star(s).';
    } else {
        result += 'not seen "' + movie.title + '" - ' + movie.rating + 'star(s).';
    }
    return result;
}