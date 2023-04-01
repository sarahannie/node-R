// Wait for the DOM to load before running the code
document.addEventListener("DOMContentLoaded", function(event) {

    // Function to show/hide the navigation menu
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      // Get the necessary elements by ID
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);
  
      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // Show/hide the navigation menu
          nav.classList.toggle('show');
          // Change the toggle icon
          toggle.classList.toggle('bx-x');
          // Add/remove padding to the body and header
          bodypd.classList.toggle('body-pd');
          headerpd.classList.toggle('body-pd');
        });
      }
    };
  
    // Call the showNavbar function with the appropriate IDs
    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
  
    /*===== LINK ACTIVE =====*/
  
    // Get all the navigation links
    const linkColor = document.querySelectorAll('.nav_link');
  
    // Function to add/remove the active class on the clicked link
    function colorLink() {
      if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
  
    // Add a click event listener to each navigation link
    linkColor.forEach(l => l.addEventListener('click', colorLink));
  
    // Your code to run since DOM is loaded and ready
  });
  