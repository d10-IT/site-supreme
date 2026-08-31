/* ==========================================================================
   MAIN.JS
   Site-wide behavior. Kept dependency-free on purpose — as the site grows
   past a handful of interactive pieces, this is the natural point to
   introduce a bundler or framework rather than before.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var iconOpen = document.getElementById("icon-open");
  var iconClose = document.getElementById("icon-close");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", function () {
    var isOpen = mobileMenu.classList.contains("is-open");

    mobileMenu.classList.toggle("is-open");
    iconOpen.classList.toggle("u-hidden");
    iconClose.classList.toggle("u-hidden");
    menuBtn.setAttribute("aria-expanded", String(!isOpen));
  });
});
