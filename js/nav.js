(function() {
  const toggleMenuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const navIconClosed = document.querySelector('[data-menu-button-closed]');
  const navIconOpen = document.querySelector('[data-menu-button-open]');

  toggleMenuButton.addEventListener('click', function() {
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    
    if(expanded) {
      navIconClosed.style.display = "block";
      navIconOpen.style.display = "none";
      menu.classList.remove("open-menu");
    } else {
      
      navIconClosed.style.display = "none";
      navIconOpen.style.display = "block";
      menu.classList.add("open-menu");
    }
  });

  navIconOpen.style.display = "none";
})()



