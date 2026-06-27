<?php
/**
 * Kitty Beauty Pricing Calculator API Backend
 * Handles reading and saving the service catalog from services.json.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Allow preflight options request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$dataFile = __DIR__ . '/services.json';

// Serve the catalog (GET)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $data = file_get_contents($dataFile);
        echo $data;
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'No se encontró el archivo de servicios.']);
    }
    exit;
}

// Update the catalog (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read raw input
    $input = file_get_contents('php://input');
    $decoded = json_decode($input, true);

    if ($decoded === null) {
        http_response_code(400);
        echo json_encode(['error' => 'JSON inválido.']);
        exit;
    }

    // Basic structure validation: ensure it's a list
    if (!is_array($decoded)) {
        http_response_code(400);
        echo json_encode(['error' => 'El formato debe ser una lista de servicios.']);
        exit;
    }

    // Save back to JSON file
    // Use JSON_PRETTY_PRINT to make it readable in the repository
    $success = file_put_contents($dataFile, json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    if ($success !== false) {
        echo json_encode(['success' => true, 'message' => 'Servicios actualizados correctamente.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'No se pudo escribir en el archivo de servicios. Verifica permisos de escritura.']);
    }
    exit;
}

// Any other method
http_response_code(405);
echo json_encode(['error' => 'Método no permitido.']);
exit;
