document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       FADE-IN ANIMATION (Optimized)
    =============================== */

    const fadeSections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.1
    });

    fadeSections.forEach(section => {
        observer.observe(section);
    });

    /* ===============================
       NAVBAR ACTIVE SCROLLSPY
    =============================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    /* ===============================
       PROJECT FILTER (Improved)
    =============================== */

    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            filterBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const tech = this.dataset.tech;

            projectItems.forEach(item => {
                const techList = item.dataset.tech.split(",");

                if (tech === "all" || techList.includes(tech)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    /* ===============================
       FEATURED VIDEOS CLICK-TO-LOAD
    =============================== */
    const videoWrappers = document.querySelectorAll(".video-wrapper");

    videoWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", function () {
            const videoId = this.dataset.videoId;
            this.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    style="width:100%; height:100%;"
                ></iframe>
            `;
        });
    });

});
