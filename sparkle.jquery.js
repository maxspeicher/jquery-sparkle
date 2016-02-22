(function($, window, document) {

  $.fn.sparkle = function(options) {
    if (options === "destroy") {
      if (this.data("sparkle-ids")) {
        var savedIds = this.data("sparkle-ids");

        for (var i=0; i<savedIds.length; ++i) {
          window.clearInterval($.sparkleInterval[savedIds[i]]);
        }

        this.data("sparkle-ids", null);
      }

      this.find("svg.my-sparkle").remove();
      return;
    }

    $.sparkleInterval = $.sparkleInterval || {};

    var $this = this;
    var id = (new Date()).getTime() + Math.random();
    var ids = this.data("sparkle-ids") || [];
    var settings = $.extend({
      fill: "#fff",
      stroke: "#000",
      size: 20,
      duration: 1500,
      pause: 1000
    }, options);

    var $star = $('<svg class="my-sparkle" version="1.1" viewBox="0.0 0.0 50.0 50.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="p.0"><path d="m0 0l50.0 0l0 50.0l-50.0 0l0 -50.0z" clip-rule="nonzero"></path></clipPath><g clip-path="url(#p.0)"><path fill="' + settings.stroke + '" fill-opacity="0.0" d="m0 0l50.0 0l0 50.0l-50.0 0z" fill-rule="nonzero"></path><path fill="' + settings.fill + '" d="m0.62204725 25.0l20.068499 -4.323374l4.309454 -20.13332l4.309454 20.13332l20.068499 4.323374l-20.068499 4.323374l-4.309454 20.133318l-4.309454 -20.133318z" fill-rule="nonzero"></path><path stroke="' + settings.stroke + '" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m0.62204725 25.0l20.068499 -4.323374l4.309454 -20.13332l4.309454 20.13332l20.068499 4.323374l-20.068499 4.323374l-4.309454 20.133318l-4.309454 -20.133318z" fill-rule="nonzero"></path></g></svg>').css({
        position: "absolute",
        width: settings.size,
        height: settings.size,
        zIndex: 9999
    });

    var w = this.width();
    var h = this.height();

    var getCoordinates = function() {
      return {
        left: Math.random() * w,
        top: Math.random() * h
      };
    };

    var placeStar = function() {
      var coords = getCoordinates();

      $this.append(
        $star.css({
          "-moz-animation": "my-sparkle " + settings.duration + "ms infinite linear",
          "-webkit-animation": "my-sparkle " + settings.duration + "ms infinite linear",
          animation: "my-sparkle " + settings.duration + "ms infinite linear",
          left: coords.left,
          top: coords.top
        }).show()
      );

      window.setTimeout(function() {
        $star.hide().css({
          animation: null
        });
      }, settings.duration);
    };

    if (this.css("position") === "static") {
      this.css("position", "relative");
    }

    window.setTimeout(function() {
      $.sparkleInterval[id] = window.setInterval(placeStar, settings.duration + settings.pause);
    }, settings.delay);

    $.merge(ids, [id]);
    this.data("sparkle-ids", ids);

    return this;
  };

})(jQuery, window, document);
