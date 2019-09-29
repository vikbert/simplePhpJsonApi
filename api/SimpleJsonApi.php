<?php

declare(strict_types = 1);

function handleRequest(string $output)
{
    header("Access-Control-Allow-Origin: *");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $jsonString = file_get_contents("php://input");
        file_put_contents($output, $jsonString);
    }

    if (file_exists($output)) {
        echo file_get_contents($output);
    } else {
        echo sprintf('Output file "%s" not found! Use POST to push some data at first.', $output);
            
    }
}



