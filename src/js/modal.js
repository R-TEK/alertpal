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
	// Similar to the confirm dialog, the modal shares attributes with the regular alert
	// So Im reusing the function
	Alertpal.alert(details);
};
