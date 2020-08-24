/**
 * Function to configure and display the 'alert' style Alertpal
 *
 * @memberof Alertpal
 * @method alert
 * @param {object} [details] - Object to define the configuration of the alert (Optional - details of defaults below)
 * @param {string} [details.title] - The title of the alert (Optional - default is 'Alert')
 * @param {string} [details.description] - The description of the alert. String can also include HTML for formatting (Optional - default is no description)
 * @param {string} [details.cancel] - The text inside the cancel button (Optional - default is 'Return')
 * @param {function} [details.cancelCallback] - Callback function to trigger when the cancel button is pressed (Option - default is closing the alert box)
 *
 * @example
 * const config = {
 *   title: 'New alert',
 *   description: 'This is a alert pop up',
 *   cancel: 'Go back',
 * 	 cancelCallback: returnToPage
 * };
 *
 * Alertpal.alert(config);
 */
Alertpal.alert = function (details) {
	console.log(details.cancelCallback);
	// The user doesn't have to pass details, so if they don't I define details here to avoid errors
	if (details === undefined) details = {};

	// Defining HTML elements
	const desc = document.getElementById('ap_description');
	const title = document.getElementById('ap_title');
	const cancel = document.getElementById('ap_cancel');
	const ok = document.getElementById('ap_ok');

	// Showing the ok button
	ok.style.display = 'inline-block';

	// Configuration
	title.innerText = details.title === undefined ? 'Alert' : details.title;
	desc.innerHTML = details.description === undefined ? '' : details.description;
	cancel.innerHTML = details.cancel === undefined ? 'Return' : details.cancel;
	ok.innerHTML = details.ok === undefined ? 'OK' : details.ok;
	cancel.onclick =
		details.cancelCallback === undefined
			? function () {
					Alertpal.closeAlert();
			  }
			: function () {
					Alertpal.closeAlert();
					details.cancelCallback();
			  };
	details.okCallback === undefined
		? (ok.style.display = 'none')
		: (ok.onclick = function () {
				Alertpal.closeAlert();
				details.okCallback();
		  });

	// Showing/Hiding elements
	document.getElementById('alertpal_alert').style.display = 'block';
	document.getElementById('alertpal_bg').style.display = 'block';
};
