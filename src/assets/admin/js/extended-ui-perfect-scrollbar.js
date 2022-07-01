/**
 * Perfect Scrollbar
 */


document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const verticalExample = document.getElementById('vertical-example'),
      horizontalExample = document.getElementById('horizontal-example'),
      horizVertExample = document.getElementById('both-scrollbars-example');

    // Vertical Example
    // --------------------------------------------------------------------
    if (verticalExample) {
      // eslint-disable-next-line no-undef
      new PerfectScrollbar(verticalExample, {
        wheelPropagation: false
      });
    }

    // Horizontal Example
    // --------------------------------------------------------------------
    if (horizontalExample) {
      // eslint-disable-next-line no-undef
      new PerfectScrollbar(horizontalExample, {
        wheelPropagation: false,
        suppressScrollY: true
      });
    }

    // Both vertical and Horizontal Example
    // --------------------------------------------------------------------
    if (horizVertExample) {
      // eslint-disable-next-line no-undef
      new PerfectScrollbar(horizVertExample, {
        wheelPropagation: false
      });
    }
  })();
});
