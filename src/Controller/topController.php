<?php
if(session_id() == '' || !isset($_SESSION)) {
    session_start();
}

require $_ENV["INCLUDE_PATH"] . 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable($_ENV["INCLUDE_PATH"]);
$dotenv->load();

require $_ENV["INCLUDE_PATH"] . 'src/Model/database.php';

require $_ENV["INCLUDE_PATH"] . 'templates/views/index.html';
