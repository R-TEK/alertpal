/**!
 * AlertPal
 *
 * R-TEK
 *
 * https://github.com/R-TEK/alertpal
 *
 * MIT License
 */

/**
 * Creation of the Alertpal Object
 *
 * @namespace Alertpal
 * @type {object}
 */
let Alertpal = new Object();

/**
 * Set up function to execute as soon as the DOM has loaded - this function sets up the DOM with the required elements and assigns function to events
 *
 * @listens DOMContentLoaded
 * @callback setUp
 */
document.addEventListener('DOMContentLoaded', function () {
	// InnerHTML content
	const HTMLContent = `
		<div id="alertpal_bg"></div>
		<aside id="alertpal_alert">
			<header id="ap_header">
				<h2 id="ap_title"></h2>
			</header>
			<div id="ap_body">
				<p id="ap_description"></p>
				<div id="ap_buttons">
					<button id="ap_cancel" name="cancel"></button>
					<button id="ap_ok" name="ok"></button>
				</div>
			</div>
		</aside>
		<aside id="alertpal_message_container"></aside>
	`;

	// Creating the node to store the child nodes
	let HTMLWrapper = document.createElement('SECTION');
	HTMLWrapper.id = 'alertpal';
	HTMLWrapper.innerHTML = HTMLContent;

	// Appending to the DOM
	document.getElementsByTagName('BODY')[0].appendChild(HTMLWrapper);

	// Defining some event listeners
	document.getElementById('alertpal_bg').addEventListener('click', closeAlert);
	document.getElementById('ap_cancel').addEventListener('click', closeAlert);
});

/**
 * Function to close an alert / confirm / modal boxes
 *
 * @function
 */
function closeAlert() {
	// Hiding the alert
	document.getElementById('alertpal_alert').style.display = 'none';
	document.getElementById('alertpal_bg').style.display = 'none';
	// Removing potential modal CSS class
	document.getElementById('alertpal_alert').removeAttribute('class');
}
