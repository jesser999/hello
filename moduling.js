function makeBook(Title,Author,MSRP,Genre,NumberOfPages,Description){
    return {
        Title : Title,
        Author : Author,
        MSRP : MSRP,
        Genre : Genre,
        NumberOfPages : NumberOfPages,
        Description : Description
    }
}
      


        var book1=makeBook("Harry Potter and the Sorcerer's Stone","J.K. Rowling","6.80£","fantasy",309,"This is a compelling summary of the beginning of Harry Potter and the Sorcerer's Stone")
        var book2=makeBook("Romeo and Juliet","William Shakespeare","8£","Romantic",336,"In Romeo and Juliet, Shakespeare creates a violent world in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud.")
        var book3=makeBook("Structure and Interpretation of Computer Programs", "Gerald Jay Sussman, Hal Abelson", "50£", "Computer science",657, "This long-awaited revision contains changes throughout the text. There are new implementations of most of the major programming systems in the book.");

       var sorcerersStone = book1
       var RomeoAndJuliet = book2
       var computerPrograms = book3


        function displayBook(book){
            return book.Title + ", by "+ book.Author + " -- "+ book.Genre + ", " + book.MSRP
            }

            var books = [book1 , book2 , book3]


            function displayBooks(books){
                var res = ""
                 for (var i = 0; i < books.length; i++) {
                   res = res + i +". " + displayBook(books[i]) + "\n"
                 } return res
                        }

              function isMatch(query,book){
                     var lowerCaseQuery = query.toLowerCase()
                       var lowerCaseTitle = book.Title.toLowerCase()
                          return lowerCaseTitle.indexOf(lowerCaseQuery) !== -1
                        }

             function searchBooks(query, books) {
                const matchingBooks = [];
                        
                   for (var i = 0; i < books.length; i++) {
                      if (isMatch(query, books[i])) {
                         matchingBooks.push(books[i]);
                            }
                          }
                        
                          return matchingBooks;
                        }



                function RemoveBooks(booksTitle,books){
                     var query = booksTitle
                        for (var i = 0; i < books.length; i++) {
                          if (isMatch(query, books[i])) { 
                               books.splice(i,1)
                           }
                        }return books
                      }


                   function factoryMovies(title,director,duration,releaseDate,actor,role,rating){
                        return {
                            title : title ,
                            director : director,
                            duration : duration ,
                            releaseDate : releaseDate ,
                            actor : actor ,
                            role : role ,
                            rating : rating 
                        }
                    }
                    var movie1 = factoryMovies("Inception","Christopher Nolan","2h 28m","2010-07-16",["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"] ,[" Dom Cobb"," Arthur"," Ariadne"] , 8.8)
                    
                    var movie2 = factoryMovies("The Shawshank Redemption","Frank Darabont","2h 22m", "1994-09-23",["Tim Robbins", "Morgan Freeman"],[" Andy Dufresne"," Ellis 'Red' Redding"] , 9.3)
                    
                    var movie3 = factoryMovies("Parasite","Bong Joon-ho","2h 12m","2019-05-30",["Kang-ho Song", "Sun-kyun Lee", "Yeo-jeong Jo"],[" Kim Ki-taek"," Chung-sook"," Cho Yeo-jeong"] , 8.6)




                    function displayMovie(movie){
                      return movie.title + ", by "+ movie.director + " released in "+ movie.releaseDate + ", and it's rating is " + movie.rating
                      }


                      function displayCast(movie){
                        var res = ""
                        for (var i = 0; i < movie.role.length; i++) {
                            res = res + i + "." + movie.role[i] + " is acting by "+ movie.actor[i] + "\n"
                        }return res 
                      }
                          var Inception = movie1
                          var The_Shawshank_Redemption = movie2
                          var Parasite = movie3
                          var movies = [Inception , The_Shawshank_Redemption , Parasite]

                    function displayMovies(movies){
                         var res = ""
                          for (var i = 0; i < movies.length; i++) {
                           res = res + i +". " + displayMovie(movies[i]) + "\n"
                           } return res
                        }