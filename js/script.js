
// Wait for DOM content to be loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // ======== Initialize variables and get DOM elements ========
    
    // Product Gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const mainImageContainer = document.getElementById('mainImageContainer');
    const thumbnailsContainer = document.getElementById('thumbnails');
    const scrollUpBtn = document.getElementById('scrollUp');
    const scrollDownBtn = document.getElementById('scrollDown');

    // Pairs Well With Carousel
    const pairsCarousel = document.getElementById('pairsCarousel');
    const pairsPrevBtn = document.getElementById('pairsPrevBtn');
    const pairsNextBtn = document.getElementById('pairsNextBtn');

    // Product Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Modals
    const sizeChartBtn = document.getElementById('sizeChartBtn');
    const compareColorsBtn = document.getElementById('compareColorsBtn');
    const sizeChartModal = document.getElementById('sizeChartModal');
    const compareColorsModal = document.getElementById('compareColorsModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    // Product Options
    const colorOptions = document.querySelectorAll('.color-option');
    const sizeOptions = document.querySelectorAll('.size-option');
    const selectedColorText = document.getElementById('selectedColor');

    // Compare Colors
    const compareColorOptions = document.querySelectorAll('.compare-color-option');
    const selectedColorsContainer = document.getElementById('selectedColorsContainer');
    const selectedColorsGrid = document.getElementById('selectedColorsGrid');

    // Store selections in localStorage if supported
    let selectedColor = localStorage.getItem('selectedColor') || 'Navy Blue';
    let selectedSize = localStorage.getItem('selectedSize') || 'S';

    // Update UI based on stored values
    updateSelectedColor(selectedColor);
    updateSelectedSize(selectedSize);


    // ======== Product Gallery Functions ========
    
    // Thumbnail click event
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageIndex = this.dataset.index;
            updateMainImage(imageIndex);
            
            // Update active thumbnail
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update main image src
    function updateMainImage(index) {
        const selectedThumbnail = document.querySelector(`.thumbnail[data-index="${index}"]`);
        if (selectedThumbnail) {
            const imgSrc = selectedThumbnail.querySelector('img').src;
            // Replace thumbnail size with larger version
            mainImage.src = imgSrc.replace('w=500', 'w=800');
        }
    }

    // Scroll buttons functionality for thumbnails
    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', function() {
            thumbnailsContainer.scrollTop -= 100;
        });
    }

    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            thumbnailsContainer.scrollTop += 100;
        });
    }

    // Image zoom functionality
    let isZoomed = false;

    mainImageContainer.addEventListener('mouseenter', function() {
        this.style.cursor = 'zoom-in';
    });

    mainImageContainer.addEventListener('mouseleave', function() {
        if (isZoomed) {
            mainImage.style.transform = 'scale(1)';
            isZoomed = false;
            this.style.cursor = 'zoom-in';
        }
    });

    mainImageContainer.addEventListener('click', function() {
        if (!isZoomed) {
            mainImage.style.transform = 'scale(1.5)';
            isZoomed = true;
            this.style.cursor = 'zoom-out';
        } else {
            mainImage.style.transform = 'scale(1)';
            isZoomed = false;
            this.style.cursor = 'zoom-in';
        }
    });

    mainImageContainer.addEventListener('mousemove', function(e) {
        if (isZoomed) {
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = (e.clientX - left) / width * 100;
            const y = (e.clientY - top) / height * 100;
            
            mainImage.style.transformOrigin = `${x}% ${y}%`;
        }
    });


    // ======== Pairs Well With Carousel Functions ========
    
    if (pairsCarousel && pairsPrevBtn && pairsNextBtn) {
        pairsPrevBtn.addEventListener('click', function() {
            pairsCarousel.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        pairsNextBtn.addEventListener('click', function() {
            pairsCarousel.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }


    // ======== Product Tabs Functions ========
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide tab content
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });


    // ======== Modal Functions ========
    
    // Open modals
    if (sizeChartBtn) {
        sizeChartBtn.addEventListener('click', function() {
            openModal(sizeChartModal);
        });
    }
    
    if (compareColorsBtn) {
        compareColorsBtn.addEventListener('click', function() {
            openModal(compareColorsModal);
        });
    }
    
    // Close modals with close button
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeAllModals();
        });
    });
    
    // Close modals with backdrop click
    modalBackdrop.addEventListener('click', function() {
        closeAllModals();
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
    
    function openModal(modal) {
        modal.classList.add('active');
        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }


    // ======== Product Options Functions ========
    
    // Color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.dataset.color;
            updateSelectedColor(color);
            
            if (localStorage) {
                localStorage.setItem('selectedColor', color);
            }
        });
    });
    
    function updateSelectedColor(color) {
        selectedColorText.textContent = color;
        
        colorOptions.forEach(option => {
            if (option.dataset.color === color) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    
    // Size selection
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const size = this.dataset.size;
            updateSelectedSize(size);
            
            if (localStorage) {
                localStorage.setItem('selectedSize', size);
            }
        });
    });
    
    function updateSelectedSize(size) {
        sizeOptions.forEach(option => {
            if (option.dataset.size === size) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }


    // ======== Compare Colors Functions ========
    
    let selectedColorsForComparison = [];
    
    compareColorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.dataset.color;
            
            if (this.classList.contains('active')) {
                // Remove from selection
                this.classList.remove('active');
                selectedColorsForComparison = selectedColorsForComparison.filter(c => c !== color);
            } else {
                // Add to selection if under limit
                if (selectedColorsForComparison.length < 4) {
                    this.classList.add('active');
                    selectedColorsForComparison.push(color);
                }
            }
            
            updateSelectedColorsDisplay();
        });
    });
    
    function updateSelectedColorsDisplay() {
        if (selectedColorsForComparison.length > 0) {
            selectedColorsContainer.classList.remove('hidden');
            
            // Clear previous selections
            selectedColorsGrid.innerHTML = '';
            
            // Add each selected color
            selectedColorsForComparison.forEach(colorName => {
                const colorOption = document.querySelector(`.compare-color-option[data-color="${colorName}"]`);
                if (colorOption) {
                    const colorSwatch = colorOption.querySelector('.color-swatch');
                    const backgroundColor = colorSwatch.style.backgroundColor;
                    
                    const colorElement = document.createElement('div');
                    colorElement.className = 'selected-color';
                    colorElement.innerHTML = `
                        <div class="selected-color-swatch" style="background-color: ${backgroundColor}"></div>
                        <span>${colorName}</span>
                    `;
                    
                    selectedColorsGrid.appendChild(colorElement);
                }
            });
        } else {
            selectedColorsContainer.classList.add('hidden');
        }
    }
});
