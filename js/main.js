/* St Marys Electrical — the only JS the one-pager needs */
(function () {
  "use strict";
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
