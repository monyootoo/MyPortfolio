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

