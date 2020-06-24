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
