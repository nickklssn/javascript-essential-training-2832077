class Book{
    constructor(
        name,
        year,
        author
    ){

        this.name = name,
        this.year = year,
        this.author = author
    };

    newName(nName){
        this.name = nName
    };
}

export default Book;