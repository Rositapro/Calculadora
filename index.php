<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <!-- Viewport optimized for iOS, preventing auto-zoom on input focus -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    
    <!-- PWA / Apple iOS Web App Meta Tags -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Kitty Beauty">
    <link rel="apple-touch-icon" href="app-logo.png?v=1.2">
    
    <title>Kitty Beauty - Calculadora de Precios</title>
    
    <!-- Cute Favicon -->
    <link rel="icon" type="image/png" href="app-logo.png?v=1.2">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="css/styles.css?v=1.1">
</head>
<body>
    <div class="app-container">
        <!-- Brand Header -->
        <header class="app-header">
            <div class="bow-icon left">
                <svg viewBox="0 0 100 100" width="28" height="28">
                    <path fill="#FFB5C5" d="M42,54 L20,85 C18,88 23,91 26,87 L46,58 Z" />
                    <path fill="#FFB5C5" d="M58,54 L80,85 C82,88 77,91 74,87 L54,58 Z" />
                    <path fill="#FF8EA1" d="M50,50 C25,25 10,40 25,65 C35,75 45,60 50,50 Z" />
                    <path fill="#FF8EA1" d="M50,50 C75,25 90,40 75,65 C65,75 55,60 50,50 Z" />
                    <circle fill="#E5C158" cx="50" cy="50" r="8" />
                    <circle fill="#FFF" cx="48" cy="48" r="2.5" opacity="0.6" />
                </svg>
            </div>
            <div class="header-titles">
                <h1>Kitty Beauty</h1>
                <p class="subtitle">Nail Pricing & Calculator</p>
            </div>
            <div class="bow-icon right">
                <svg viewBox="0 0 100 100" width="28" height="28">
                    <path fill="#FFB5C5" d="M42,54 L20,85 C18,88 23,91 26,87 L46,58 Z" />
                    <path fill="#FFB5C5" d="M58,54 L80,85 C82,88 77,91 74,87 L54,58 Z" />
                    <path fill="#FF8EA1" d="M50,50 C25,25 10,40 25,65 C35,75 45,60 50,50 Z" />
                    <path fill="#FF8EA1" d="M50,50 C75,25 90,40 75,65 C65,75 55,60 50,50 Z" />
                    <circle fill="#E5C158" cx="50" cy="50" r="8" />
                    <circle fill="#FFF" cx="48" cy="48" r="2.5" opacity="0.6" />
                </svg>
            </div>
        </header>

        <!-- Navigation Tabs -->
        <nav class="tab-navigation">
            <button class="tab-button active" data-tab="calculator-tab">
                <span class="tab-icon"><i class="bi bi-heart-fill"></i></span>
                Calculadora
            </button>
            <button class="tab-button" data-tab="admin-tab">
                <span class="tab-icon"><i class="bi bi-gear-fill"></i></span>
                Administración
            </button>
        </nav>

        <!-- Main Content Area -->
        <main class="main-content">
            
            <!-- CALCULATOR TAB -->
            <section id="calculator-tab" class="tab-content active">
                
                <!-- Step 1: Technique selection -->
                <div class="card-section">
                    <div class="section-header">
                        <h2>1. Técnica o Servicio Base <i class="bi bi-magic" style="margin-left: 4px; color: var(--accent-pink);"></i></h2>
                        <span class="section-decor"><i class="bi bi-sparkles"></i></span>
                    </div>
                    <div class="base-services-grid" id="techniques-container">
                        <div class="loading-spinner">Cargando técnicas...</div>
                    </div>
                </div>

                <!-- Step 2: Sub-services (e.g. Pedicura types) - Dynamic and Conditionally Visible -->
                <div class="card-section hidden" id="subservices-card-section">
                    <div class="section-header">
                        <h2>2. Tipo de Servicio <i class="bi bi-flower1" style="margin-left: 4px; color: var(--accent-pink);"></i></h2>
                        <span class="section-decor"><i class="bi bi-sparkles"></i></span>
                    </div>
                    <div class="base-services-grid" id="subservices-container">
                        <!-- Loaded dynamically -->
                    </div>
                </div>

                <!-- Step 3: Length Selection - Dynamic and Conditionally Visible -->
                <div class="card-section hidden" id="lengths-card-section">
                    <div class="section-header">
                        <h2>2. Largo de Uñas <i class="bi bi-rulers" style="margin-left: 4px; color: var(--accent-pink);"></i></h2>
                        <span class="section-decor"><i class="bi bi-sparkles"></i></span>
                    </div>
                    <div class="lengths-grid" id="lengths-container">
                        <!-- Loaded dynamically -->
                    </div>
                </div>

                <!-- Step 4: Shapes - Dynamic and Conditionally Visible -->
                <div class="card-section hidden" id="shapes-card-section">
                    <div class="section-header">
                        <h2>3. Punta de Salón <i class="bi bi-gem" style="margin-left: 4px; color: var(--accent-pink);"></i></h2>
                        <span class="section-decor"><i class="bi bi-sparkles"></i></span>
                    </div>
                    <div class="shapes-grid" id="shapes-container">
                        <!-- Loaded dynamically -->
                    </div>
                </div>

                <!-- Step 5: Tones Extra & Retiros -->
                <div class="card-section">
                    <div class="section-header">
                        <h2>4. Tonos Extra y Retiros <i class="bi bi-palette" style="margin-left: 4px; color: var(--accent-pink);"></i></h2>
                        <span class="section-decor"><i class="bi bi-sparkles"></i></span>
                    </div>
                    <div class="extras-block">
                        <!-- Extra tones counter -->
                        <div class="extra-row">
                            <div class="extra-info-col">
                                <span class="extra-title"><i class="bi bi-palette" style="margin-right: 4px;"></i> Tonos Extra</span>
                                <span class="extra-desc">+$5.00 por cada tono adicional</span>
                            </div>
                            <div class="qty-controls">
                                <button type="button" class="qty-btn" id="tone-btn-minus">−</button>
                                <span class="qty-val" id="tone-qty-display">0</span>
                                <button type="button" class="qty-btn" id="tone-btn-plus">+</button>
                            </div>
                        </div>

                        <!-- Removals (Retiros) -->
                        <div class="extra-row-vertical">
                            <span class="extra-title"><i class="bi bi-trash" style="margin-right: 4px;"></i> Retiros de Esmalte/Acrílico</span>
                            <div class="retiro-selectors">
                                <div class="retiro-group">
                                    <label for="select-retiro-gel">Retiro de Gel:</label>
                                    <select id="select-retiro-gel" class="cute-select">
                                        <option value="ninguno">No requiere</option>
                                        <option value="propio">Trabajo Propio ($50)</option>
                                        <option value="ajeno">Trabajo Ajeno ($60)</option>
                                    </select>
                                </div>
                                <div class="retiro-group">
                                    <label for="select-retiro-acrilico">Retiro de Acrílico:</label>
                                    <select id="select-retiro-acrilico" class="cute-select">
                                        <option value="ninguno">No requiere</option>
                                        <option value="propio">Trabajo Propio ($100)</option>
                                        <option value="ajeno">Trabajo Ajeno ($120)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 6: Decoration per nail -->
                <div class="card-section">
                    <div class="section-header">
                        <h2>5. Catálogo de Decoración <i class="bi bi-stars" style="margin-left: 4px; color: var(--accent-pink);"></i></h2>
                        <span class="section-decor"><i class="bi bi-sparkles"></i></span>
                    </div>
                    <!-- 2 columns Grid of all decorations -->
                    <div class="base-services-grid" id="decorations-grid-container" style="margin-bottom: 20px;">
                        <div class="loading-spinner">Cargando catálogo...</div>
                    </div>
                    
                    <!-- Selected active decorations section -->
                    <div class="active-decorations-wrapper hidden" id="active-decorations-wrapper">
                        <div class="section-header" style="border-top: 1px dashed var(--border-pink); padding-top: 12px; margin-top: 12px; margin-bottom: 12px;">
                            <h3 style="font-size: 13px; font-weight: 700; color: var(--text-dark);"><i class="bi bi-hand-index-thumb" style="margin-right: 4px;"></i> ¿Cuántas uñas decorar?</h3>
                        </div>
                        <div class="effects-list" id="active-decorations-container">
                            <!-- Dynamic rows appear here -->
                        </div>
                    </div>
                </div>

                <!-- Step 7: Additional custom sections -->
                <div class="card-section hidden" id="additionals-card-section">
                    <div class="section-header">
                        <h2>6. Adicionales o Extras <i class="bi bi-plus-circle" style="margin-left: 4px; color: var(--accent-pink);"></i></h2>
                        <span class="section-decor"><i class="bi bi-sparkles"></i></span>
                    </div>
                    <div class="additionals-list" id="additionals-container">
                        <!-- Loaded dynamically -->
                    </div>
                </div>

                <!-- Step 8: Profit Margin slider -->
                <div class="card-section">
                    <div class="section-header">
                        <h2>Ganancia Adicional / Ajustes de Caja <i class="bi bi-graph-up-arrow" style="margin-left: 4px; color: var(--accent-pink);"></i></h2>
                        <span class="section-decor"><i class="bi bi-sparkles"></i></span>
                    </div>
                    <div class="profit-controls">
                        <div class="profit-slider-container">
                            <div class="profit-label">
                                <span>Ganancia Extra:</span>
                                <strong id="profit-percentage-val">+0%</strong>
                            </div>
                            <input type="range" id="profit-slider" min="0" max="100" value="0" step="5" class="cute-slider">
                            <div class="profit-quick-buttons">
                                <button type="button" class="quick-btn" onclick="setQuickProfit(0)">0%</button>
                                <button type="button" class="quick-btn" onclick="setQuickProfit(15)">+15%</button>
                                <button type="button" class="quick-btn" onclick="setQuickProfit(25)">+25%</button>
                                <button type="button" class="quick-btn" onclick="setQuickProfit(50)">+50%</button>
                            </div>
                        </div>

                        <div class="profit-custom-money">
                            <label for="extra-charge">Cargo extra directo ($):</label>
                            <input type="number" id="extra-charge" min="0" placeholder="0" class="cute-input-text">
                        </div>
                    </div>
                </div>
            </section>

            <!-- ADMINISTRATION TAB -->
            <section id="admin-tab" class="tab-content">
                <div class="card-section admin-dashboard">
                    <div class="admin-header">
                        <h2>Panel de Control <i class="bi bi-shield-lock-fill" style="margin-left: 4px; color: var(--accent-gold-dark);"></i></h2>
                        <button type="button" class="action-btn-gold" id="open-add-modal-btn">
                            <span>+ Nuevo Servicio</span>
                        </button>
                    </div>
                    <p class="admin-intro">Administra las técnicas, largos, puntas de salón, decoraciones y retiros. Los cambios se guardarán de forma permanente.</p>

                    <div class="admin-search-bar">
                        <input type="text" id="admin-search" placeholder="Buscar por nombre o categoría..." class="cute-input-text">
                    </div>

                    <div class="admin-list-container">
                        <div class="admin-table-header">
                            <div class="col-name">Nombre / Categoría</div>
                            <div class="col-price">Precio Base</div>
                            <div class="col-actions">Acciones</div>
                        </div>
                        <div id="admin-services-list" class="admin-services-list">
                            <!-- Dynamic admin list will load here -->
                            <div class="loading-spinner">Cargando catálogo...</div>
                        </div>
                    </div>

                    <!-- Factory Reset Card -->
                    <div class="danger-zone-card">
                        <h3>Restablecer Valores Predeterminados</h3>
                        <p>Si deseas borrar tus cambios y volver a los precios base del menú original de Kitty Beauty:</p>
                        <div class="danger-buttons">
                            <button type="button" class="danger-btn" id="reset-catalog-btn">Restablecer Menú Completo</button>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <!-- Floating Live Total Bar -->
        <footer class="live-total-bar">
            <div class="total-info">
                <span class="total-label">TOTAL ESTIMADO</span>
                <span class="total-amount" id="grand-total">$0.00</span>
            </div>
            <div class="total-actions">
                <button type="button" class="total-reset-btn" id="btn-clear-calculator" title="Limpiar selección">
                    <i class="bi bi-arrow-counterclockwise"></i>
                </button>
                <button type="button" class="total-submit-btn" id="btn-show-summary">
                    Ver Ticket <i class="bi bi-receipt" style="margin-left: 4px;"></i>
                </button>
            </div>
        </footer>
    </div>

    <!-- MODAL: ADD/EDIT SERVICE -->
    <div id="service-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modal-title">Agregar Servicio</h3>
                <span class="close-modal-btn" id="close-service-modal-btn">&times;</span>
            </div>
            <form id="service-form" class="cute-form">
                <input type="hidden" id="service-id">
                
                <div class="form-group">
                    <label for="service-name">Nombre del servicio, diseño o técnica:</label>
                    <input type="text" id="service-name" required placeholder="Ej. Acripie o Efecto Aurora" class="cute-input-text">
                </div>

                <div class="form-group">
                    <label for="service-category">Categoría:</label>
                    <select id="service-category" class="cute-select">
                        <option value="tecnica">Técnica o Servicio Base</option>
                        <option value="decoracion">Decoración / Arte (Por uña)</option>
                        <option value="punta">Punta de Salón</option>
                        <option value="retiro">Opción de Retiro</option>
                        <option value="adicional">Otros Adicionales / Extras</option>
                    </select>
                </div>

                <!-- TECHNIQUE-SPECIFIC SETTINGS -->
                <div id="tech-settings-block" class="admin-special-block">
                    <div class="form-group-row">
                        <div class="form-group flex-center-y">
                            <label class="checkbox-container">
                                <input type="checkbox" id="tech-is-foot">
                                <span class="checkmark"></span>
                                ¿Es para pies? (Oculta largos/puntas)
                            </label>
                        </div>
                        <div class="form-group flex-center-y">
                            <label class="checkbox-container">
                                <input type="checkbox" id="tech-use-lengths">
                                <span class="checkmark"></span>
                                ¿Tiene escala de largos?
                            </label>
                        </div>
                    </div>

                    <!-- Input for fixed price if technique doesn't use length -->
                    <div class="form-group" id="tech-fixed-price-group">
                        <label for="tech-price">Precio Fijo de la Técnica ($):</label>
                        <input type="number" id="tech-price" min="0" placeholder="Ej. 180" class="cute-input-text">
                    </div>

                    <!-- Dynamic lengths management inside technique -->
                    <div class="form-group hidden" id="tech-lengths-manager">
                        <label>Escala de Largos y Precios:</label>
                        <div id="lengths-list-container" class="admin-dynamic-rows">
                            <!-- Dynamic inputs loaded via JS -->
                        </div>
                        <button type="button" class="action-btn-gold" id="btn-add-length-row" style="margin-top: 8px;">
                            + Agregar Largo
                        </button>
                    </div>

                    <!-- Dynamic subservices (like pedicura types) -->
                    <div class="form-group flex-center-y" id="tech-has-subs-check">
                        <label class="checkbox-container">
                            <input type="checkbox" id="tech-has-subservices">
                            <span class="checkmark"></span>
                            ¿Tiene sub-servicios? (Ej. Pedicura Jelly Spa)
                        </label>
                    </div>

                    <div class="form-group hidden" id="tech-subservices-manager">
                        <label>Tipos de Sub-servicios y Precios:</label>
                        <div id="subservices-list-container" class="admin-dynamic-rows">
                            <!-- Dynamic inputs loaded via JS -->
                        </div>
                        <button type="button" class="action-btn-gold" id="btn-add-sub-row" style="margin-top: 8px;">
                            + Agregar Sub-servicio
                        </button>
                    </div>
                </div>

                <!-- STANDARD DECORATION/SHAPE/RETIRO/ADICIONAL SETTINGS -->
                <div id="standard-settings-block">
                    <div class="form-group-row">
                        <div class="form-group" id="std-unit-group">
                            <label for="service-unit">Unidad de cobro:</label>
                            <select id="service-unit" class="cute-select">
                                <option value="c/u">Por uña (c/u)</option>
                                <option value="set">Por set completo</option>
                            </select>
                        </div>

                        <div class="form-group flex-center-y" id="std-range-check-group">
                            <label class="checkbox-container">
                                <input type="checkbox" id="service-is-range">
                                <span class="checkmark"></span>
                                ¿Tiene rango de precios?
                            </label>
                        </div>
                    </div>

                    <!-- Price Standard -->
                    <div class="form-group" id="price-standard-group">
                        <label for="service-price">Precio ($):</label>
                        <input type="number" id="service-price" min="0" placeholder="Ej. 15" class="cute-input-text">
                    </div>

                    <!-- Price Range -->
                    <div class="form-group-row hidden" id="price-range-group">
                        <div class="form-group">
                            <label for="service-price-min">Precio Mínimo ($):</label>
                            <input type="number" id="service-price-min" min="0" placeholder="Ej. 10" class="cute-input-text">
                        </div>
                        <div class="form-group">
                            <label for="service-price-max">Precio Máximo ($):</label>
                            <input type="number" id="service-price-max" min="0" placeholder="Ej. 50" class="cute-input-text">
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn-cancel" id="cancel-service-modal-btn">Cancelar</button>
                    <button type="submit" class="btn-submit">Guardar Servicio 💖</button>
                </div>
            </form>
        </div>
    </div>

    <!-- MODAL: RECEIPT SUMMARY (TICKET) -->
    <div id="summary-modal" class="modal">
        <div class="modal-content receipt-theme">
            <!-- Decorative Serrated Bow Header -->
            <div class="receipt-bow">
                <svg viewBox="0 0 100 100" width="60" height="60">
                    <path fill="#FFB5C5" d="M42,54 L20,85 C18,88 23,91 26,87 L46,58 Z" />
                    <path fill="#FFB5C5" d="M58,54 L80,85 C82,88 77,91 74,87 L54,58 Z" />
                    <path fill="#FF8EA1" d="M50,50 C25,25 10,40 25,65 C35,75 45,60 50,50 Z" />
                    <path fill="#FF8EA1" d="M50,50 C75,25 90,40 75,65 C65,75 55,60 50,50 Z" />
                    <circle fill="#E5C158" cx="50" cy="50" r="8" />
                    <circle fill="#FFF" cx="48" cy="48" r="2.5" opacity="0.6" />
                </svg>
            </div>
            
            <div class="receipt-paper">
                <div class="receipt-header">
                    <h3>Kitty Beauty</h3>
                    <p>Cotización de Diseño</p>
                    <div class="receipt-date" id="receipt-date">--/--/----</div>
                </div>

                <div class="receipt-divider"></div>

                <!-- Detailed Breakdown -->
                <div class="receipt-body" id="receipt-items-container">
                    <!-- Dynamic ticket lines here -->
                </div>

                <div class="receipt-divider"></div>

                <!-- Totals -->
                <div class="receipt-totals">
                    <div class="receipt-row font-normal">
                        <span>Subtotal:</span>
                        <span id="receipt-subtotal">$0.00</span>
                    </div>
                    <div class="receipt-row font-normal hidden" id="receipt-profit-row">
                        <span>Ganancia Extra (<span id="receipt-profit-pct">0%</span>):</span>
                        <span id="receipt-profit-amount">$0.00</span>
                    </div>
                    <div class="receipt-row font-normal hidden" id="receipt-fixed-row">
                        <span>Cargo Fijo Extra:</span>
                        <span id="receipt-fixed-amount">$0.00</span>
                    </div>
                    <div class="receipt-row receipt-grand-total">
                        <span>TOTAL:</span>
                        <span id="receipt-total">$0.00</span>
                    </div>
                </div>

                <div class="receipt-divider"></div>

                <div class="receipt-footer">
                    <p id="receipt-love-footer">Uñas hermosas hechas con amor <i class="bi bi-heart-fill" style="color: var(--accent-pink-dark);"></i></p>
                    <p class="receipt-watermark">Generado por Kitty Beauty App</p>
                </div>
            </div>

            <!-- Modal Action Buttons -->
            <div class="modal-footer receipt-actions">
                <button type="button" class="btn-whatsapp" id="btn-copy-whatsapp">
                    <span>Copiar para WhatsApp <i class="bi bi-whatsapp" style="margin-left: 4px;"></i></span>
                </button>
                <button type="button" class="btn-close-receipt" id="close-summary-modal-btn">
                    Cerrar
                </button>
            </div>
        </div>
    </div>

    <!-- Toast Notification for mobile feedback -->
    <div id="toast" class="toast hidden">Mensaje</div>

    <!-- App Script -->
    <script src="js/app.js?v=1.1"></script>
</body>
</html>
