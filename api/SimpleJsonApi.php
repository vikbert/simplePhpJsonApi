<?php

declare(strict_types = 1);

function handleRequest(string $output)
{
    header("Access-Control-Allow-Origin: *");
    header("Content-type: application/json");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        handlePOST($output);

        return;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        handleGET($output);

        return;
    }
}

function handlePOST(string $output)
{
    $result = file_put_contents($output, file_get_contents("php://input"));

    echo $result ? '200: OK' : '500: server error';
}

function handleGET(string $output)
{
    if (file_exists($output)) {
        echo file_get_contents($output);
    } else {
        echo sprintf('Output file "%s" not found! Use POST to push some data at first.', $output);
    }
}

