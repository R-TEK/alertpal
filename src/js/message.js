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
