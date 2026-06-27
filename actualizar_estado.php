<?php
if (isset($_GET['id']) && isset($_GET['estado'])) {
    $id = $_GET['id'];
    $estado = $_GET['estado'];
    
    $citas_file = 'citas.json';
    if (file_exists($citas_file)) {
        $citas_json = @file_get_contents($citas_file);
        if ($citas_json !== false) {
            $citas = json_decode($citas_json, true);
            if (is_array($citas)) {
                $updated = false;
                if ($estado === 'delete') {
                    // Eliminar la cita
                    $citas = array_values(array_filter($citas, function($c) use ($id) {
                        return $c['id_cita'] !== $id;
                    }));
                    $updated = true;
                } else {
                    // Actualizar estado
                    foreach ($citas as &$c) {
                        if ($c['id_cita'] === $id) {
                            $c['estado'] = $estado;
                            $updated = true;
                            break;
                        }
                    }
                }
                if ($updated) {
                    @file_put_contents($citas_file, json_encode($citas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
                }
            }
        }
    }
}

// Redirigir de vuelta al panel con parámetro para abrir la pestaña de administración en el subtab de citas
header("Location: calculadora.php?tab=admin&subtab=appointments");
exit();
?>
