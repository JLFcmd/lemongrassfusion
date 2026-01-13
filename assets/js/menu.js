/* Page Layout */
.menu-page-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
    padding-top: 3rem;
    margin-top: 5rem; /* Space for fixed header */
}

/* Sidebar Styling */
.menu-sidebar {
    padding-right: 2rem;
    border-right: 1px solid rgba(255,255,255,0.1);
}

.menu-sidebar h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
}

.filters-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.filter-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
    opacity: 0.8;
    transition: all 0.2s;
}

.filter-item:hover {
    opacity: 1;
    color: var(--primary-color);
}

/* Custom Checkbox Design */
.filter-checkbox {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    margin-right: 12px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(5px);
}

.filter-checkbox:hover {
    border-color: var(--primary-color);
    background: rgba(255, 255, 255, 0.2);
}

.filter-checkbox:checked {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
}

.filter-checkbox:checked::after {
    content: '✔';
    position: absolute;
    color: white;
    font-size: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
}

/* Sidebar Text Styling */
.filter-item {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    transition: background 0.3s;
}

.filter-item:hover {
    background: rgba(255, 255, 255, 0.05);
}

/* Menu Grid */
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    padding-bottom: 2rem;
}

/* Section Titles (Hidden if using sidebar filtering usually, but we keep them for now) */
.menu-category-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    width: 100%;
}

/* Card Styling - Matching Reference */
.menu-item {
    background: white; /* Clean white card */
    border-radius: 8px; /* Slight rounding */
    box-shadow: 0 4px 15px rgba(0,0,0,0.05); /* Soft shadow */
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
}

.menu-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* Image */
.menu-item-image {
    width: 100%;
    height: 180px;
    object-fit: contain; /* Show full product like reference */
    margin-bottom: 1rem;
    filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
}

/* Category Badge */
.category-badge {
    background-color: #ffd700; /* Yellow */
    color: #000;
    font-weight: 600;
    font-size: 0.75rem;
    padding: 0.2rem 1rem;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
}

/* Typography */
.menu-item h3 {
    color: #333; /* Dark text */
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    line-height: 1.3;
    text-transform: uppercase;
}

.item-subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
}

.item-description {
    font-size: 0.85rem;
    color: #777;
    margin-bottom: auto; /* Push price to bottom */
    line-height: 1.4;
}

/* Price */
.price {
    font-size: 2rem;
    font-weight: 800;
    color: #333;
    margin-top: 1rem;
}

@media (max-width: 768px) {
    .menu-page-layout {
        display: block; /* Stack vertically */
        padding-top: 1rem;
    }

    .menu-sidebar {
        border-right: none;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        padding: 1rem 0;
        margin-bottom: 2rem;
        background: transparent;
        overflow-x: auto; /* Horizontal scroll */
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
        position: sticky;
        top: 60px; /* Below fixed header */
        z-index: 90;
        backdrop-filter: blur(10px);
        background: rgba(211, 217, 220, 0.9); /* Match bg color with opacity */
        margin-left: -1rem; /* Full width bleeding */
        margin-right: -1rem;
        padding-left: 1rem;
    }

    /* Hide the "Tipos de productos" title on mobile to save space */
    .menu-sidebar h3 {
        display: none;
    }

    .filters-list {
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        padding-right: 1rem;
    }

    .filter-item {
        background: #fff;
        padding: 0.5rem 1.2rem;
        border-radius: 50px; /* Pill shape */
        min-width: fit-content;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        color: var(--text-color); /* Dark text */
        border: 1px solid transparent;
        font-size: 0.9rem;
    }

    .filter-item:hover, .filter-item:active {
        border-color: var(--primary-color);
        background: #fff;
    }
    
    /* Hide the checkbox itself for cleaner pill look on mobile, 
       or keep it but make it smaller. Let's hide it and style the item when active */
    .filter-checkbox {
        display: none; /* Hide confusing checkbox on mobile pills */
    }

    /* We need JS to add an 'active' class to parent, OR we can rely on :has pseudo-class 
       but standard checkbox:checked + text is better if we keep structure.
       Let's keep checkbox but hidden, and style based on :checked if possible, 
       but the structure is label > intput. */
       
    .filter-item:has(.filter-checkbox:checked) {
        background-color: var(--primary-color);
        color: white;
        box-shadow: 0 4px 10px rgba(201, 162, 77, 0.3);
    }
    
    /* Fallback for older browsers if :has isn't supported (iOS < 15.4), 
       it just won't highlight perfectly but will still filter. 
       Usually we'd add 'active' class via JS, but let's trust simple toggle. */
}

/* Allergen Banner */
.allergen-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%);
    border-left: 4px solid var(--primary-color);
    flex-wrap: wrap;
}

.allergen-icon i {
    font-size: 2.5rem;
    color: var(--primary-color);
}

.allergen-text {
    flex: 1;
}

.allergen-text h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: var(--secondary-color);
}

.allergen-text p {
    margin: 0;
    font-size: 0.95rem;
    color: #555;
}

.allergen-btn {
    white-space: nowrap;
    background: var(--primary-color) !important;
    color: white !important;
    border: none !important;
    padding: 0.8rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.allergen-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(201, 162, 77, 0.4);
}

@media (max-width: 768px) {
    .allergen-banner {
        flex-direction: column;
        text-align: center;
    }
    .allergen-text {
        margin-bottom: 1rem;
    }
}
