document.getElementById("demoBookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate successful demo booking
  alert("Thank you! Our team will contact you soon.");

  // GTM / GA4 Event (for later use)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "demo_submit"
  });

  // Reset form
  this.reset();
});
