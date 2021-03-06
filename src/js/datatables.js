$.fn.dataTable.ext.type.order['rarity-grade-pre'] = function(d) {
    switch (d) {
        case 'Uncommon':
            return 1;
        case 'Rare':
            return 2;
        case 'Epic':
            return 3;
        case 'Legendary':
            return 4;
    }
    return 0;
};

$(document).ready(function() {

    $('#view').DataTable({
        processing: true,
        serverSide: true,
        responsive: true,
        pageLength: 100,
        pagingType: "numbers",


        ajax: {
            "url": "./src/Model/datatablesConnect.php",
            "contentType": "application/json; charset=utf-8",
            "dataType": 'json'
        },

        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search"
        },

        columns: [{
                "data": "id"
            },
            {
                "data": "icon"
            },
            {
                "data": "name"
            },
            {
                "data": "rarity"
            },
            {
                "data": "description"
            }
        ],

        columnDefs: [{
                targets: 0,
                visible: false,
                searchable: false
            },
            {
                targets: 1,
                visible: false,
                searchable: false,

                /*
				render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<img class="re-icon rounded" src="./assets/img/icon/' + (data) + '" width="40" height="40" />';
                    }
                    return data;
                }
				*/
            },
            {
                targets: 2,
                visible: true,
                searchable: true,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + row.rarity + '">' + (data) + '</span>';
                    }
                    return data;
                }
            },
            {
                targets: 3,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + (data) + '">' + (data) + '</span>';
                    }
                    return data;
                }
            },
            {
                targets: 3,
                type: "rarity-grade"
            }

        ],

        order: [
            [2, "asc"]
        ]

    });

    $('#uncommon').DataTable({
        processing: true,
        serverSide: true,
        responsive: true,
        pageLength: 100,
        pagingType: "numbers",

        ajax: {
            "url": "./src/Model/datatablesConnectUncommon.php",
            "contentType": "application/json; charset=utf-8",
            "dataType": 'json'
        },

        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search"
        },

        columns: [{
                "data": "id"
            },
            {
                "data": "icon"
            },
            {
                "data": "name"
            },
            {
                "data": "rarity"
            },
            {
                "data": "description"
            }
        ],

        columnDefs: [{
                targets: 0,
                visible: false,
                searchable: false
            },
            {
                targets: 1,
                visible: false,
                searchable: false,

                /*
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<img class="re-icon rounded" src="./assets/img/icon/' + (data) + '" width="40" height="40" />';
                    }
                    return data;
                }
				*/
            },
            {
                targets: 2,
                visible: true,
                searchable: true,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + row.rarity + '">' + (data) + '</span>';
                    }
                    return data;
                }
            },
            {
                targets: 3,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + (data) + '">' + (data) + '</span>';
                    }
                    return data;
                }
            }
        ],

        order: [
            [2, "asc"]
        ]

    });

    $('#rare').DataTable({
        processing: true,
        serverSide: true,
        responsive: true,
        pageLength: 100,
        pagingType: "numbers",

        ajax: {
            "url": "./src/Model/datatablesConnectRare.php",
            "contentType": "application/json; charset=utf-8",
            "dataType": 'json'
        },

        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search"
        },

        columns: [{
                "data": "id"
            },
            {
                "data": "icon"
            },
            {
                "data": "name"
            },
            {
                "data": "rarity"
            },
            {
                "data": "description"
            }
        ],

        columnDefs: [{
                targets: 0,
                visible: false,
                searchable: false
            },
            {
                targets: 1,
                visible: false,
                searchable: false,

                /*
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<img class="re-icon rounded" src="./assets/img/icon/' + (data) + '" width="40" height="40" />';
                    }
                    return data;
                }
				*/
            },
            {
                targets: 2,
                visible: true,
                searchable: true,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + row.rarity + '">' + (data) + '</span>';
                    }
                    return data;
                }
            },
            {
                targets: 3,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + (data) + '">' + (data) + '</span>';
                    }
                    return data;
                }
            }
        ],

        order: [
            [2, "asc"]
        ]

    });

    $('#epic').DataTable({
        processing: true,
        serverSide: true,
        responsive: true,
        pageLength: 100,
        pagingType: "numbers",

        ajax: {
            "url": "./src/Model/datatablesConnectEpic.php",
            "contentType": "application/json; charset=utf-8",
            "dataType": 'json'
        },

        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search"
        },

        columns: [{
                "data": "id"
            },
            {
                "data": "icon"
            },
            {
                "data": "name"
            },
            {
                "data": "rarity"
            },
            {
                "data": "description"
            }
        ],

        columnDefs: [{
                targets: 0,
                visible: false,
                searchable: false
            },
            {
                targets: 1,
                visible: false,
                searchable: false,

                /*
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<img class="re-icon rounded" src="./assets/img/icon/' + (data) + '" width="40" height="40" />';
                    }
                    return data;
                }
				*/
            },
            {
                targets: 2,
                visible: true,
                searchable: true,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + row.rarity + '">' + (data) + '</span>';
                    }
                    return data;
                }
            },
            {
                targets: 3,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + (data) + '">' + (data) + '</span>';
                    }
                    return data;
                }
            }
        ],

        order: [
            [2, "asc"]
        ]

    });

    $('#lego').DataTable({
        processing: true,
        serverSide: true,
        responsive: true,
        pageLength: 100,
        pagingType: "numbers",

        ajax: {
            "url": "./src/Model/datatablesConnectLego.php",
            "contentType": "application/json; charset=utf-8",
            "dataType": 'json'
        },

        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search"
        },

        columns: [{
                "data": "id"
            },
            {
                "data": "icon"
            },
            {
                "data": "name"
            },
            {
                "data": "rarity"
            },
            {
                "data": "description"
            }
        ],

        columnDefs: [{
                targets: 0,
                visible: false,
                searchable: false
            },
            {
                targets: 1,
                visible: false,
                searchable: false,

                /*
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<img class="re-icon rounded" src="./assets/img/icon/' + (data) + '" width="40" height="40" />';
                    }
                    return data;
                }
				*/
            },
            {
                targets: 2,
                visible: true,
                searchable: true,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + row.rarity + '">' + (data) + '</span>';
                    }
                    return data;
                }
            },
            {
                targets: 3,
                render: function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<span class="rarity ' + (data) + '">' + (data) + '</span>';
                    }
                    return data;
                }
            }
        ],

        order: [
            [2, "asc"]
        ]

    });

    // TH Classes
    //$("th:nth-child(1)").addClass("table-icon");
    $("th:nth-child(1)").addClass("table-name");
    $("th:nth-child(2)").addClass("table-rarity");
    $("th:nth-child(3)").addClass("table-description");

});


// Hide Rows on Small Screens
$(document).ready(function() {
    var table = $('.table').DataTable();
    var width500 = window.matchMedia("(max-width: 500px)")
    var width300 = window.matchMedia("(max-width: 300px)")

    if (width500.matches) {
        table.column(3).visible(false);
    }
    if (width300.matches) {
        //table.column(1).visible(false);
        table.column(3).visible(false);
    }

    $().keyup(function() {
        table.draw();
    });

});

// Popout Modal on Row select
$(document).ready(function() {
    var table = $('.table').DataTable();

    $('.table tbody').on('click', 'td:nth-child(1), td:nth-child(2), td:nth-child(3), td:nth-child(4)', function() {
        var data = JSON.stringify(table.row(this).data());
        var dataArray = JSON.parse(data);

        // Modal Title
        //document.getElementById("showDetailsTitle").innerHTML = '<img class="re-icon shadow border rounded" src="./assets/img/icon/' + dataArray['icon'] + '" width="40" height="40" />' + '<span class="modal-title ms-2 ' + dataArray['rarity'] + '">' + dataArray['name'] + '</span>';

        document.getElementById("showDetailsTitle").innerHTML = '<span class="modal-title ms-2 ' + dataArray['rarity'] + '">' + dataArray['name'] + '</span>';

        // Name
        document.getElementById("showDetailsRarity").innerHTML = '<p class="rarity ' + dataArray['rarity'] + '"><span class="global-text-color">Rarity: </span>' + dataArray['rarity'] + '</p>';
        // Description
        document.getElementById("showDetailsDescription").innerHTML = dataArray['description'];

        // Show Modal
        $('#showDetails').modal("show");

    });
});
