$(document).ready(function() {
    $('#example').DataTable( {
        searchPane: false,
        responsive: true,
        pageLength: 170,

        "ajax": "./assets/db.txt",

        "columns": [
            { "data": "name" },
            { "data": "rarity" },
            { "data": "description" }
        ]
    } );

} );
