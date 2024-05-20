// navBar=====>

// Function to open sidebar
function openSidebar() {
  document.querySelector(".sidebar").classList.add("active");
  document.querySelector("body").classList.add("sidebar-open");
}

// Function to close sidebar
function closeSidebar() {
  document.querySelector(".sidebar").classList.remove("active");
  document.querySelector("body").classList.remove("sidebar-open");
}

// Function to toggle dropdown
function toggleDropdown(id) {
  var dropdown = document.getElementById(id + "-dropdown");
  var icon = document.getElementById(id + "-icon");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    icon.classList.remove("bi-chevron-down");
    icon.classList.add("bi-chevron-up");
  } else {
    dropdown.style.display = "none";
    icon.classList.remove("bi-chevron-up");
    icon.classList.add("bi-chevron-down");
  }
}

// Toggle sidebar on navbar toggler click
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    if (document.querySelector(".sidebar").classList.contains("active")) {
      closeSidebar(); // Close sidebar if already open
    } else {
      openSidebar(); // Open sidebar if closed
    }
  });

// Section - 4 Industry Served

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".two p[data-content]");
  const contents = document.querySelectorAll(
    ".hide-all-content .content-below"
  );

  function hideAllContents() {
    contents.forEach((content) => {
      content.classList.remove("visible-content");
    });
  }

  function deactivateAllTabs() {
    tabs.forEach((tab) => {
      tab.classList.remove("active-content-industry");
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      deactivateAllTabs();
      hideAllContents();
      const contentId = this.getAttribute("data-content");
      document.getElementById(contentId).classList.add("visible-content");
      this.classList.add("active-content-industry");
    });
  });
});


// Section -  6 Leverage the Technical Expertise

document.addEventListener("DOMContentLoaded", function () {
  const secondCollayout = document.querySelector(".secondcollayout");

  secondCollayout.addEventListener("mouseenter", function () {
    document.body.style.cursor =
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><circle cx='18' cy='18' r='18' fill='rgba(44, 160, 104, 0.72)'/></svg>\") 18 18, auto";
  });

  secondCollayout.addEventListener("mouseleave", function () {
    document.body.style.cursor = "auto";
  });
});

function redirectToPage() {
  window.location.href = "your_page_url";
}


// Section - 9 Our Testimonials


const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet. Non commodi aliquam qui voluptatem dignissimos sed modi nihil aut Quis porro id suscipit quam qui excepturi dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam. dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam. Est deserunt animi qui pariatur atque non nisi sint!",
        name: "Mizara Mona",
        position: "Project Manager",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Lorem ipsum dolor sit amet. Non commodi aliquam qui voluptatem dignissimos sed modi nihil aut Quis porro id suscipit quam qui excepturi dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam. dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam. Est deserunt animi qui pariatur atque non nisi sint!",
        name: "John Doe",
        position: "Software Engineer",
        rating: "⭐⭐⭐⭐"
    },
    {
        text: "Lorem ipsum dolor sit amet. Non commodi aliquam qui voluptatem dignissimos sed modi nihil aut Quis porro id suscipit quam qui excepturi dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam. dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam. Est deserunt animi qui pariatur atque non nisi sint!",
        name: "Jane Smith",
        position: "Graphic Designer",
        rating: "⭐⭐⭐⭐⭐"
    }
];

let currentTestimonial = 0;

function updateTestimonial(index) {
    document.getElementById('testimonial-text').innerText = testimonials[index].text;
    document.getElementById('testimonial-name').innerText = testimonials[index].name;
    document.getElementById('testimonial-position').innerText = testimonials[index].position;
    document.getElementById('testimonial-rating').innerText = testimonials[index].rating;
}

document.getElementById('testimonial-arrow-left').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
    updateTestimonial(currentTestimonial);
});

document.getElementById('testimonial-arrow-right').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
    updateTestimonial(currentTestimonial);
});



//  Section - 11 Frequently asked Questions

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const accordionToggle = accordionItem.querySelector('.accordion-toggle').querySelector('.arrow');
  
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
                accordionToggle.classList.remove('up');
                accordionToggle.classList.add('down');
            } else {
                accordionContent.style.display = 'block';
                accordionToggle.classList.remove('down');
                accordionToggle.classList.add('up');
            }
        });
    });
  });
  
  // script.js
  document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-header');
  
    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle active class on the clicked accordion item
            this.classList.toggle('active');
            
            // Toggle arrow color
            const accordionToggle = this.querySelector('.accordion-toggle').querySelector('.arrow');
            accordionToggle.classList.toggle('white');
  
            // Toggle text color
            const accordionHeader = this.querySelector('.accordion-header');
            accordionHeader.classList.toggle('white');
        });
    });
  });


  // Form ====>

// Function to validate the form
function validateForm() {
    var firstName = document.getElementById("firstname").value.trim();
    var lastName = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();

    // Check if first name is empty
    if (firstName === "") {
        alert("Please enter your first name");
        return false;
    }

    // Check if last name is empty
    if (lastName === "") {
        alert("Please enter your last name");
        return false;
    }

    // Check if email is empty
    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    // Check if email is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // If all validations pass, return true
    return true;
}


// Footer 

document.addEventListener("DOMContentLoaded", function() {
    // Get all footer columns
    var footerColumns = document.querySelectorAll('#footer-column');
  
    // Loop through each footer column
    footerColumns.forEach(function(column) {
        // Find the h3 element
        var h3 = column.querySelector('#footer-head');
  
        // Find the ul element
        var menu = column.querySelector('#footer-menu');
  
        // Add click event listener to the icon
        h3.addEventListener('click', function() {
            // Toggle the active class on the menu when the icon is clicked
            menu.classList.toggle('active-footer');
  
            // Toggle the icon between chevron-down and chevron-up
            h3.querySelector('i').classList.toggle('bi-chevron-down');
            h3.querySelector('i').classList.toggle('bi-chevron-up');
        });
    });
  });
