/**
 * GulfCalc (gulfcalc.tech): Navigation & Interactive Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      } else {
        drawer.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      }
    });
  }
});
