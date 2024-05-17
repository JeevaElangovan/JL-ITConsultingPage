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
