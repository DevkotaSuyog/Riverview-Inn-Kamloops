
(function() 
{
  function updateFooter()
  {
    const now = new Date();
    if (updatedEl) updatedEl.textContent = document.lastModified;
  }
  document.addEventListener('DOMContentLoaded', updateFooter);
  setInterval(updateFooter, 1000);
}
)();

// Navigation highlight (optional enhancement)
(function() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.setAttribute('aria-current', 'page');
      link.style.fontWeight = '600';
    }
  });
})();

// Smooth scroll for same-page anchor links
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();



// not to use var use lat
//  var cannot have a block scope
//  var can be redeclared 
//  in let if you redeclare a variable is imside a bloc k will not redeclared 
// const= once value is declated it cannpt be changed , but must be declared all together
// consrt have a block skope 
// const variables cannot be redeclared
// 


// speacial data types = infinity , -infinity and NaN( not a number)    
// bigint    forr amlost infinte number ,,, const bigint= 123444342432442423432432443n .... n is imp in the last  ... a bigint is still finite for js
// object-  used to store collections of data 
// number. formating method -     // 