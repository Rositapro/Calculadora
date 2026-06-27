/**
 * Kitty Beauty Pricing Calculator - Advanced Core Logic
 */

// Initial default catalog with new requirements preloaded
const DEFAULT_CATALOG = [
    {
        "id": "tecnica_acrilico",
        "name": "Uñas Acrílicas",
        "category": "tecnica",
        "price": 0,
        "useLength": true,
        "isFoot": false,
        "lengths": [
            { "name": "Minis", "price": 250 },
            { "name": "1-2 Cortas", "price": 280 },
            { "name": "3-4 Media", "price": 300 },
            { "name": "5-6 Larga", "price": 400 },
            { "name": "7-8 Extra Larga", "price": 500 }
        ]
    },
    {
        "id": "tecnica_acrigel",
        "name": "Acrigel",
        "category": "tecnica",
        "price": 0,
        "useLength": true,
        "isFoot": false,
        "lengths": [
            { "name": "Minis", "price": 220 },
            { "name": "1-2 Cortas", "price": 250 },
            { "name": "3-4 Media", "price": 280 }
        ]
    },
    {
        "id": "tecnica_gel_manos",
        "name": "Gel Semipermanente (Manos)",
        "category": "tecnica",
        "price": 180,
        "useLength": false,
        "isFoot": false
    },
    {
        "id": "tecnica_gel_pies",
        "name": "Gel Semipermanente (Pies)",
        "category": "tecnica",
        "price": 220,
        "useLength": false,
        "isFoot": true
    },
    {
        "id": "tecnica_rubber",
        "name": "Rubber con nivelación",
        "category": "tecnica",
        "price": 300,
        "useLength": false,
        "isFoot": false
    },
    {
        "id": "tecnica_bano_acrilico",
        "name": "Baño de acrílico",
        "category": "tecnica",
        "price": 220,
        "useLength": false,
        "isFoot": false
    },
    {
        "id": "tecnica_acripie",
        "name": "Acripie",
        "category": "tecnica",
        "price": 150,
        "useLength": false,
        "isFoot": true
    },
    {
        "id": "tecnica_pedicura",
        "name": "Pedicura",
        "category": "tecnica",
        "price": 0,
        "useLength": false,
        "isFoot": true,
        "subservices": [
            { "name": "Pedicura Clásico", "price": 350 },
            { "name": "Pedicura Jelly Spa", "price": 450 },
            { "name": "Pedicura con Hilo", "price": 550 },
            { "name": "Pedicura Pluss", "price": 600 }
        ]
    },
    { "id": "punta_cuadrada", "name": "Cuadrada", "category": "punta", "price": 0 },
    { "id": "punta_coffin", "name": "Coffin", "category": "punta", "price": 0 },
    { "id": "punta_ballerina", "name": "Ballerina", "category": "punta", "price": 0 },
    { "id": "punta_almendra", "name": "Almendra", "category": "punta", "price": 20 },
    { "id": "punta_stiletto", "name": "Stiletto", "category": "punta", "price": 20 },
    { "id": "decoracion_frances_clasico", "name": "Estilo Francés (Clásico)", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_frances_color", "name": "Estilo Francés (Color)", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_efecto_espejo", "name": "Efecto Espejo", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_efecto_aurora", "name": "Efecto Aurora", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_efecto_perla", "name": "Efecto Perla", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_efecto_camaleon", "name": "Efecto Camaleón", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_efecto_unicornio", "name": "Efecto Unicornio", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_efecto_cateye", "name": "Efecto Cat Eye", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_efecto_glass", "name": "Efecto Glass", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_babyboomer", "name": "Baby Boomer", "category": "decoracion", "price": 15, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_carey", "name": "Carey", "category": "decoracion", "price": 25, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_efecto_aura", "name": "Efecto Aura", "category": "decoracion", "price": 20, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_marmol", "name": "Mármol", "category": "decoracion", "price": 20, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_humo", "name": "Efecto Humo", "category": "decoracion", "price": 20, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_blooming", "name": "Efecto Blooming", "category": "decoracion", "price": 20, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_sweater", "name": "Efecto Sweater", "category": "decoracion", "price": 20, "isRange": false, "unit": "c/u" },
    { "id": "decoracion_relieves", "name": "Relieves (Arte asiático)", "category": "decoracion", "price": 20, "priceMin": 20, "priceMax": 50, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_texturas", "name": "Texturas (Arte asiático)", "category": "decoracion", "price": 20, "priceMin": 20, "priceMax": 50, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_gotas", "name": "Gotas de agua (Arte asiático)", "category": "decoracion", "price": 20, "priceMin": 20, "priceMax": 50, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_anillos", "name": "Anillos (Arte asiático)", "category": "decoracion", "price": 20, "priceMin": 20, "priceMax": 50, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_encapsulado", "name": "Encapsulados", "category": "decoracion", "price": 15, "priceMin": 15, "priceMax": 35, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_mano_alzada", "name": "Diseño a mano alzada", "category": "decoracion", "price": 10, "priceMin": 10, "priceMax": 50, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_cristales", "name": "Cristales", "category": "decoracion", "price": 10, "priceMin": 10, "priceMax": 35, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_pedreria", "name": "Decoración con pedrería", "category": "decoracion", "price": 10, "priceMin": 10, "priceMax": 35, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_3d_flores", "name": "3D Flores", "category": "decoracion", "price": 30, "priceMin": 30, "priceMax": 50, "isRange": true, "unit": "c/u" },
    { "id": "decoracion_3d_figuras", "name": "3D Figuras", "category": "decoracion", "price": 30, "priceMin": 30, "priceMax": 50, "isRange": true, "unit": "c/u" },
    { "id": "retiro_gel_propio", "name": "Retiro Gel (Propio)", "category": "retiro", "price": 50 },
    { "id": "retiro_gel_ajeno", "name": "Retiro Gel (Ajeno)", "category": "retiro", "price": 60 },
    { "id": "retiro_acrilico_propio", "name": "Retiro Acrílico (Propio)", "category": "retiro", "price": 100 },
    { "id": "retiro_acrilico_ajeno", "name": "Retiro Acrílico (Ajeno)", "category": "retiro", "price": 120 }
];

// App State
let services = [];
let selectedTechniqueId = null;
let selectedSubserviceIndex = null;
let selectedLengthIndex = null;
let selectedShapeId = null;
let selectedDecorations = {}; // { id: { qty: X, price: Y } }
let extraTonesCount = 0;
let selectedRetiroGel = "ninguno"; // "ninguno", "propio", "ajeno"
let selectedRetiroAcrilico = "ninguno"; // "ninguno", "propio", "ajeno"
let selectedAdditionals = []; // List of IDs

let profitPercentage = 0;
let fixedExtraCharge = 0;

let useLocalFallback = false;

// Dynamic Rows counters for Admin modal
let adminLengthCounter = 0;
let adminSubCounter = 0;

// DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupEventListeners();
});

// Initialize Application
async function initApp() {
    await loadServices();
    resetCalculatorState();
    
    renderTechniques();
    renderDecorations();
    renderAdditionals();
    renderAdminList();
    calculateTotal();
}

// Load Services
async function loadServices() {
    try {
        const response = await fetch('api.php');
        if (!response.ok) throw new Error('API returned error status');
        services = await response.json();
        useLocalFallback = false;
        console.log('Servicios cargados desde el servidor API PHP.');
    } catch (error) {
        console.warn('No se pudo conectar a api.php. Usando almacenamiento local.', error);
        useLocalFallback = true;
        
        const localData = localStorage.getItem('kitty_beauty_services');
        if (localData) {
            try {
                services = JSON.parse(localData);
            } catch (e) {
                services = [...DEFAULT_CATALOG];
            }
        } else {
            services = [...DEFAULT_CATALOG];
            localStorage.setItem('kitty_beauty_services', JSON.stringify(services));
        }
    }
}

// Save Services
async function saveServices() {
    if (useLocalFallback) {
        localStorage.setItem('kitty_beauty_services', JSON.stringify(services));
        showToast('Guardado localmente en este dispositivo <i class="bi bi-cloud-check-fill" style="margin-left: 4px; color: var(--accent-pink-light);"></i>');
        return true;
    }
    
    try {
        const response = await fetch('api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(services)
        });
        
        const result = await response.json();
        if (result.success) {
            showToast('Catálogo guardado de forma permanente <i class="bi bi-check-circle-fill" style="margin-left: 4px; color: var(--accent-pink-light);"></i>');
            return true;
        } else {
            throw new Error(result.error || 'Error al guardar');
        }
    } catch (error) {
        console.error('Error al guardar en servidor:', error);
        showToast('Error de conexión. Se guardó localmente como respaldo.', true);
        localStorage.setItem('kitty_beauty_services', JSON.stringify(services));
        return true;
    }
}

// Reset State
function resetCalculatorState() {
    selectedTechniqueId = null;
    selectedSubserviceIndex = null;
    selectedLengthIndex = null;
    selectedShapeId = null;
    extraTonesCount = 0;
    selectedRetiroGel = "ninguno";
    selectedRetiroAcrilico = "ninguno";
    selectedAdditionals = [];
    
    document.getElementById('tone-qty-display').textContent = '0';
    document.getElementById('select-retiro-gel').value = 'ninguno';
    document.getElementById('select-retiro-acrilico').value = 'ninguno';
    
    selectedDecorations = {};
    services.forEach(s => {
        if (s.category === 'decoracion') {
            selectedDecorations[s.id] = {
                qty: 0,
                prices: []
            };
        }
    });
    
    profitPercentage = 0;
    fixedExtraCharge = 0;
    
    const slider = document.getElementById('profit-slider');
    if (slider) slider.value = 0;
    
    const pctVal = document.getElementById('profit-percentage-val');
    if (pctVal) pctVal.textContent = '+0%';
    
    const extraInput = document.getElementById('extra-charge');
    if (extraInput) extraInput.value = '';
    
    // Hide dependent blocks
    document.getElementById('subservices-card-section').classList.add('hidden');
    document.getElementById('lengths-card-section').classList.add('hidden');
    document.getElementById('shapes-card-section').classList.add('hidden');
}

// Render Step 1: Techniques
function renderTechniques() {
    const container = document.getElementById('techniques-container');
    if (!container) return;
    
    const techniques = services.filter(s => s.category === 'tecnica');
    
    if (techniques.length === 0) {
        container.innerHTML = '<div class="loading-spinner">No hay técnicas registradas.</div>';
        return;
    }
    
    container.innerHTML = '';
    
    techniques.forEach(tech => {
        const card = document.createElement('div');
        card.className = `base-service-card ${selectedTechniqueId === tech.id ? 'selected' : ''}`;
        
        let priceLabel = tech.price > 0 ? `$${tech.price}` : 'Según largo';
        if (tech.subservices && tech.subservices.length > 0) {
            priceLabel = 'Varios precios';
        }
        
        card.innerHTML = `
            <div class="card-select-badge">✓</div>
            <div class="card-name">${escapeHTML(tech.name)}</div>
            <div class="card-price">${priceLabel}</div>
        `;
        
        card.addEventListener('click', () => {
            if (selectedTechniqueId === tech.id) {
                // Deselect
                selectedTechniqueId = null;
                selectedSubserviceIndex = null;
                selectedLengthIndex = null;
                selectedShapeId = null;
            } else {
                selectedTechniqueId = tech.id;
                selectedSubserviceIndex = null;
                selectedLengthIndex = null;
                selectedShapeId = null;
            }
            
            // Apply filtering logic based on chosen technique
            handleTechniqueTransition(tech);
            renderTechniques();
            calculateTotal();
        });
        
        container.appendChild(card);
    });
}

// Handle Visibility & Transition logic when a technique is clicked
function handleTechniqueTransition(tech) {
    const subCard = document.getElementById('subservices-card-section');
    const lenCard = document.getElementById('lengths-card-section');
    const shpCard = document.getElementById('shapes-card-section');
    
    if (!selectedTechniqueId) {
        subCard.classList.add('hidden');
        lenCard.classList.add('hidden');
        shpCard.classList.add('hidden');
        return;
    }
    
    // 1. Subservices (like Pedicuras)
    if (tech.subservices && tech.subservices.length > 0) {
        subCard.classList.remove('hidden');
        renderSubservices(tech.subservices);
    } else {
        subCard.classList.add('hidden');
    }
    
    // 2. Foot / Length / Shape conditions
    const isFoot = tech.isFoot === true;
    const usesLength = tech.useLength === true;
    
    if (isFoot) {
        // Hides lengths and shapes for feet services (Pedicura, Acripie, Gel pies)
        lenCard.classList.add('hidden');
        shpCard.classList.add('hidden');
    } else if (usesLength) {
        // Shows lengths and shapes for Acrylic, Acrigel
        lenCard.classList.remove('hidden');
        shpCard.classList.remove('hidden');
        renderLengths(tech.lengths);
        renderShapes();
    } else {
        // Flat manos services like Gel manos, Rubber (hide length/shapes)
        lenCard.classList.add('hidden');
        shpCard.classList.add('hidden');
    }
}

// Render Step 2: Subservices
function renderSubservices(subservicesList) {
    const container = document.getElementById('subservices-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    subservicesList.forEach((sub, index) => {
        const card = document.createElement('div');
        card.className = `base-service-card ${selectedSubserviceIndex === index ? 'selected' : ''}`;
        
        card.innerHTML = `
            <div class="card-select-badge">✓</div>
            <div class="card-name">${escapeHTML(sub.name)}</div>
            <div class="card-price">$${Number(sub.price).toFixed(2)}</div>
        `;
        
        card.addEventListener('click', () => {
            selectedSubserviceIndex = selectedSubserviceIndex === index ? null : index;
            renderSubservices(subservicesList);
            calculateTotal();
        });
        
        container.appendChild(card);
    });
}

// Render Step 3: Lengths
function renderLengths(lengthsList) {
    const container = document.getElementById('lengths-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!lengthsList || lengthsList.length === 0) {
        container.innerHTML = '<div class="loading-spinner">No hay largos registrados para esta técnica.</div>';
        return;
    }
    
    lengthsList.forEach((len, index) => {
        const card = document.createElement('div');
        card.className = `length-card ${selectedLengthIndex === index ? 'selected' : ''}`;
        
        card.innerHTML = `
            <span class="len-name">${escapeHTML(len.name)}</span>
            <span class="len-price">$${Number(len.price).toFixed(2)}</span>
        `;
        
        card.addEventListener('click', () => {
            selectedLengthIndex = selectedLengthIndex === index ? null : index;
            renderLengths(lengthsList);
            calculateTotal();
        });
        
        container.appendChild(card);
    });
}

// Render Step 4: Shapes
function renderShapes() {
    const container = document.getElementById('shapes-container');
    if (!container) return;
    
    const shapes = services.filter(s => s.category === 'punta');
    
    container.innerHTML = '';
    
    shapes.forEach(shape => {
        const card = document.createElement('div');
        card.className = `shape-card ${selectedShapeId === shape.id ? 'selected' : ''}`;
        
        const extraLabel = shape.price > 0 ? `+$${shape.price}` : 'Gratis';
        const extraClass = shape.price > 0 ? '' : 'free';
        
        card.innerHTML = `
            <span class="shp-name">${escapeHTML(shape.name)}</span>
            <span class="shp-price ${extraClass}">${extraLabel}</span>
        `;
        
        card.addEventListener('click', () => {
            selectedShapeId = selectedShapeId === shape.id ? null : shape.id;
            renderShapes();
            calculateTotal();
        });
        
        container.appendChild(card);
    });
}

// Render Step 5: Decorations list
function renderDecorations() {
    const gridContainer = document.getElementById('decorations-grid-container');
    const activeContainer = document.getElementById('active-decorations-container');
    const wrapper = document.getElementById('active-decorations-wrapper');
    if (!gridContainer || !activeContainer || !wrapper) return;
    
    const decors = services.filter(s => s.category === 'decoracion');
    
    if (decors.length === 0) {
        gridContainer.innerHTML = '<div class="loading-spinner">No hay decoraciones en el catálogo.</div>';
        activeContainer.innerHTML = '';
        wrapper.classList.add('hidden');
        return;
    }
    
    // 1. Render Grid Cards (2 columns selection)
    gridContainer.innerHTML = '';
    
    decors.forEach(decor => {
        if (!selectedDecorations[decor.id]) {
            selectedDecorations[decor.id] = { qty: 0, prices: [] };
        }
        
        const state = selectedDecorations[decor.id];
        const isActive = state.qty > 0;
        
        const card = document.createElement('div');
        card.className = `base-service-card ${isActive ? 'selected' : ''}`;
        
        let priceTag = `$${Number(decor.price).toFixed(2)}`;
        if (decor.isRange) {
            priceTag = `$${decor.priceMin}-$${decor.priceMax}`;
        }
        
        card.innerHTML = `
            <div class="card-select-badge">✓</div>
            <div class="card-name">${escapeHTML(decor.name)}</div>
            <div class="card-price">${priceTag}</div>
        `;
        
        card.addEventListener('click', () => {
            if (isActive) {
                // Deactivate: set qty = 0
                state.qty = 0;
                state.prices = [];
            } else {
                // Activate: set qty = 1
                state.qty = 1;
                state.prices = [decor.isRange ? decor.priceMin : decor.price];
            }
            renderDecorations();
            calculateTotal();
        });
        
        gridContainer.appendChild(card);
    });
    
    // 2. Render active counters and sliders below
    activeContainer.innerHTML = '';
    let hasActive = false;
    
    decors.forEach(decor => {
        const state = selectedDecorations[decor.id];
        if (state && state.qty > 0) {
            hasActive = true;
            const isRange = decor.isRange === true;
            
            // Build price sliders per nail if range-priced
            let sliderHtml = '';
            if (isRange && state.prices) {
                sliderHtml = `<div class="nail-sliders-container" id="range-decor-wrap-${decor.id}" style="display: flex; flex-direction: column; gap: 8px; width: 100%; margin-top: 8px; border-top: 1px dashed rgba(255, 142, 161, 0.15); padding-top: 8px;">`;
                state.prices.forEach((price, idx) => {
                    sliderHtml += `
                        <div class="nail-slider-row" style="display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%;">
                            <label style="font-size: 11px; font-weight: 600; min-width: 45px; color: var(--text-muted);">Uña ${idx + 1}:</label>
                            <input type="range" 
                                   class="cute-slider" 
                                   style="flex: 1;"
                                   min="${decor.priceMin}" 
                                   max="${decor.priceMax}" 
                                   value="${price}" 
                                   oninput="updateDecorPrice('${decor.id}', ${idx}, this.value)">
                            <span class="range-price-display" id="decor-price-display-${decor.id}-${idx}" style="font-size: 12px; font-weight: 700; color: var(--accent-pink-dark); min-width: 35px; text-align: right;">$${price}</span>
                        </div>
                    `;
                });
                sliderHtml += `</div>`;
            }
            
            const activeRow = document.createElement('div');
            activeRow.className = 'effect-item';
            activeRow.style.borderColor = 'var(--accent-pink)';
            activeRow.style.background = 'var(--accent-pink-soft)';
            
            let priceLabel = `$${Number(decor.price).toFixed(2)} c/u`;
            if (isRange) {
                priceLabel = `$${decor.priceMin} a $${decor.priceMax} c/u`;
            }
            
            activeRow.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <div>
                        <div class="effect-name" style="font-weight: 700;">${escapeHTML(decor.name)}</div>
                        <span class="effect-badge-price" style="margin-top: 2px;">${priceLabel}</span>
                    </div>
                    <div class="qty-controls">
                        <button type="button" class="qty-btn" onclick="adjustDecorQty('${decor.id}', -1)">−</button>
                        <span class="qty-val" style="width: 25px; text-align: center; font-weight: 700;">${state.qty}</span>
                        <button type="button" class="qty-btn" onclick="adjustDecorQty('${decor.id}', 1)">+</button>
                        <span style="font-size: 12px; color: var(--text-muted); margin-left: 2px; font-weight: 600;">uñas</span>
                    </div>
                </div>
                ${sliderHtml}
            `;
            
            activeContainer.appendChild(activeRow);
        }
    });
    
    // Toggle wrapper visibility
    if (hasActive) {
        wrapper.classList.remove('hidden');
    } else {
        wrapper.classList.add('hidden');
    }
}

// Adjust quantity on decor
window.adjustDecorQty = function(id, direction) {
    if (!selectedDecorations[id]) return;
    
    const decor = services.find(s => s.id === id);
    if (!decor) return;
    
    let current = selectedDecorations[id].qty;
    let next = current + direction;
    
    if (next < 0) next = 0;
    if (next > 10) next = 10;
    
    selectedDecorations[id].qty = next;
    
    // Adjust prices list
    if (direction === 1) {
        selectedDecorations[id].prices.push(decor.isRange ? decor.priceMin : decor.price);
    } else if (direction === -1 && selectedDecorations[id].prices.length > 0) {
        selectedDecorations[id].prices.pop();
    }
    
    renderDecorations();
    calculateTotal();
};

// Update price slider on decor
window.updateDecorPrice = function(id, index, val) {
    if (!selectedDecorations[id] || !selectedDecorations[id].prices) return;
    selectedDecorations[id].prices[index] = Number(val);
    
    const display = document.getElementById(`decor-price-display-${id}-${index}`);
    if (display) display.textContent = `$${val}`;
    
    calculateTotal();
};

// Render Step 7: Additionals / Custom Extras
function renderAdditionals() {
    const container = document.getElementById('additionals-container');
    const cardSection = document.getElementById('additionals-card-section');
    if (!container || !cardSection) return;
    
    const additionals = services.filter(s => s.category === 'adicional');
    
    if (additionals.length === 0) {
        cardSection.classList.add('hidden');
        return;
    }
    
    cardSection.classList.remove('hidden');
    container.innerHTML = '';
    
    additionals.forEach(add => {
        const checked = selectedAdditionals.includes(add.id);
        const row = document.createElement('div');
        row.className = 'add-item-row';
        
        row.innerHTML = `
            <label class="checkbox-container">
                <input type="checkbox" value="${add.id}" ${checked ? 'checked' : ''} onchange="toggleAdditional('${add.id}')">
                <span class="checkmark"></span>
                <span>${escapeHTML(add.name)}</span>
            </label>
            <span class="extra-title" style="color: var(--accent-gold-dark)">+$${Number(add.price).toFixed(2)}</span>
        `;
        
        container.appendChild(row);
    });
}

// Toggle Additional checkbox items
window.toggleAdditional = function(id) {
    const index = selectedAdditionals.indexOf(id);
    if (index === -1) {
        selectedAdditionals.push(id);
    } else {
        selectedAdditionals.splice(index, 1);
    }
    renderAdditionals();
    calculateTotal();
};

// Quick profit setter
window.setQuickProfit = function(pct) {
    profitPercentage = pct;
    
    const slider = document.getElementById('profit-slider');
    if (slider) slider.value = pct;
    
    const pctVal = document.getElementById('profit-percentage-val');
    if (pctVal) pctVal.textContent = `+${pct}%`;
    
    calculateTotal();
};

// Calculate Total logic
function calculateTotal() {
    let subtotal = 0;
    
    // 1. Base / Technique
    if (selectedTechniqueId) {
        const tech = services.find(s => s.id === selectedTechniqueId);
        if (tech) {
            if (tech.subservices && tech.subservices.length > 0 && selectedSubserviceIndex !== null) {
                // If it has Pedicura sub-options
                subtotal += Number(tech.subservices[selectedSubserviceIndex].price);
            } else if (tech.useLength && selectedLengthIndex !== null) {
                // If it uses Acrylic/Acrigel length base price
                subtotal += Number(tech.lengths[selectedLengthIndex].price);
            } else {
                // Flat price
                subtotal += Number(tech.price);
            }
            
            // 2. Shape charge (only if technique uses lengths and is active)
            if (tech.useLength && selectedLengthIndex !== null && selectedShapeId) {
                const shape = services.find(s => s.id === selectedShapeId);
                if (shape) {
                    subtotal += Number(shape.price);
                }
            }
        }
    }
    
    // 3. Extra Tones
    subtotal += (extraTonesCount * 5);
    
    // 4. Retiros
    if (selectedRetiroGel !== 'ninguno') {
        const gelRet = services.find(s => s.id === `retiro_gel_${selectedRetiroGel}`);
        if (gelRet) subtotal += Number(gelRet.price);
    }
    if (selectedRetiroAcrilico !== 'ninguno') {
        const acrRet = services.find(s => s.id === `retiro_acrilico_${selectedRetiroAcrilico}`);
        if (acrRet) subtotal += Number(acrRet.price);
    }
    
    // 5. Decorations
    Object.keys(selectedDecorations).forEach(id => {
        const state = selectedDecorations[id];
        if (state.qty > 0 && state.prices) {
            subtotal += state.prices.reduce((sum, p) => sum + p, 0);
        }
    });
    
    // 6. Additionals
    selectedAdditionals.forEach(id => {
        const add = services.find(s => s.id === id);
        if (add) subtotal += Number(add.price);
    });
    
    // 7. Percentage Profit
    let profitAmount = subtotal * (profitPercentage / 100);
    
    // 8. Fixed Extra Charge
    let total = subtotal + profitAmount + fixedExtraCharge;
    
    // Live update total
    const grandDisplay = document.getElementById('grand-total');
    if (grandDisplay) {
        grandDisplay.textContent = `$${total.toFixed(2)}`;
    }
    
    return {
        subtotal,
        profitAmount,
        fixedExtraCharge,
        total
    };
}

// Show receipt breakdown
function showReceipt() {
    const calc = calculateTotal();
    const dateContainer = document.getElementById('receipt-date');
    const itemsContainer = document.getElementById('receipt-items-container');
    
    const today = new Date();
    dateContainer.textContent = today.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    itemsContainer.innerHTML = '';
    
    // 1. Technique & Base / Length
    if (selectedTechniqueId) {
        const tech = services.find(s => s.id === selectedTechniqueId);
        if (tech) {
            let rowText = tech.name;
            let rowPrice = 0;
            
            if (tech.subservices && tech.subservices.length > 0 && selectedSubserviceIndex !== null) {
                const sub = tech.subservices[selectedSubserviceIndex];
                rowText += ` - ${sub.name}`;
                rowPrice = sub.price;
            } else if (tech.useLength && selectedLengthIndex !== null) {
                const len = tech.lengths[selectedLengthIndex];
                rowText += ` (Largo: ${len.name})`;
                rowPrice = len.price;
            } else {
                rowPrice = tech.price;
            }
            
            const row = document.createElement('div');
            row.className = 'receipt-row';
            row.innerHTML = `<span><i class="bi bi-magic" style="margin-right: 6px; color: var(--accent-pink-dark);"></i>${escapeHTML(rowText)}</span> <span>$${Number(rowPrice).toFixed(2)}</span>`;
            itemsContainer.appendChild(row);
            
            // 2. Shape (Punta)
            if (tech.useLength && selectedLengthIndex !== null && selectedShapeId) {
                const shape = services.find(s => s.id === selectedShapeId);
                if (shape) {
                    const shpRow = document.createElement('div');
                    shpRow.className = 'receipt-row font-normal';
                    shpRow.innerHTML = `<span> └─ Punta: ${shape.name}</span> <span>$${Number(shape.price).toFixed(2)}</span>`;
                    itemsContainer.appendChild(shpRow);
                }
            }
        }
    } else {
        const row = document.createElement('div');
        row.className = 'receipt-row font-normal';
        row.innerHTML = `<span style="font-style: italic;">Sin técnica seleccionada</span> <span>$0.00</span>`;
        itemsContainer.appendChild(row);
    }
    
    // 3. Extra Tones
    if (extraTonesCount > 0) {
        const row = document.createElement('div');
        row.className = 'receipt-row font-normal';
        row.innerHTML = `<span><i class="bi bi-palette" style="margin-right: 6px; color: var(--accent-pink-dark);"></i>Tonos Extra (${extraTonesCount})</span> <span>$${(extraTonesCount * 5).toFixed(2)}</span>`;
        itemsContainer.appendChild(row);
    }
    
    // 4. Removals
    if (selectedRetiroGel !== 'ninguno') {
        const gel = services.find(s => s.id === `retiro_gel_${selectedRetiroGel}`);
        if (gel) {
            const row = document.createElement('div');
            row.className = 'receipt-row font-normal';
            row.innerHTML = `<span><i class="bi bi-trash" style="margin-right: 6px; color: var(--accent-pink-dark);"></i>Retiro Gel (${selectedRetiroGel === 'propio' ? 'Propio' : 'Ajeno'})</span> <span>$${Number(gel.price).toFixed(2)}</span>`;
            itemsContainer.appendChild(row);
        }
    }
    if (selectedRetiroAcrilico !== 'ninguno') {
        const acr = services.find(s => s.id === `retiro_acrilico_${selectedRetiroAcrilico}`);
        if (acr) {
            const row = document.createElement('div');
            row.className = 'receipt-row font-normal';
            row.innerHTML = `<span><i class="bi bi-trash" style="margin-right: 6px; color: var(--accent-pink-dark);"></i>Retiro Acrílico (${selectedRetiroAcrilico === 'propio' ? 'Propio' : 'Ajeno'})</span> <span>$${Number(acr.price).toFixed(2)}</span>`;
            itemsContainer.appendChild(row);
        }
    }
    
    // 5. Decorations
    Object.keys(selectedDecorations).forEach(id => {
        const state = selectedDecorations[id];
        if (state.qty > 0 && state.prices) {
            const decor = services.find(s => s.id === id);
            if (decor) {
                const totalDecorPrice = state.prices.reduce((sum, p) => sum + p, 0);
                const row = document.createElement('div');
                row.className = 'receipt-row';
                row.innerHTML = `<span><i class="bi bi-sparkles" style="margin-right: 6px; color: var(--accent-pink-dark);"></i>${escapeHTML(decor.name)} (x${state.qty})</span> <span>$${totalDecorPrice.toFixed(2)}</span>`;
                itemsContainer.appendChild(row);
                
                // Show breakdown per uña in receipt
                if (decor.isRange) {
                    state.prices.forEach((price, idx) => {
                        const subRow = document.createElement('div');
                        subRow.className = 'receipt-row font-normal';
                        subRow.innerHTML = `<span style="padding-left: 12px; font-size: 11px; color: var(--text-muted);"> └─ Uña ${idx + 1}</span> <span style="font-size: 11px; color: var(--text-muted);">$${price.toFixed(2)}</span>`;
                        itemsContainer.appendChild(subRow);
                    });
                }
            }
        }
    });
    
    // 6. Additionals
    selectedAdditionals.forEach(id => {
        const add = services.find(s => s.id === id);
        if (add) {
            const row = document.createElement('div');
            row.className = 'receipt-row font-normal';
            row.innerHTML = `<span><i class="bi bi-plus-circle" style="margin-right: 6px; color: var(--accent-pink-dark);"></i>${escapeHTML(add.name)}</span> <span>$${Number(add.price).toFixed(2)}</span>`;
            itemsContainer.appendChild(row);
        }
    });
    
    // Subtotal and Profit settings
    document.getElementById('receipt-subtotal').textContent = `$${calc.subtotal.toFixed(2)}`;
    
    const profitRow = document.getElementById('receipt-profit-row');
    if (calc.profitAmount > 0) {
        profitRow.classList.remove('hidden');
        document.getElementById('receipt-profit-pct').textContent = `${profitPercentage}%`;
        document.getElementById('receipt-profit-amount').textContent = `$${calc.profitAmount.toFixed(2)}`;
    } else {
        profitRow.classList.add('hidden');
    }
    
    const fixedRow = document.getElementById('receipt-fixed-row');
    if (calc.fixedExtraCharge > 0) {
        fixedRow.classList.remove('hidden');
        document.getElementById('receipt-fixed-amount').textContent = `$${calc.fixedExtraCharge.toFixed(2)}`;
    } else {
        fixedRow.classList.add('hidden');
    }
    
    document.getElementById('receipt-total').textContent = `$${calc.total.toFixed(2)}`;
    
    openModal('summary-modal');
}

// Generate & copy WhatsApp ticket
function copyWhatsAppTicket() {
    const calc = calculateTotal();
    
    let text = `🎀 *KITTY BEAUTY* 🎀\n`;
    text += `*Cotización de Uñas*\n`;
    text += `📅 ${new Date().toLocaleDateString('es-MX')}\n`;
    text += `--------------------------------\n`;
    
    if (selectedTechniqueId) {
        const tech = services.find(s => s.id === selectedTechniqueId);
        if (tech) {
            text += `💅 *${tech.name}*\n`;
            if (tech.subservices && tech.subservices.length > 0 && selectedSubserviceIndex !== null) {
                const sub = tech.subservices[selectedSubserviceIndex];
                text += `   └─ Tipo: _${sub.name}_ ($${sub.price})\n`;
            } else if (tech.useLength && selectedLengthIndex !== null) {
                const len = tech.lengths[selectedLengthIndex];
                text += `   └─ Largo: _${len.name}_ ($${len.price})\n`;
            } else {
                text += `   └─ Base: _$${tech.price}_\n`;
            }
            
            if (tech.useLength && selectedLengthIndex !== null && selectedShapeId) {
                const shape = services.find(s => s.id === selectedShapeId);
                if (shape) {
                    text += `   └─ Punta: _${shape.name}_ (+$${shape.price})\n`;
                }
            }
        }
    } else {
        text += `💅 _Sin técnica seleccionada_\n`;
    }
    
    if (extraTonesCount > 0) {
        text += `🎨 *Tonos Extra:* ${extraTonesCount} (+$${extraTonesCount * 5})\n`;
    }
    
    if (selectedRetiroGel !== 'ninguno') {
        const gel = services.find(s => s.id === `retiro_gel_${selectedRetiroGel}`);
        if (gel) {
            text += `🗑️ *Retiro Gel:* ${selectedRetiroGel === 'propio' ? 'Propio' : 'Ajeno'} (+$${Number(gel.price).toFixed(2)})\n`;
        }
    }
    if (selectedRetiroAcrilico !== 'ninguno') {
        const acr = services.find(s => s.id === `retiro_acrilico_${selectedRetiroAcrilico}`);
        if (acr) {
            text += `🗑️ *Retiro Acrílico:* ${selectedRetiroAcrilico === 'propio' ? 'Propio' : 'Ajeno'} (+$${Number(acr.price).toFixed(2)})\n`;
        }
    }
    
    let hasDecors = false;
    Object.keys(selectedDecorations).forEach(id => {
        const state = selectedDecorations[id];
        if (state.qty > 0 && state.prices) {
            hasDecors = true;
            const decor = services.find(s => s.id === id);
            if (decor) {
                const totalDecorPrice = state.prices.reduce((sum, p) => sum + p, 0);
                text += `✨ *${decor.name}* (x${state.qty})\n   └─ _Total: $${totalDecorPrice.toFixed(2)}_\n`;
                if (decor.isRange) {
                    state.prices.forEach((price, idx) => {
                        text += `      └─ Uña ${idx + 1}: _$${price.toFixed(2)}_\n`;
                    });
                }
            }
        }
    });
    
    selectedAdditionals.forEach(id => {
        const add = services.find(s => s.id === id);
        if (add) {
            text += `➕ *${add.name}* (+$${add.price})\n`;
        }
    });
    
    text += `--------------------------------\n`;
    text += `Subtotal: $${calc.subtotal.toFixed(2)}\n`;
    
    if (calc.profitAmount > 0) {
        text += `Ganancia Extra (${profitPercentage}%): $${calc.profitAmount.toFixed(2)}\n`;
    }
    if (calc.fixedExtraCharge > 0) {
        text += `Cargo Extra Fijo: $${calc.fixedExtraCharge.toFixed(2)}\n`;
    }
    
    text += `✨ *TOTAL ESTIMADO: $${calc.total.toFixed(2)}* ✨\n\n`;
    text += `_¡Hecho con amor en Kitty Beauty! 💖_\n`;
    text += `_Precios sujetos a variaciones en cabina._`;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('¡Ticket copiado para WhatsApp! <i class="bi bi-whatsapp" style="margin-left: 4px; color: var(--accent-pink-light);"></i>');
        closeModal('summary-modal');
    }).catch(err => {
        console.error('No se pudo copiar', err);
        showToast('Error al copiar. Selecciona el texto manualmente.', true);
    });
}

// ----------------------------------------------------
// ADMIN DASHBOARD
// ----------------------------------------------------
function renderAdminList(filterQuery = '') {
    const listContainer = document.getElementById('admin-services-list');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    
    const normalized = filterQuery.toLowerCase().trim();
    const filtered = services.filter(s => 
        s.name.toLowerCase().includes(normalized) ||
        s.category.toLowerCase().includes(normalized)
    );
    
    if (filtered.length === 0) {
        listContainer.innerHTML = '<div class="loading-spinner">No se encontraron servicios.</div>';
        return;
    }
    
    filtered.forEach(s => {
        const row = document.createElement('div');
        row.className = 'admin-row';
        
        let priceDisplay = `$${Number(s.price).toFixed(2)}`;
        
        if (s.category === 'tecnica') {
            if (s.useLength) {
                priceDisplay = 'Por largos';
            } else if (s.subservices && s.subservices.length > 0) {
                priceDisplay = 'Por subtipos';
            }
        } else if (s.isRange) {
            priceDisplay = `$${s.priceMin} - $${s.priceMax}`;
        }
        
        let catText = s.category;
        switch (s.category) {
            case 'tecnica': catText = 'Técnica / Base'; break;
            case 'decoracion': catText = 'Decoración / Uña'; break;
            case 'punta': catText = 'Punta'; break;
            case 'retiro': catText = 'Retiro'; break;
            case 'adicional': catText = 'Adicional'; break;
        }
        
        row.innerHTML = `
            <div class="col-name">
                <span class="admin-row-name">${escapeHTML(s.name)}</span>
                <span class="admin-row-cat">${catText} ${s.isFoot ? '(Pies)' : ''}</span>
            </div>
            <div class="col-price">${priceDisplay}</div>
            <div class="col-actions">
                <button type="button" class="icon-btn-edit" onclick="openEditService('${s.id}')" title="Editar"><i class="bi bi-pencil-fill"></i></button>
                <button type="button" class="icon-btn-delete" onclick="deleteService('${s.id}')" title="Eliminar"><i class="bi bi-trash-fill"></i></button>
            </div>
        `;
        listContainer.appendChild(row);
    });
}

// Edit Service
window.openEditService = function(id) {
    const service = services.find(s => s.id === id);
    if (!service) return;
    
    document.getElementById('modal-title').textContent = 'Editar Servicio';
    document.getElementById('service-id').value = service.id;
    document.getElementById('service-name').value = service.name;
    document.getElementById('service-category').value = service.category;
    
    handleCategoryChange(service.category);
    
    if (service.category === 'tecnica') {
        document.getElementById('tech-is-foot').checked = service.isFoot || false;
        document.getElementById('tech-use-lengths').checked = service.useLength || false;
        
        const hasSubs = service.subservices && service.subservices.length > 0;
        document.getElementById('tech-has-subservices').checked = hasSubs;
        
        // Show/hide fields
        toggleTechFormSubsections(service.useLength, hasSubs);
        
        document.getElementById('tech-price').value = service.price || 0;
        
        // Load Lengths
        const lengthContainer = document.getElementById('lengths-list-container');
        lengthContainer.innerHTML = '';
        if (service.lengths) {
            service.lengths.forEach(len => addLengthRow(len.name, len.price));
        }
        
        // Load Subservices
        const subContainer = document.getElementById('subservices-list-container');
        subContainer.innerHTML = '';
        if (service.subservices) {
            service.subservices.forEach(sub => addSubserviceRow(sub.name, sub.price));
        }
    } else {
        document.getElementById('service-unit').value = service.unit || 'c/u';
        document.getElementById('service-is-range').checked = service.isRange || false;
        
        toggleRangeFields(service.isRange);
        
        if (service.isRange) {
            document.getElementById('service-price-min').value = service.priceMin;
            document.getElementById('service-price-max').value = service.priceMax;
            document.getElementById('service-price').value = '';
        } else {
            document.getElementById('service-price').value = service.price;
            document.getElementById('service-price-min').value = '';
            document.getElementById('service-price-max').value = '';
        }
    }
    
    openModal('service-modal');
};

// Delete Service
window.deleteService = function(id) {
    const service = services.find(s => s.id === id);
    if (!service) return;
    
    if (confirm(`¿Estás segura de eliminar "${service.name}"?`)) {
        services = services.filter(s => s.id !== id);
        
        if (selectedTechniqueId === id) selectedTechniqueId = null;
        if (selectedShapeId === id) selectedShapeId = null;
        if (selectedDecorations[id]) delete selectedDecorations[id];
        selectedAdditionals = selectedAdditionals.filter(a => a !== id);
        
        saveServices().then(() => {
            renderTechniques();
            renderDecorations();
            renderAdditionals();
            renderAdminList();
            calculateTotal();
        });
    }
};

// Toggle range inputs standard vs range
function toggleRangeFields(isRange) {
    const standard = document.getElementById('price-standard-group');
    const range = document.getElementById('price-range-group');
    
    if (isRange) {
        standard.classList.add('hidden');
        range.classList.remove('hidden');
        document.getElementById('service-price-min').required = true;
        document.getElementById('service-price-max').required = true;
        document.getElementById('service-price').required = false;
    } else {
        standard.classList.remove('hidden');
        range.classList.add('hidden');
        document.getElementById('service-price').required = true;
        document.getElementById('service-price-min').required = false;
        document.getElementById('service-price-max').required = false;
    }
}

// Category selection change in admin form
function handleCategoryChange(category) {
    const techBlock = document.getElementById('tech-settings-block');
    const standardBlock = document.getElementById('standard-settings-block');
    
    if (category === 'tecnica') {
        techBlock.classList.remove('hidden');
        standardBlock.classList.add('hidden');
    } else {
        techBlock.classList.add('hidden');
        standardBlock.classList.remove('hidden');
    }
}

// Toggle sub-sections inside technique configuration
function toggleTechFormSubsections(useLength, hasSubs) {
    const priceGroup = document.getElementById('tech-fixed-price-group');
    const lengthsManager = document.getElementById('tech-lengths-manager');
    const subservicesManager = document.getElementById('tech-subservices-manager');
    
    if (useLength) {
        priceGroup.classList.add('hidden');
        lengthsManager.classList.remove('hidden');
    } else {
        lengthsManager.classList.add('hidden');
        if (!hasSubs) priceGroup.classList.remove('hidden');
    }
    
    if (hasSubs) {
        priceGroup.classList.add('hidden');
        subservicesManager.classList.remove('hidden');
    } else {
        subservicesManager.classList.add('hidden');
        if (!useLength) priceGroup.classList.remove('hidden');
    }
}

// Add Length row in Technique management
function addLengthRow(name = '', price = '') {
    const container = document.getElementById('lengths-list-container');
    const index = adminLengthCounter++;
    
    const row = document.createElement('div');
    row.className = 'dynamic-item-row';
    row.id = `admin-len-row-${index}`;
    row.innerHTML = `
        <input type="text" placeholder="Ej. Minis" value="${name}" class="len-name-input" required>
        <input type="number" placeholder="Precio" value="${price}" class="len-price-input" min="0" required>
        <button type="button" class="btn-remove-row" onclick="removeAdminRow('admin-len-row-${index}')"><i class="bi bi-x-lg"></i></button>
    `;
    container.appendChild(row);
}

// Add Subservice row in Technique management
function addSubserviceRow(name = '', price = '') {
    const container = document.getElementById('subservices-list-container');
    const index = adminSubCounter++;
    
    const row = document.createElement('div');
    row.className = 'dynamic-item-row';
    row.id = `admin-sub-row-${index}`;
    row.innerHTML = `
        <input type="text" placeholder="Ej. Pedicura Jelly Spa" value="${name}" class="sub-name-input" required>
        <input type="number" placeholder="Precio" value="${price}" class="sub-price-input" min="0" required>
        <button type="button" class="btn-remove-row" onclick="removeAdminRow('admin-sub-row-${index}')"><i class="bi bi-x-lg"></i></button>
    `;
    container.appendChild(row);
}

// Remove row in Admin dynamic inputs
window.removeAdminRow = function(id) {
    const row = document.getElementById(id);
    if (row) row.remove();
};

// ----------------------------------------------------
// EVENT LISTENERS Setup
// ----------------------------------------------------
function setupEventListeners() {
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const targetTab = btn.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Extra Tones controls
    document.getElementById('tone-btn-minus').addEventListener('click', () => {
        if (extraTonesCount > 0) {
            extraTonesCount--;
            document.getElementById('tone-qty-display').textContent = extraTonesCount;
            calculateTotal();
        }
    });
    
    document.getElementById('tone-btn-plus').addEventListener('click', () => {
        if (extraTonesCount < 10) {
            extraTonesCount++;
            document.getElementById('tone-qty-display').textContent = extraTonesCount;
            calculateTotal();
        }
    });
    
    // Removals (Retiros) selection change
    document.getElementById('select-retiro-gel').addEventListener('change', (e) => {
        selectedRetiroGel = e.target.value;
        calculateTotal();
    });
    
    document.getElementById('select-retiro-acrilico').addEventListener('change', (e) => {
        selectedRetiroAcrilico = e.target.value;
        calculateTotal();
    });
    
    // Profit margin slider
    const profitSlider = document.getElementById('profit-slider');
    if (profitSlider) {
        profitSlider.addEventListener('input', (e) => {
            profitPercentage = Number(e.target.value);
            document.getElementById('profit-percentage-val').textContent = `+${profitPercentage}%`;
            calculateTotal();
        });
    }
    
    // Extra charge direct input
    const extraInput = document.getElementById('extra-charge');
    if (extraInput) {
        extraInput.addEventListener('input', (e) => {
            fixedExtraCharge = Number(e.target.value) || 0;
            calculateTotal();
        });
    }
    
    // Reset Calculator button
    document.getElementById('btn-clear-calculator').addEventListener('click', () => {
        resetCalculatorState();
        renderTechniques();
        renderDecorations();
        renderAdditionals();
        calculateTotal();
        showToast('Calculadora reiniciada <i class="bi bi-trash" style="margin-left: 4px; color: var(--accent-pink-light);"></i>');
    });
    
    // Category change in Form Admin
    document.getElementById('service-category').addEventListener('change', (e) => {
        handleCategoryChange(e.target.value);
    });
    
    // Technique detail checkboxes form listeners
    document.getElementById('tech-use-lengths').addEventListener('change', (e) => {
        const hasSubs = document.getElementById('tech-has-subservices').checked;
        toggleTechFormSubsections(e.target.checked, hasSubs);
    });
    
    document.getElementById('tech-has-subservices').addEventListener('change', (e) => {
        const useLen = document.getElementById('tech-use-lengths').checked;
        toggleTechFormSubsections(useLen, e.target.checked);
    });
    
    // Add dynamic row buttons
    document.getElementById('btn-add-length-row').addEventListener('click', () => addLengthRow());
    document.getElementById('btn-add-sub-row').addEventListener('click', () => addSubserviceRow());
    
    // Range checkbox standard vs range
    document.getElementById('service-is-range').addEventListener('change', (e) => {
        toggleRangeFields(e.target.checked);
    });
    
    // Open add service modal
    document.getElementById('open-add-modal-btn').addEventListener('click', () => {
        document.getElementById('modal-title').textContent = 'Agregar Servicio';
        document.getElementById('service-form').reset();
        document.getElementById('service-id').value = '';
        
        document.getElementById('lengths-list-container').innerHTML = '';
        document.getElementById('subservices-list-container').innerHTML = '';
        
        handleCategoryChange('tecnica');
        toggleTechFormSubsections(false, false);
        openModal('service-modal');
    });
    
    // Close modal triggers
    document.getElementById('close-service-modal-btn').addEventListener('click', () => closeModal('service-modal'));
    document.getElementById('cancel-service-modal-btn').addEventListener('click', () => closeModal('service-modal'));
    document.getElementById('close-summary-modal-btn').addEventListener('click', () => closeModal('summary-modal'));
    
    // Show summary trigger
    document.getElementById('btn-show-summary').addEventListener('click', showReceipt);
    
    // Copy WhatsApp ticket
    document.getElementById('btn-copy-whatsapp').addEventListener('click', copyWhatsAppTicket);
    
    // Admin list searching filter
    document.getElementById('admin-search').addEventListener('input', (e) => {
        renderAdminList(e.target.value);
    });
    
    // Form submit save service
    document.getElementById('service-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const id = document.getElementById('service-id').value;
        const name = document.getElementById('service-name').value.trim();
        const category = document.getElementById('service-category').value;
        
        let newServiceObj = { id, name, category };
        
        if (category === 'tecnica') {
            const isFoot = document.getElementById('tech-is-foot').checked;
            const useLength = document.getElementById('tech-use-lengths').checked;
            const hasSubs = document.getElementById('tech-has-subservices').checked;
            
            newServiceObj.isFoot = isFoot;
            newServiceObj.useLength = useLength;
            
            if (useLength) {
                newServiceObj.price = 0;
                newServiceObj.lengths = [];
                const lenRows = document.querySelectorAll('#lengths-list-container .dynamic-item-row');
                lenRows.forEach(row => {
                    const lName = row.querySelector('.len-name-input').value.trim();
                    const lPrice = Number(row.querySelector('.len-price-input').value);
                    newServiceObj.lengths.push({ name: lName, price: lPrice });
                });
            } else if (hasSubs) {
                newServiceObj.price = 0;
                newServiceObj.subservices = [];
                const subRows = document.querySelectorAll('#subservices-list-container .dynamic-item-row');
                subRows.forEach(row => {
                    const sName = row.querySelector('.sub-name-input').value.trim();
                    const sPrice = Number(row.querySelector('.sub-price-input').value);
                    newServiceObj.subservices.push({ name: sName, price: sPrice });
                });
            } else {
                newServiceObj.price = Number(document.getElementById('tech-price').value);
            }
        } else {
            const isRange = document.getElementById('service-is-range').checked;
            newServiceObj.isRange = isRange;
            newServiceObj.unit = document.getElementById('service-unit').value;
            
            if (isRange) {
                newServiceObj.priceMin = Number(document.getElementById('service-price-min').value);
                newServiceObj.priceMax = Number(document.getElementById('service-price-max').value);
                newServiceObj.price = newServiceObj.priceMin;
            } else {
                newServiceObj.price = Number(document.getElementById('service-price').value);
                newServiceObj.priceMin = newServiceObj.price;
                newServiceObj.priceMax = newServiceObj.price;
            }
        }
        
        if (id) {
            const index = services.findIndex(s => s.id === id);
            if (index !== -1) {
                services[index] = newServiceObj;
            }
        } else {
            newServiceObj.id = 'service_' + Date.now();
            services.push(newServiceObj);
        }
        
        closeModal('service-modal');
        
        const saved = await saveServices();
        if (saved) {
            renderTechniques();
            renderDecorations();
            renderAdditionals();
            renderAdminList();
            calculateTotal();
        }
    });
    
    // Reset defaults trigger
    document.getElementById('reset-catalog-btn').addEventListener('click', async () => {
        if (confirm('¿Estás segura de restablecer el catálogo de precios al original? Se perderán todos tus cambios personalizados.')) {
            services = JSON.parse(JSON.stringify(DEFAULT_CATALOG));
            resetCalculatorState();
            
            const saved = await saveServices();
            if (saved) {
                renderTechniques();
                renderDecorations();
                renderAdditionals();
                renderAdminList();
                calculateTotal();
                showToast('Catálogo restablecido correctamente <i class="bi bi-arrow-counterclockwise" style="margin-left: 4px; color: var(--accent-pink-light);"></i>');
            }
        }
    });
    
    // Close modal by clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
}

// Modal helper
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
}

// Toast helper
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.innerHTML = message;
    toast.style.background = isError ? 'rgba(255, 107, 107, 0.95)' : 'rgba(99, 62, 68, 0.95)';
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2500);
}

// Escape HTML
function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
