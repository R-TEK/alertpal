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
					<button id="ap_cancel"></button>
					<button id="ap_ok"></button>
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

/**
 * Function to configure and display the 'alert' style Alertpal
 *
 * @memberof Alertpal
 * @method alert
 * @param {object} [details] - Object to define the configuration of the alert (Optional - details of defaults below)
 * @param {string} [details.title] - The title of the alert (Optional - default is 'Alert')
 * @param {string} [details.description] - The description of the alert. String can also include HTML for formatting (Optional - default is no description)
 * @param {string} [details.cancel] - The text inside the cancel button (Optional - default is 'Return')
 *
 * @example
 * const config = {
 *   title: 'New alert',
 *   description: 'This is a alert pop up',
 *   cancel: 'Go back'
 * };
 *
 * Alertpal.alert(config);
 */
Alertpal.alert = function (details) {
	// The user doesn't have to pass details, so if they don't I define details here to avoid errors
	if (details === undefined) details = {};

	// Defining HTML elements
	const desc = document.getElementById('ap_description');
	const title = document.getElementById('ap_title');
	const cancel = document.getElementById('ap_cancel');
	const ok = document.getElementById('ap_ok');

	// Showing the ok button
	ok.style.display = 'inline-block';

	console.log(details);

	// Configuration
	title.innerText = details.title === undefined ? 'Alert' : details.title;
	desc.innerHTML = details.description === undefined ? '' : details.description;
	cancel.innerHTML = details.cancel === undefined ? 'Return' : details.cancel;
	ok.innerHTML = details.ok === undefined ? 'OK' : details.ok;
	details.callback === undefined
		? (ok.style.display = 'none')
		: (ok.onclick = function () {
				closeAlert();
				details.callback();
		  });

	// Showing/Hiding elements
	document.getElementById('alertpal_alert').style.display = 'block';
	document.getElementById('alertpal_bg').style.display = 'block';
};

/**
 * Function to configure and display the 'confirm' style Alertpal
 *
 * @memberof Alertpal
 * @method confirm
 * @param {object} details - Object to define the configuration of the confirm
 * @param {string} [details.title] - The title of the alert (Optional - default is 'Alert')
 * @param {string} [details.description] - The description of the alert. String can also include HTML for formatting (Optional - default is no description)
 * @param {string} [details.cancel] - The text inside the cancel/return button (Optional - default is 'Return')
 * @param {string} [details.ok] - The text inside the the ok button (Option - default is 'OK')
 * @param {function} details.callback - The callback you want to be triggered when the ok button is clicked
 *
 * @example
 * const config = {
 *   title: 'Delete Item',
 *   description: 'Are you sure you want to delete this item?',
 *   cancel: 'No',
 *   ok: 'Yes',
 *   callback: deleteItemFunction
 * };
 *
 * Alertpal.confirm(config);
 */
Alertpal.confirm = function (details) {
	// Error handling, if no parameter is specified
	if (details === undefined)
		throw 'To use the confirm method, you must pass the "details" parameter';

	// A callback needs to be provided, so if there isn't one I throw an error
	if (details.callback === undefined && typeof details.callback === 'function')
		throw 'The confirm method must pass "callback" parameter';

	// For confirm, since its similar to regular alert, I reuse that function
	// The alert function is slightly modified to check for a callback
	// If there is not callback then it knows that its not a confirm but an alert, vice versa
	Alertpal.alert(details);
};

/**
 * Function to configure and display the 'message' style Alertpals
 *
 * @memberof Alertpal
 * @method message
 * @param {string} [type]- Define what type of message 'normal' / 'success' / 'warn' / 'error' (Optional - default is 'normal')
 * @param {object} [details] - Object to define the configuration of the alert (Optional - details of defaults below)
 * @param {string} [details.message] - The message for the alert (Optional - default is 'Alert')
 * @param {number} [details.timeout] - The time(milliseconds) on how long the alert should stay on screen (Optional - default is 5 seconds)
 * @param {function} [details.callback] - The callback to be triggered if click is fired on the message (Optional - default is to remove the message)
 *
 * @example
 * const config = {
 *   message: 'Warning, you cant do that!',
 *   timeout: 10000
 * };
 *
 * Alertpal.message('warn', config);
 */
Alertpal.message = function (type, details) {
	// Parameters are optional, so if they don't I define them here to avoid errors
	if (type === undefined) type = 'normal';
	if (details === undefined) details = {};

	// Defining container and element
	const container = document.getElementById('alertpal_message_container');
	const messageNode = document.createElement('p');
	messageNode.setAttribute('class', 'ap_message');

	// Configuration
	const timeout = details.timeout === undefined ? 5000 : details.timeout;
	messageNode.innerHTML = details.message === undefined ? 'Message' : details.message;
	messageNode.onclick =
		details.callback === undefined
			? (messageNode.onclick = function () {
					messageNode.style.transform = 'translate(285px, 0px)';
					setTimeout(function () {
						messageNode.style.display = 'none';
					}, 300);
			  })
			: (messageNode.onclick = details.callback);

	// Checking the type of message and assigning a CSS class to have style match it function
	switch (type) {
		case 'success':
			messageNode.className += ' success';
			break;
		case 'warn':
			messageNode.className += ' warn';
			break;
		case 'error':
			messageNode.className += ' error';
			break;
		default:
			messageNode.className += ' normal';
			break;
	}

	// Timeout to trigger the message sliding away
	setTimeout(function () {
		messageNode.style.transform = 'translate(285px, 0px)';
	}, timeout);

	// Timeout to trigger the removal of the element in the DOM
	//	setTimeout(function () {
	//		container.removeChild(messageNode);
	//	}, timeout + 200);

	// Checking whether to append or insertBefore
	if (container.children.length < 1) {
		// If there is no children in the container, I append
		container.appendChild(messageNode);
	} else {
		// If there is children in the container, I insert at the top
		container.insertBefore(messageNode, container.children[0]);
	}
};

/**
 * Function to configure and display the 'alert' style Alertpal
 *
 * @memberof Alertpal
 * @method modal
 * @param {object} [details] - Object to define the configuration of the alert (Optional - details of defaults below)
 * @param {string} [details.title] - The title of the alert (Optional - default is 'Alert')
 * @param {string} [details.description] - The description of the alert. String can also include HTML for formatting (Optional - default is no description)
 * @param {string} [details.cancel] - The text inside the cancel button (Optional - default is 'Return')
 * @param {string} [details.ok] - The text inside the the ok button (Option - default is 'OK')
 * @param {function} [details.callback] - The callback you want to be triggered when the ok button is clicked (Optional - default is no action)
 *
 * @example
 * const config = {
 *   title: 'Read the rules of the Application',
 *   description: 'Rules...',
 *   cancel: 'Decline',
 *   ok: 'Accept',
 *   callback: acceptFunction
 * };
 *
 * Alertpal.modal(config);
 */
Alertpal.modal = function (details) {
	// Applying the modal CSS class to the change the alerts style to suit a modal
	document.getElementById('alertpal_alert').setAttribute('class', 'alertpal_modal');

	// Calling alert alertpal
	// Similar to the confirm dialogue, the modal shares attributes with the regular alert
	// So Im reusing the function
	Alertpal.alert(details);
};
