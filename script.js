//scroll offset & smooth scroll
document.addEventListener('DOMContentLoaded', function () {
    // add click event listener to each link in the list
    document.querySelectorAll('.links a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        // prevent default behavior of immediate scrolling
        event.preventDefault();
        // get the target element's offsetTop and subtract a desired offset
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 70;
        const targetOffsetTop = targetElement.offsetTop - offset;

        // scroll to the target element with the offset
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth' // 'auto' or 'smooth'
        });
      });
    });
  });

  //intersection observer
  const options = {
    root: document.documentElement,//document.querySelector('.nav'), // The viewport element
    threshold: 0.55, // Intersection trigger at 25% visibility
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from previously active links
        document.querySelectorAll('.links a.active').forEach(link => link.classList.remove('active'));
  
        // Get ID of the intersecting section
        const sectionId = entry.target.id;
  
        // Find matching link in nav bar and add active class
        const navLink = document.querySelector(`.links a[href="#${sectionId}"]`);
        navLink.classList.add('active');
      }
    });
  }, options);
  
  // Observe all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => observer.observe(section));