// ------------------------------------------------------
//  NAVBAR
//  Show/hide navbar in mobile device
// ------------------------------------------------------

(function () {
	var mainHeader = document.getElementsByClassName('js-navbar')[0];
	var trigger = mainHeader.getElementsByClassName('btn--menu')[0],
	nav = mainHeader.getElementsByClassName('page')[0];
	if (trigger) {
		//detect click on nav trigger
		trigger.addEventListener('click', function (event) {
			event.preventDefault();
			var ariaExpanded = !Util.hasClass(nav, 'navbar--is-visible');
			//show nav and update button aria value
			Util.toggleClass(nav, 'navbar--is-visible', ariaExpanded);
			trigger.setAttribute('aria-expanded', ariaExpanded);
			if (ariaExpanded) { //opening menu -> move focus to first element inside nav
				nav.querySelectorAll('[href], input:not([disabled]), button:not([disabled])')[0].focus();
			}
		});
	}
}());