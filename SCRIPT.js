var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

//scroll up
const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "block" 
  } else{
    goTopBtn.style.display = "none"
  }
}

///search
document.getElementById("searchButton").addEventListener("click", function() {
  var searchTerm = document.getElementById("searchInput").value.toLowerCase(); // Convert search term to lowercase for case-insensitive comparison

  // Check the search term and perform corresponding actions
  switch(searchTerm) {
      case "home":
          window.location.href = "#header"; // Redirect to the home section
          break;
      case "about":
          window.location.href = "#about"; // Redirect to the about section
          break;
      case "services":
          window.location.href = "#services"; // Redirect to the services section
          break;
      case "portfolio":
          window.location.href = "#portfolio"; // Redirect to the portfolio section
          break;
      case "contact":
          window.location.href = "#contact"; // Redirect to the contact section
          break;
      default:
          alert("No matching section found for the entered search term."); // Display an alert if no matching section is found
  }
});
