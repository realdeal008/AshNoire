  // Mobile menu toggle
        document.querySelector('.mobile-menu-button').addEventListener('click', function() {
            document.querySelector('.mobile-menu').classList.toggle('hidden');
        });
        
        // Portfolio filtering
        const filterButtons = document.querySelectorAll('.filter-button');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('border-red-700', 'text-red-700', 'bg-red-700', 'text-white', 'hover:bg-gray-100');
                    btn.classList.add('border-gray-300', 'text-gray-700', 'hover:bg-gray-100');
                });
                
                this.classList.remove('border-gray-300', 'text-gray-700', 'hover:bg-gray-100');
                this.classList.add('border-red-700', 'text-red-700', 'hover:bg-red-700');
                
                if (!this.classList.contains('bg-red-700')) {
                    this.classList.add('bg-red-700', 'text-white');
                }
                
                // Filter items
                const filter = this.dataset.filter; portfolioItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.querySelector('.mobile-menu').classList.add('hidden');
            });
        });
        
        // Add animation on scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            // Example: Parallax effect for hero image
            const heroImage = document.querySelector('.hero-image img');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            }
        });