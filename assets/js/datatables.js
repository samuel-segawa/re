$(document).ready(function() {
    $('#example').DataTable( {
        searchPane: false,
        responsive: true,
        pageLength: 25,

        "ajax": "./assets/db/db.txt",

        "columns": [
            { "data": "name" },
            { "data": "rarity" },
            { "data": "description" }
        ]
    } );

} );
