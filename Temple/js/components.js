/**
 * Component Loader for Underrated Temples (Shri Siddhivinayak Temple)
 * Handles Header and Footer injection to ensure consistency across pages.
 */

const Components = {
    header: `
    <div class="logo-section">
         <img src="images/logo.png" alt="Shri Siddhivinayak Temple Logo">
         <h1>Shri Siddhivinayak</h1>
    </div>
    
    <div class="hamburger">
        <i class="fas fa-bars"></i>
    </div>

    <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="gallery.html">Gallery</a>
        <a href="donate.html">Donate</a>
        <a href="contact.html">Contact</a>
    </nav>

    <div class="social">
        <a href="https://wa.link/pgwgdc" target="_blank" title="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/p/DRXjy7ck2zJ/?hl=en" target="_blank" title="Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/p/Ghante-Ganapathi-Chandaguli-100077488024255/" target="_blank" title="Facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
    </div>
    `,

    footer: `
    <div class="footer-grid">
        <div class="footer-info">
            <h3>Contact Us</h3>
            <p><i class="fas fa-map-marker-alt"></i> Chandguli, Yellapur, Karnataka</p>
            <p><i class="fas fa-phone"></i> +91 98765 43210</p>
            <p><i class="fas fa-envelope"></i> info@siddhivinayakchandguli.org</p>
        </div>

        <div class="footer-map">
            <h3>Visit Us</h3>
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.9507662008!2d74.739109!3d14.884031199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbeb87ec938d4b1%3A0x7f3fd83c82043f83!2sShri%20Siddhivinayaka%20Swami%20Temple%20-%20(Chandguli)!5e0!3m2!1sen!2sin!4v1769662883125!5m2!1sen!2sin" 
                width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
        </div>

        <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Temple</a></li>
                <li><a href="donate.html">Donate</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </div>
    <div class="copyright">
        <p>&copy; ${new Date().getFullYear()} Shri Siddhivinayak Temple, Chandguli. All Rights Reserved.</p>
    </div>
    `,

    init: function () {
        // Inject Header
        const headerContainer = document.querySelector('header');
        if (headerContainer) {
            headerContainer.innerHTML = this.header;
        } else {
            console.error("Header container not found");
        }

        // Inject Footer
        const footerContainer = document.querySelector('footer');
        if (footerContainer) {
            footerContainer.innerHTML = this.footer;
        }

        this.highlightActiveLink();
        this.initMobileMenu();
    },

    highlightActiveLink: function () {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-links a');

        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    },

    initMobileMenu: function () {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            // Clone to remove old event listeners if any
            const newHamburger = hamburger.cloneNode(true);
            hamburger.parentNode.replaceChild(newHamburger, hamburger);

            newHamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                newHamburger.querySelector('i').classList.toggle('fa-times');
                newHamburger.querySelector('i').classList.toggle('fa-bars');
            });
        }
    }
};
