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


// section -  7 Our Case Studies


document.addEventListener('DOMContentLoaded', function() {
    const content = [
        {
            head: "Construction Projects Bidding Platform",
            text:"We reinvent the eCommerce software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customerWe reinvent the eCommerce software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customer. We reinvent the eCommerce software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customer."
        },
        {
            head: "Construction Projects Bidding Platform",
            text:"We reinvent the JustLogix software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customerWe reinvent the eCommerce software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customer. We reinvent the eCommerce software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customer."
        },
        {
            head: "Construction Projects Bidding Platform",
            text:"We reinvent the Skein Tech software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customerWe reinvent the eCommerce software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customer. We reinvent the eCommerce software solution experience with AI-driven chatbots and intelligent virtual assistants that provide personalized customer."
        }
    ];

    let currentIndex = 0;

    function renderStudies(index) {
        const studies = content[index];
        document.getElementById('our-case-studies-head').textContent = studies.head;
        document.getElementById('our-case-studies-para').textContent = studies.text;

        document.getElementById('our-case-left-arrow').classList.toggle('disabled', index === 0);
        document.getElementById('our-case-right-arrow').classList.toggle('disabled', index === content.length - 1);
    
        document.getElementById('our-case-left-arrow-2').classList.toggle('disabled', index === 0);
        document.getElementById('our-case-right-arrow-2').classList.toggle('disabled', index === content.length - 1);
    }

    document.getElementById('our-case-right-arrow').addEventListener('click', function() {
        if (currentIndex < content.length - 1) {
            currentIndex++;
            renderStudies(currentIndex);
        }
    });

    document.getElementById('our-case-left-arrow').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            renderStudies(currentIndex);
        }
    });
    document.getElementById('our-case-right-arrow-2').addEventListener('click', function() {
        if (currentIndex < content.length - 1) {
            currentIndex++;
            renderStudies(currentIndex);
        }
    });

    document.getElementById('our-case-left-arrow-2').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            renderStudies(currentIndex);
        }
    });

    renderStudies(currentIndex);
});



// Section - 9 Our Testimonials

document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet. Non commodi aliquam qui voluptatem dignissimos sed modi nihil aut Quis porro id suscipit quam qui excepturi dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam.",
            name: "Mizara Mona",
            position: "Project Manager",
            rating: 5
        },
        {
            text: "Lorem ipsum dolor sit amet. Non commodi aliquam qui voluptatem dignissimos sed modi nihil aut Quis porro id suscipit quam qui excepturi dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam.",
            name: "John Doe",
            position: "Software Engineer",
            rating: 5
        },
        {
            text: "Lorem ipsum dolor sit amet. Non commodi aliquam qui voluptatem dignissimos sed modi nihil aut Quis porro id suscipit quam qui excepturi dolor ut quasi voluptatem! Sed molestias animi ad quos modi qui libero laborum ab omnis magnam.",
            name: "Jane Smith",
            position: "Graphic Designer",
            rating: 5
        }
    ];

    let currentIndex = 0;

    function renderTestimonial(index) {
        const testimonial = testimonials[index];
        document.getElementById('testimonial-text').textContent = testimonial.text;
        document.getElementById('testimonial-name').textContent = testimonial.name;
        document.getElementById('testimonial-position').textContent = testimonial.position;

        const ratingElement = document.getElementById('testimonial-rating');
        ratingElement.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            star.classList.add('bi');
            star.classList.add(i < testimonial.rating ? 'bi-star-fill' : 'bi-star-fill');
            ratingElement.appendChild(star);
        }

        // Disable/enable arrows
        document.getElementById('testimonial-arrow-left').classList.toggle('disabled', index === 0);
        document.getElementById('testimonial-arrow-right').classList.toggle('disabled', index === testimonials.length - 1);
    }

    document.getElementById('testimonial-arrow-right').addEventListener('click', function() {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
            renderTestimonial(currentIndex);
        }
    });

    document.getElementById('testimonial-arrow-left').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            renderTestimonial(currentIndex);
        }
    });

    renderTestimonial(currentIndex);
});

//  Section - 11 Frequently asked Questions

document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    let currentOpenAccordion = null;

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const accordionToggle = accordionItem.querySelector('.accordion-toggle').querySelector('.arrow');

            // If there's an open accordion and it's not the current one, close it
            if (currentOpenAccordion && currentOpenAccordion !== accordionItem) {
                const openContent = currentOpenAccordion.querySelector('.accordion-content');
                const openToggle = currentOpenAccordion.querySelector('.accordion-toggle .arrow');

                openContent.style.display = 'none';
                openToggle.classList.remove('up');
                openToggle.classList.add('down');

                // Remove active class and reset styles for the previously open accordion header
                currentOpenAccordion.querySelector('.accordion-header').classList.remove('active');
                openToggle.classList.remove('white');
                currentOpenAccordion.querySelector('.accordion-header').classList.remove('white');
            }

            // Toggle the current accordion content and arrow
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
                accordionToggle.classList.remove('up');
                accordionToggle.classList.add('down');
                this.classList.remove('active');
                accordionToggle.classList.remove('white');
                this.classList.remove('white');

                currentOpenAccordion = null;
            } else {
                accordionContent.style.display = 'block';
                accordionToggle.classList.remove('down');
                accordionToggle.classList.add('up');
                this.classList.add('active');
                accordionToggle.classList.add('white');
                this.classList.add('white');

                currentOpenAccordion = accordionItem;
            }
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

// document.addEventListener("DOMContentLoaded", function() {
//     // Get all footer columns
//     var footerColumns = document.querySelectorAll('#footer-column');
  
//     // Loop through each footer column
//     footerColumns.forEach(function(column) {
//         // Find the h3 element
//         var h3 = column.querySelector('#footer-head');
  
//         // Find the ul element
//         var menu = column.querySelector('#footer-menu');
  
//         // Add click event listener to the icon
//         h3.addEventListener('click', function() {
//             // Toggle the active class on the menu when the icon is clicked
//             menu.classList.toggle('active-footer');
  
//             // Toggle the icon between chevron-down and chevron-up
//             h3.querySelector('i').classList.toggle('bi-chevron-down');
//             h3.querySelector('i').classList.toggle('bi-chevron-up');
//         });
//     });
//   });


document.addEventListener("DOMContentLoaded", function() {
    // Get all footer columns
    var footerColumns = document.querySelectorAll('.footer-column');

    // Loop through each footer column
    footerColumns.forEach(function(column) {
        // Find the h3 element
        var h3 = column.querySelector('h3');
  
        // Find the ul element
        var menu = column.querySelector('.footer-menu');
  
        // Add click event listener to the header
        h3.addEventListener('click', function() {
            // Close all other menus
            footerColumns.forEach(function(otherColumn) {
                if (otherColumn !== column) {
                    otherColumn.querySelector('.footer-menu').classList.remove('active-footer');
                    otherColumn.querySelector('i').classList.remove('bi-chevron-up');
                    otherColumn.querySelector('i').classList.add('bi-chevron-down');
                }
            });

            // Toggle the active class on the menu when the header is clicked
            menu.classList.toggle('active-footer');
  
            // Toggle the icon between chevron-down and chevron-up
            h3.querySelector('i').classList.toggle('bi-chevron-down');
            h3.querySelector('i').classList.toggle('bi-chevron-up');
        });
    });
});
