
jQuery(function(){

  /**
   * Spectrum Login header view
   */
  var $el = $('.app-header')

  var self = this;

    /**
     * Default option values
     */
   var defaults = {
      /**
       * Duration of show/hide effect, default to 500ms
       */
      effectDuration: 500,

      /**
       * Maximum opacity of menu overlay, default to 0.8 (80%)
       */
      maxOpacity: 0.8,

      /**
       * Transition effect to use when showing/hiding side nav menu
       */
      menuEffect: 'slide'
    }


    $('.nav-button').click(function (event) {
      self.onClickHamburger();
    });

    $('.close-button').click(function (event) {
      self.onClickClose();
    });

    $('.icon-button').focus(function (event) {
      $('.icon-button').addClass("focus-blue");
    });

    $('.icon-button').blur(function (event) {
      $('.icon-button').removeClass("focus-blue");
    });

    $('.menu-container > ul > li:last').find("a").keydown(function (event) {

      if (event.keyCode === $.ui.keyCode.TAB) {
        $('.icon-button').focus();
        return false;
      }
    })

    $('.icon-button').keydown(function (event) {

      if (event.keyCode === $.ui.keyCode.TAB && $.ui.keyCode.SHIFT) {
        $el.find('.menu-container > ul > li:first').find("a").focus();
        return false;
      }

      if (event.keyCode === $.ui.keyCode.TAB) {
        $el.find('.menu-container > ul').focus();
        return false;
      }
    })

    var menuContainer = $el.find('.menu-container > ul');

    // Handle escape key by hiding side nav
    menuContainer.menu().keydown(function (event) {
      if (event.keyCode === $.ui.keyCode.ESCAPE) {
        self.hide();
        return false;
      }
    });

    // Hide side nav if user clicks outside of nav bar
    $el.find('.navOverlay').click(function () {
      self.hide();
    });


    /**
     * Hide side nav menu
     * @returns {App.Views.SpectrumHeader}
     */
    self.hide = function () {
      "use strict";
      $el.find('.sidenav').hide({
        effect: defaults.menuEffect,
        duration: defaults.effectDuration
      });
      $el.find('.navOverlay').fadeOut(defaults.effectDuration);

      // Focus hamburger menu button after hiding
      $el.find('button.nav-button').focus();

      return this;
    }

    /**
     * Show side nav menu
     * @returns {App.Views.SpectrumHeader}
     */
    self.show = function () {
      "use strict";

      // for background overlay set opacity to 0 before showing, then trigger fade effect
      $el.find('.navOverlay')
          .css('opacity', 0)
          .show()
          .fadeTo(defaults.effectDuration, defaults.maxOpacity);

      // for side nav menu simply show using menu effect
      $el.find('.sidenav').show({
        effect: defaults.menuEffect,
        duration: defaults.effectDuration,
        complete: function () {
          // Focus menu after animation completes
          $el.find('.menu-container > ul').focus();
        }
      });

      return this;
    }

    /**
     * Handle click on hamburger navigation button by toggling display of side nav menu
     */
    self.onClickHamburger = function() {
      "use strict";
      if (self.isMenuShown()) {
        self.hide();
      } else {
        self.show();
      }
    }

    /**
     * Handle click on close button by closing side nav menu
     */
    self.onClickClose = function() {
      "use strict";
      if (self.isMenuShown()) {
        self.hide();
      }
    }

    /**
     * Check if menu is currently shown
     * @returns {bool}
     */
     self.isMenuShown = function() {
      "use strict";
      return $el.find('.sidenav').is(':visible');
    }


});