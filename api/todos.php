<?php

declare(strict_types = 1);

const FILE_PATH_TODOS = 'todos.json';

header("Access-Control-Allow-Origin: *");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonString = file_get_contents("php://input");
    file_put_contents(FILE_PATH_TODOS, $jsonString);
} else {
    echo file_get_contents(FILE_PATH_TODOS);
}
