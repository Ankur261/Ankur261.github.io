function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

document.getElementById('consultForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const symptoms = document.getElementById('symptoms').value.trim();
    const doctor = document.getElementById('doctor').value;
  
    if (name && email && symptoms && doctor) {
      document.getElementById('responseMessage').textContent = "Your consultation request has been submitted!";
      this.reset();
    } else {
      document.getElementById('responseMessage').textContent = "Please fill in all fields.";
    }
  });
  