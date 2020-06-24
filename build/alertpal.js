/*!
 * Alerts
 * v1.0.0
 */

// Function to create the HTML and append it to the DOM
(function () {
	// InnerHTML content
	const HTMLContent = `
	<div id="alerts_bg"></div>
	<div id="alerts_box">
		<header id="alerts_header">
			<h2 id="alerts_title"></h2>
		</header>
		<div id="alerts_body">
			<p id="alerts_description"></p>
			<div id="alerts_button">
				<button id="alerts_cancel">Cancel</button>
				<button id="alerts_accept">Accept</button>
			</div>
		</div>
	</alerts>
	`;

	// Creating the node to store the innerHTML
	let HTMLWrapper = document.createElement('SECTION');
	HTMLWrapper.id = 'alerts';
	HTMLWrapper.innerHTML = HTMLContent;

	// Appending to the DOM
	document.getElementsByTagName('BODY')[0].appendChild(HTMLWrapper);
})();

// Function to open and configure an alert box
let requestAlert = function (title, description, acceptRequest) {
	// Defining HTML elements
	const alerts = document.getElementById('alerts');
	const titleElem = document.getElementById("alerts_title");
	const descElem = document.getElementById('alerts_description');
	const cancelElem = document.getElementById('alerts_cancel');
	const acceptElem = document.getElementById('alerts_accept');

	// Showing the alerts box
	alerts.style.display = 'block';

	// Resetting the elements
	cancelElem.innerHTML = "Cancel";
	acceptElem.innerHTML = "OK";
	acceptElem.style.display = 'inline-block';

	// Setting the title and description text
	titleElem.innerText = title;
	descElem.innerHTML = description;

	// Checking if the alert should be a regular alert or confirm alert
	if (acceptRequest !== undefined) {
		// Applying the given function to the accept button
		acceptElem.onclick = function () {
			acceptRequest();
			// Hiding the alerts box
			alerts.style.display = 'none';
		}

		// Cancel button should hide the alerts box
		cancelElem.onclick = function () {
			alerts.style.display = 'none';
		}
	}
	else {
		// Applying text to button when its a regular alert
		acceptElem.style.display = "none";
		cancelElem.innerHTML = "OK";

		// Cancel button should hide the alerts box
		cancelElem.onclick = function () {
			alerts.style.display = 'none';
		}
	}
}

// Assigning a click event to the dark bg to close/cancel the alert
document.getElementById('alerts_bg').addEventListener('click', function () {
	// Hiding the alert
	document.getElementById('alerts').style.display = 'none';
});
