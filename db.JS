db.createUser({
    user:'geek',
    pwd: 'geek22',
    roles: ['readWrite','dbAdmin']
});

use books;

db.books.insert({
    name: 'El amor en los tiempo del colera',
    author: "Gabriel Garcia Marquez",
    pages_numer: '221',
    language: "Español",
    published: "1998"
});

db.books.insert([
    {name: 'Don quijote de la mancha',author: "Miguel de Cervantes Saavedra",
        pages_numer: '221',language: "Español",published: "1998"},
    {name: 'El lazarillo de Tormes',author: "Anonimo",
        pages_numer: '221',language: "Español",published: "1998"},
        {name: 'Fuenteovejuna',author: "Lope de Vega",
        pages_numer: '221',language: "Español",published: "1998"},
        {name: 'Rimas',author: "Gustavo Adolfo Bécquer",
        pages_numer: '221',language: "Español",published: "1867"},
        {name: 'Soledades',author: "Antonio Machado",
        pages_numer: '221',language: "Español",published: "1903"},
        {name: 'El aleph',author: "Jorge Luis Borges",
        pages_numer: '221',language: "Español",published: "1998"},
        {name: 'Cien Años de Soledad',author: "Gabriel García Márquez",
        pages_numer: '221',language: "Español",published: "1998"},
        {name: 'Rayuela',author: "Julio Cortázar",
        pages_numer: '221',language: "Español",published: "1998"},
]);


