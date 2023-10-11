$(document).ready(function () {
  $("#myCarousel1").owlCarousel({
    // Configure the options for your carousel
    items: 5, // Number of items to display
    loop: true, // Continuously loop through items
    margin: 50, // Margin between items
    nav: false, // Show navigation buttons
    autoplay: true,  // Enable autoplay
    autoplayTimeout: 5000,  // Autoplay interval in milliseconds
    // autoplayHoverPause: true  // Pause autoplay on mouse hover
    responsive: {
      0: {
        items: 1, // Number of items to display on small screens
      },
      600: {
        items: 2, // Number of items to display on medium screens
      },
      1000: {
        items: 5, // Number of items to display on large screens
      },
      1300: {
        items: 5, // Number of items to display on large screens
      },
      1500: {
        items: 9, // Number of items to display on large screens

        
      },
    },
  });
});

