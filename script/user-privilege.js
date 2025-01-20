 // Toggle dropdown visibility
 function toggleDropdown(event) {
    event.stopPropagation(); // Prevent click from propagating to the window listener
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('hidden');
  }

  // Show selected div and hide others
  function showDiv(index) {
    // Hide dropdown when an option is clicked
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.add('hidden');

    // Hide all divs
    const divs = document.querySelectorAll('.hidden-div');
    divs.forEach(div => div.classList.add('hidden'));

    // Show the selected div
    const selectedDiv = document.getElementById(`div-${index}`);
    if (selectedDiv) {
      selectedDiv.classList.remove('hidden');
    }
  }

  // Close dropdown if clicked outside
  window.addEventListener('click', (e) => {
    const dropdown = document.getElementById('dropdown-menu');
    if (!e.target.closest('.relative')) {
      dropdown.classList.add('hidden');
    }
  });

  // Show Cancel Confirmation Popup
  function showCancelPopup() {
  document.getElementById('cancel-popup').classList.remove('hidden');
  }   

  // Show Send Confirmation Popup
  function showSendPopup() {
  document.getElementById('send-popup').classList.remove('hidden');
  }

  // Close the Popup without any action
  function closePopup(popupId) {
  document.getElementById(popupId).classList.add('hidden');
  }

  // Perform the Cancel Action
  function cancelAction() {
  alert('You have canceled your action.');
  closePopup('cancel-popup');
  }

  // Perform the Send Action
  function sendAction() {
  alert('You have sended your selection.');
  closePopup('send-popup');
  }

  function showDiv(index) {
    // Log the div being shown (optional for debugging)
    console.log("Div to show:", index);
  
    // Update the navbar title dynamically
    const navbarTitle = document.getElementById('navbar-title');
    const titles = [
      "Permissions Dashboard", // For showDiv(0)
      "All Requests",          // For showDiv(1)
      "Pending Requests",      // For showDiv(2)
      "Rejected Requests",     // For showDiv(3)
      "Approved Requests",     // For showDiv(4)
      "Cancelled Requests"     // For showDiv(5)
    ];
  
    // Ensure the index is within bounds of the titles array
    if (index >= 0 && index < titles.length) {
      navbarTitle.textContent = titles[index];
    }
  
    // Hide all divs
    const divs = document.querySelectorAll('.hidden-div');
    divs.forEach(div => div.classList.add('hidden'));
  
    // Show the selected div
    const selectedDiv = document.getElementById(`div-${index}`);
    if (selectedDiv) {
      selectedDiv.classList.remove('hidden');
    }
  
    // Hide the dropdown menu if visible
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.add('hidden');
    }
  }