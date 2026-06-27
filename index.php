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

// Si está vacío, usar técnicas predeterminadas para que no se vea vacío
if (empty($techniques)) {
    $techniques = [
        ['name' => 'Esculpidas y Nail Art', 'price' => 350],
        ['name' => 'Pedicura Ritual Spa', 'price' => 280],
        ['name' => 'Mirada de Impacto', 'price' => 450]
    ];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kitty Beauty | El Arte de Resaltar tu Belleza</title>
    
    <!-- Cute Favicon -->
    <link rel="icon" type="image/png" href="app-logo.png?v=1.2">

    <link rel="stylesheet" href="css/inicio.css?v=1.2">
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Quicksand:wght@300;400;500;700&display=swap" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
    <style>
        .nav-links li a:hover {
            color: var(--pink-medium);
        }
        
        .catalogue-grid {
            margin-top: 30px;
        }
        
        .contact-list li {
            font-size: 1.1rem;
            margin-bottom: 12px;
            color: var(--text-dark);
        }
        
        .hero-content {
            z-index: 10;
            background: rgba(255, 255, 255, 0.45);
            padding: 40px;
            border-radius: 30px;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 10px 30px rgba(173, 20, 87, 0.05);
        }
        
        /* Responsive navigation styling */
        @media (max-width: 768px) {
            .navbar {
                padding: 0 20px;
            }
            .nav-links {
                gap: 15px;
            }
            .nav-links a {
                font-size: 0.9rem;
            }
            .main-title {
                font-size: 4.5rem;
            }
            .content-grid, .catalogue-grid, .contact-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            .section-container {
                padding: 40px 20px;
            }
            .hero {
                padding: 0 20px;
            }
        }
    </style>
</head>
<body>

    <div class="sakura-container" id="sakura-container"></div>

    <nav class="navbar glass-effect">
        <div class="nav-logo">KB</div>
        <ul class="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="calculadora.php" style="color: #ad1457; font-weight: bold;"><i class="bi bi-heart-fill"></i> Calculadora</a></li>
            <li><a href="agendar.php" style="color: #ad1457; font-weight: bold;"><i class="bi bi-calendar-heart-fill"></i> Citas</a></li>
        </ul>
    </nav>

    <header id="inicio" class="hero">
        <div class="hero-content animation-fadeIn">
            <h1 class="main-title">Kitty Beauty</h1>
            <p class="subtitle" style="font-size: 1.3rem; margin-bottom: 20px; font-weight: 500;">Donde cada detalle florece en arte y bienestar.</p>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <a href="calculadora.php" class="btn-primary" style="background: #e91e63;"><i class="bi bi-heart-fill"></i> Calcular Presupuesto</a>
                <a href="agendar.php" class="btn-primary" style="background: #ad1457;"><i class="bi bi-calendar-heart-fill"></i> Agendar Cita</a>
            </div>
        </div>
    </header>

    <main>
        <section id="nosotros" class="glass-card section-container" style="margin: 0 20px; margin-bottom: 60px;">
            <h2 class="section-title cursive">Nuestra Esencia</h2>
            <div class="content-grid">
                <div class="text-block" style="padding: 10px;">
                    <h3 style="color: #ad1457; margin-bottom: 10px; font-weight: 700;">¿Quiénes Somos?</h3>
                    <p>Kitty Beauty es un rincón de creatividad nacido del amor por el arte en miniatura. Nos especializamos en transformar tus manos y pies en lienzos que reflejen tu personalidad única.</p>
                </div>
                <div class="text-block" style="padding: 10px;">
                    <h3 style="color: #ad1457; margin-bottom: 10px; font-weight: 700;">Identidad y Propósito</h3>
                    <p>Nuestra misión es fusionar la estética de fantasía con la salud de tus uñas. Queremos ser tu espacio de desconexión donde la creatividad no tiene límites.</p>
                </div>
            </div>
        </section>

        <section id="catalogo" class="section-container">
            <h2 class="section-title cursive text-center" style="margin-bottom: 15px;">Catálogo de Servicios</h2>
            <p class="text-center" style="color: var(--text-light); max-width: 600px; margin: 0 auto 30px auto; font-weight: 500;">
                Explora nuestras técnicas principales. Puedes usar nuestra calculadora para cotizar diseños personalizados detalladamente.
            </p>
            
            <div class="catalogue-grid">
                <?php foreach ($techniques as $tech): ?>
                    <div class="glass-card service-card">
                        <?php 
                            // Elegir imagen personalizada si existe, si no, usar imágenes representativas predeterminadas
                            if (!empty($tech['image'])) {
                                $img_url = $tech['image'];
                            } else {
                                $img_url = 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400';
                                if (stripos($tech['name'], 'pie') !== false || stripos($tech['name'], 'pedi') !== false) {
                                    $img_url = 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=400';
                                } else if (stripos($tech['name'], 'pesta') !== false || stripos($tech['name'], 'lash') !== false) {
                                    $img_url = 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=400';
                                } else if (stripos($tech['name'], 'acril') !== false || stripos($tech['name'], 'gel') !== false) {
                                    $img_url = 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=400';
                                }
                            }
                        ?>
                        <img src="<?php echo $img_url; ?>" alt="<?php echo htmlspecialchars($tech['name']); ?>">
                        <div class="card-content" style="padding: 20px;">
                            <h4 style="font-size: 1.2rem; color: #ad1457; margin-bottom: 10px; font-weight: 700;"><?php echo htmlspecialchars($tech['name']); ?></h4>
                            <p style="font-size: 0.95rem; color: #37474f;">
                                <?php if (isset($tech['use_lengths']) && $tech['use_lengths']): ?>
                                    Los precios varían según el largo. ¡Consulta nuestra calculadora para cotizar tu medida!
                                <?php elseif (isset($tech['has_subservices']) && $tech['has_subservices']): ?>
                                    Contamos con diferentes variedades y tarifas para este servicio.
                                <?php else: ?>
                                    Precio base: $<?php echo number_format($tech['price'], 2); ?>
                                <?php endif; ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>

        <section id="contacto" class="glass-card section-container" style="margin: 60px 20px;">
            <h2 class="section-title cursive">Ubicación y Contacto</h2>
            <div class="contact-grid">
                <div class="contact-text" style="display: flex; align-items: center;">
                    <ul class="contact-list" style="list-style: none; padding: 0;">
                        <li><i class="bi bi-geo-alt-fill" style="color: #ad1457; margin-right: 8px;"></i> Privada San José 124 B, Col. Pedregal de San Ángel, Monclova, Coahuila.</li>
                        <li><i class="bi bi-whatsapp" style="color: #4caf50; margin-right: 8px;"></i> WhatsApp: +52 866 204 7750</li>
                        <li><i class="bi bi-clock-fill" style="color: #ad1457; margin-right: 8px;"></i> Lun - Sáb: 10:00 AM - 8:00 PM</li>
                    </ul>
                </div>
                <div class="map-container">
                    <iframe src="https://maps.google.com/maps?q=privada%20san%20jose%20124%20b%20colonia%20pedregal%20de%20san%20angel%20monclova%20coahuila&t=&z=17&ie=UTF8&iwloc=&output=embed" width="100%" height="300" style="border:0; border-radius: 15px;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    </main>

    <footer class="main-footer" style="text-align: center; padding: 20px;">
        <p>© 2026 Kitty Beauty. Monclova, Coahuila. Hecho con amor 💖</p>
    </footer>

    <script src="js/sakura.js"></script>
</body>
</html>
