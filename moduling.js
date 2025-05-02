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