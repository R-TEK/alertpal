/*!
 * Alerts
 * v1.0.0
 */

// Defining Alertpal objects
let Alertpal = new Object();

/*
// Function to create the HTML and append it to the DOM
(function () {
	// InnerHTML content
	const HTMLContent = `
	`;

	// Creating the node to store the innerHTML
	let HTMLWrapper = document.createElement('SECTION');
	HTMLWrapper.id = 'alerts';
	HTMLWrapper.innerHTML = HTMLContent;

	// Appending to the DOM
	document.getElementsByTagName('BODY')[0].appendChild(HTMLWrapper);
})();
*/

// Function to close the alert - then setting some element to have this as a click handler
function closeAlert() {
	// Hiding the alert
	document.getElementById('alertpal_alert').style.display = 'none';
	document.getElementById('alertpal_bg').style.display = 'none';
}
document.getElementById('alertpal_bg').addEventListener('click', closeAlert);
document.getElementById('ap_cancel').addEventListener('click', closeAlert);

// Function to open and configure the alert Alertpal
Alertpal.alert = function (details) {
	// Defining HTML elements
	const title = document.getElementById('ap_title');
	const desc = document.getElementById('ap_description');
	const cancel = document.getElementById('ap_cancel');
	const ok = document.getElementById('ap_ok');

	// Showing the ok button
	ok.style.display = 'inline-block';

	// Configuration
	title.innerText = details.title === undefined ? 'Alert' : details.title;
	desc.innerHTML = details.description === undefined ? '' : details.description;
	cancel.innerHTML = details.cancel === undefined ? 'Cancel' : details.cancel;
	ok.innerHTML = details.ok === undefined ? 'OK' : details.ok;
	details.callback === undefined ? (ok.style.display = 'none') : (ok.onclick = details.callback);

	// Showing/Hiding elements
	document.getElementById('alertpal_alert').style.display = 'block';
	document.getElementById('alertpal_bg').style.display = 'block';
};

// Function to open and configure the confirm Alertpal
Alertpal.confirm = function (details) {
	// For confirm, since its similar to regular alert, I reuse that function
	// The alert function is slightly modified to check for a callback
	// If there is not callback then it knows that its not a confirm but an alert, vice versa
	Alertpal.alert(details);
};
