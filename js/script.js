// Variables

const burger = document.querySelector('.burger'),
      navbar = document.querySelector('.navbar');


const displayNavbar = () => {
  

  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'block';
  }
}

burger.addEventListener('click', displayNavbar);