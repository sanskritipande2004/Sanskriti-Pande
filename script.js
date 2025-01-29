document.addEventListener("DOMContentLoaded", () => {
    const headerOffset = document.querySelector("header")?.offsetHeight || 0; // Adjust if sticky header
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                
                // Scroll to target with offset for sticky header
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

                // Update URL in browser without jumping to section instantly
                history.pushState(null, null, targetId);

                // Move focus for accessibility
                targetElement.setAttribute("tabindex", "-1"); // Make it focusable
                targetElement.focus();
            }
        });
    });
});
