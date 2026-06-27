<?php
// Recibimos los datos
$nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
$telefono = isset($_POST['telefono']) ? trim($_POST['telefono']) : '';
$id_servicio = isset($_POST['id_servicio']) ? trim($_POST['id_servicio']) : '';
$fecha = isset($_POST['fecha']) ? trim($_POST['fecha']) : '';
$hora = isset($_POST['hora']) ? trim($_POST['hora']) : '';

// 1. Encontrar nombre del servicio a partir del id
$nombre_servicio = 'Servicio Personalizado';
$services_json = @file_get_contents('services.json');
if ($services_json !== false) {
    $services_data = json_decode($services_json, true);
    if (is_array($services_data)) {
        foreach ($services_data as $service) {
            if ($service['id'] === $id_servicio) {
                $nombre_servicio = $service['name'];
                break;
            }
        }
    }
}

// 2. Cargar citas existentes de citas.json
$citas = [];
$citas_file = 'citas.json';
if (file_exists($citas_file)) {
    $citas_json = @file_get_contents($citas_file);
    if ($citas_json !== false) {
        $citas = json_decode($citas_json, true);
        if (!is_array($citas)) {
            $citas = [];
        }
    }
}

// 3. Crear nueva cita
$id_cita = uniqid('cita_');
$nueva_cita = [
    'id_cita' => $id_cita,
    'nombre_completo' => $nombre,
    'telefono' => $telefono,
    'id_servicio' => $id_servicio,
    'nombre_servicio' => $nombre_servicio,
    'fecha_cita' => $fecha,
    'hora_cita' => $hora,
    'estado' => 'Pendiente',
    'creada_en' => date('Y-m-d H:i:s')
];

// 4. Guardar en citas.json
$citas[] = $nueva_cita;
@file_put_contents($citas_file, json_encode($citas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Cita Agendada! | Kitty Beauty</title>
    
    <!-- Cute Favicon -->
    <link rel="icon" type="image/png" href="app-logo.png?v=1.2">

    <link rel="stylesheet" href="css/inicio.css?v=1.2">
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .exito-card {
            text-align: center;
            padding: 50px 30px;
            max-width: 450px;
            width: 100%;
            border-radius: 40px;
            z-index: 10;
        }

        .flower-icon {
            font-size: 60px;
            margin-bottom: 20px;
            display: inline-block;
            animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

        h2 {
            font-family: 'Great Vibes', cursive;
            color: #ad1457;
            font-size: 3.8rem;
            margin-bottom: 10px;
        }

        p {
            color: #37474f;
            font-size: 1.15rem;
            margin-bottom: 30px;
            line-height: 1.5;
        }

        .btn-principal {
            display: block;
            background: #ad1457;
            color: white;
            padding: 14px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 15px;
            transition: all 0.3s;
        }

        .btn-principal:hover {
            background: #e91e63;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(173, 20, 87, 0.2);
        }
        
        .link-otra {
            color: #ad1457;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: bold;
            transition: 0.3s;
        }
        
        .link-otra:hover {
            color: #e91e63;
        }
    </style>
</head>
<body>
    <div class="sakura-container" id="sakura-container"></div>
    
    <div class="glass-card exito-card animation-fadeIn">
        <span class="flower-icon">🌸</span>
        <h2>¡Cita Agendada!</h2>
        <p>Gracias <strong><?php echo htmlspecialchars($nombre); ?></strong>.<br>Hemos registrado tu cita de <strong><?php echo htmlspecialchars($nombre_servicio); ?></strong> para el día <strong><?php echo date('d/m/Y', strtotime($fecha)); ?></strong> a las <strong><?php echo date('g:i a', strtotime($hora)); ?></strong>.</p>
        
        <a href="index.php" class="btn-principal"><i class="bi bi-house-door-fill"></i> Volver al Inicio</a>
        <a href="agendar.php" class="link-otra">Agendar otra cita</a>
    </div>

    <script src="js/sakura.js"></script>
</body>
</html>
