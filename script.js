
document.getElementById('volunteer-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for signing up to volunteer!');
  this.reset();
});
// Thank you message on contact form submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload
  alert("Thank you for contacting us!");
  this.reset(); // optionally clear the form
});
