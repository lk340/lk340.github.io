$(document).ready(function() {
  // $(".header").css({ "margin-top": -`${navbar.height()}` });

  // FADE IN, FADE OUT ARROW TO TOP BUTTON
  $(window).scroll(function() {
    const height = $(window).scrollTop();
    const backToTop = $("#back-to-top");
    const hideBackToTop = "back-to-top-hidden";
    
    if (height > 100) backToTop.removeClass(hideBackToTop);
    else backToTop.addClass(hideBackToTop);

    if (height > 50) {
      $(".sidebar-container").removeClass("sidebar-hidden");
    }

    if (height <= 50) {
      $(".sidebar-container").addClass("sidebar-hidden");
    }

    const viewportBottom = $(window).scrollTop() + $(window).height();

    const about = $(".welcome-inner-container");
    const skills = $(".skills-inner-container");
    const projects = $(".projects-inner-container");
    const triangleDivider = $("#triangle-divider");
    const contacts = $(".contacts-inner-container");

    if (about.offset().top < viewportBottom) {
      about.css({
        "opacity": "1",
        "transform": "translateY(0)"
      });
    }

    else {
      about.css({ 
        "opacity": "0",
        "transform": "translateY(120px)"
      });
    }

    if (skills.offset().top < viewportBottom) {
      skills.css({
        "opacity": "1",
        "transform": "translateY(0)"
      });
    }

    else {
      skills.css({ 
        "opacity": "0",
        "transform": "translateY(80px)"
      });
    }

    if (projects.offset().top < viewportBottom) {
      projects.css({
        "opacity": "1",
        "transform": "translateY(0)"
      });

      triangleDivider.css({
        "opacity": "1",
      });
    }

    else {
      projects.css({ 
        "opacity": "0",
        "transform": "translateY(80px)"
      });

      triangleDivider.css({ 
        "opacity": "0",
      });
    }

    if (contacts.offset().top < viewportBottom) {
      contacts.css({
        "opacity": "1",
        "transform": "translateY(0)"
      });
    }

    else {
      contacts.css({ 
        "opacity": "0",
        "transform": "translateY(80px)"
      });
    }
  });

  // NAVBAR WINDOW CONTROLS
  $("#header-about").click(function(event) {
    event.preventDefault();
    
    $("html, body").animate({
      scrollTop: $("#about").offset().top
    }, 900);
  });

  $(".about-nav").click(function(event) {
    event.preventDefault();
    
    $("html, body").animate({
      scrollTop: $("#about").offset().top
    }, 900);
  });
  
  $(".skills-nav").click(function(event) {
    event.preventDefault();

    $("html, body").animate({
      scrollTop: $("#skills").offset().top
    }, 900);
  });

  $(".projects-nav").click(function(event) {
    event.preventDefault();

    $("html, body").animate({
      scrollTop: $("#projects").offset().top
    }, 900);
  });

  $(".contact-me-nav").click(function(event) {
    event.preventDefault();

    $("html, body").animate({
      scrollTop: $("#contacts").offset().top
    }, 900);
  });
  
  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "500");
  });

  // SIDEBAR WINDOW CONTROLS
  let sidebarHidden = true;
  $(".sidebar-open").click(function() {
    if (sidebarHidden === true) {
      $(".sidebar-container").css({ "right": "1%" });
      sidebarHidden = false;
    }

    else {
      $(".sidebar-container").css({ "right": "-85px" });
      sidebarHidden = true;
    }
  });
  
  $(".about-sidebar").click(function() {
    $("html, body").animate({ 
      scrollTop: $("#about").offset().top
    }, 900);
  });

  $(".skills-sidebar").click(function() {
    $("html, body").animate({
      scrollTop: $("#skills").offset().top
    }, 900);
  });

  $(".project-sidebar").click(function() {
    $("html, body").animate({
      scrollTop: $("#projects").offset().top
    }, 900);
  });

  $(".contacts-sidebar").click(function() {
    $("html, body").animate({
      scrollTop: $("#contacts").offset().top
    }, 900);
  });

  // HAMBURGER DROPDOWN MENU
  $(".hamburger").click(function() {
    $(".hamburger-dropdown").toggle();
  });

  $(".hamburger-about").click(function() {
    $("html, body").animate({ 
      scrollTop: $("#about").offset().top
    }, 900);
  });

  $(".hamburger-skills").click(function() {
    $("html, body").animate({
      scrollTop: $("#skills").offset().top
    }, 900);
  });

  $(".hamburger-projects").click(function() {
    $("html, body").animate({
      scrollTop: $("#projects").offset().top
    }, 900);
  });

  $(".hamburger-contacts").click(function() {
    $("html, body").animate({
      scrollTop: $("#contacts").offset().top
    }, 900);
  });
});