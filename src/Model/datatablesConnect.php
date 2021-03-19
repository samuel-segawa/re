<?php
require __DIR__ . '../../../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable('../../');
$dotenv->load();

require $_ENV["INCLUDE_PATH"] . 'src/Model/database.php';

/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simple to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */

// DB table to use
$table = $_ENV['DT_TABLE_NAME'];

// Table's primary key
$primaryKey = $_ENV['DT_PRIMARY_KEY'];

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array( 'db' => $_ENV['DT_C0'], 'dt' => $_ENV['DT_C0'] ),
    array( 'db' => $_ENV['DT_C1'], 'dt' => $_ENV['DT_C1'] ),
    array( 'db' => $_ENV['DT_C2'], 'dt' => $_ENV['DT_C2'] ),
    array( 'db' => $_ENV['DT_C3'], 'dt' => $_ENV['DT_C3'] ),
    array( 'db' => $_ENV['DT_C4'], 'dt' => $_ENV['DT_C4'] ),
    array( 'db' => $_ENV['DT_C5'], 'dt' => $_ENV['DT_C5'] )
);

// SQL server connection information
$sql_details = array(
    'user' => $_ENV['DB_USER'],
    'pass' => $_ENV['DB_PASS'],
    'db'   => $_ENV['DB_NAME'],
    'host' => $_ENV['DB_HOST']
);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */

require 'ssp.class.php';

echo json_encode(
    SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);
