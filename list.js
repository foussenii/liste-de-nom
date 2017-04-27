(function() {

              var bodyEl = $('body'),
                  navToggleBtn = bodyEl.find('.nav-toggle-btn');

              navToggleBtn.on('click', function(e) {
                  bodyEl.toggleClass('active-nav');
                  e.preventDefault();
              });

          })();
          $(function() {

                    setTimeout(function() {
                        $('.fly-in-text').removeClass('hidden');
                    }, 500);
 
                })();
