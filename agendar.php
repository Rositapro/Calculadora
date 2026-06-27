<?php
// Cargar servicios dinámicamente de services.json
$services_json = @file_get_contents('services.json');
$techniques = [];

if ($services_json !== false) {
    $services_data = json_decode($services_json, true);
    if (is_array($services_data)) {
        foreach ($services_data as $service) {
            if (isset($service['category']) && $service['category'] === 'tecnica') {
                $techniques[] = $service;
            }
        }
    }
}

// Si está vacío, usar técnicas predeterminadas
if (empty($techniques)) {
    $techniques = [
        ['id' => 'tech-acrilicas', 'name' => 'Esculpidas y Nail Art'],
        ['id' => 'tech-pedicura', 'name' => 'Pedicura Ritual Spa'],
        ['id' => 'tech-pestanas', 'name' => 'Mirada de Impacto']
    ];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kitty Beauty - Agendar Cita</title>
    
    <!-- Cute Favicon -->
    <link rel="icon" type="image/png" href="app-logo.png?v=1.2">

    <link rel="stylesheet" href="css/inicio.css?v=1.2">
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 80px 20px 40px 20px;
        }

        .contenedor-formulario {
            width: 100%;
            max-width: 500px;
            padding: 35px;
            z-index: 10;
        }

        .campo {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .campo label {
            font-size: 0.95rem;
            font-weight: 700;
            color: #ad1457;
        }

        .campo input, .campo select {
            padding: 12px 15px;
            border-radius: 15px;
            border: 1px solid rgba(240, 98, 146, 0.4);
            background: rgba(255, 255, 255, 0.7);
            font-family: 'Quicksand', sans-serif;
            font-size: 1rem;
            color: #37474f;
            outline: none;
            transition: all 0.3s;
        }

        .campo input:focus, .campo select:focus {
            border-color: #ad1457;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 10px rgba(173, 20, 87, 0.1);
        }

        .fila-doble {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        button[type="submit"] {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 20px;
            background: #ad1457;
            color: white;
            font-family: 'Quicksand', sans-serif;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
        }

        button[type="submit"]:hover {
            background: #e91e63;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(173, 20, 87, 0.2);
        }

        .btn-regresar {
            position: fixed;
            top: 20px;
            left: 20px;
            text-decoration: none;
            color: #ad1457;
            font-weight: bold;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.85);
            padding: 8px 15px;
            border-radius: 12px;
            border: 1px solid rgba(240, 98, 146, 0.3);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: 0.3s;
        }

        .btn-regresar:hover {
            background: white;
            transform: translateX(-3px);
        }
    </style>
</head>
<body>

    <a href="index.php" class="btn-regresar"><i class="bi bi-arrow-left"></i> Volver al Inicio</a>

    <div class="glass-card contenedor-formulario animation-fadeIn">
        <h1 style="font-family: 'Great Vibes', cursive; color: #ad1457; text-align: center; margin-bottom: 5px; font-size: 3.5rem;">Kitty Beauty</h1>
        <p style="text-align: center; color: #616161; font-size: 0.95rem; font-weight: 500; margin-bottom: 25px;">Agendar Cita</p>
        
        <form action="procesar_cita.php" method="POST">
            
            <div class="campo">
                <label><i class="bi bi-person-fill"></i> Nombre Completo</label>
                <input type="text" name="nombre" required placeholder="Tu nombre y apellido">
            </div>

            <div class="campo">
                <label><i class="bi bi-telephone-fill"></i> Teléfono</label>
                <input type="tel" name="telefono" required placeholder="Ej. 866 123 4567">
            </div>

            <div class="campo">
                <label><i class="bi bi-magic"></i> Servicio</label>
                <select name="id_servicio" required>
                    <option value="">Selecciona un servicio</option>
                    <?php foreach ($techniques as $tech): ?>
                        <option value="<?php echo htmlspecialchars($tech['id']); ?>">
                            <?php echo htmlspecialchars($tech['name']); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>

            <div class="fila-doble">
                <div class="campo">
                    <label><i class="bi bi-calendar-event"></i> Fecha</label>
                    <input type="date" name="fecha" required min="<?php echo date('Y-m-d'); ?>">
                </div>
                <div class="campo">
                    <label><i class="bi bi-clock"></i> Hora</label>
                    <input type="time" name="hora" required>
                </div>
            </div>

            <button type="submit"><i class="bi bi-calendar-check-fill"></i> Confirmar Cita 🌸</button>
        </form>
    </div>

    <script src="js/sakura.js"></script>
</body>
</html>
