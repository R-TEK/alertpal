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
 * @param {function} details.okCallback - The callback you want to be triggered when the ok button is clicked
 *
 * @example
 * const config = {
 *   title: 'Delete Item',
 *   description: 'Are you sure you want to delete this item?',
 *   cancel: 'No',
 *   ok: 'Yes',
 *   okCallback: deleteItemFunction
 * };
 *
 * Alertpal.confirm(config);
 */
Alertpal.confirm = function (details) {
	console.log(details.okCallback);
	// Error handling, if no parameter is specified
	if (details === undefined)
		throw 'To use the confirm method, you must pass the "details" parameter';

	// A okCallback needs to be provided, so if there isn't one I throw an error
	if (details.okCallback === undefined || typeof details.okCallback != 'function')
		throw 'The confirm method must pass "okCallback" parameter';

	// For confirm, since its similar to regular alert, I reuse that function
	// The alert function is slightly modified to check for a okCallback
	// If there is not okCallback then it knows that its not a confirm but an alert, vice versa
	Alertpal.alert(details);
};
