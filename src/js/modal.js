Alertpal.modal = function (details) {
	// Applying the modal CSS class to the change the alerts style to suit a modal
	document.getElementById('alertpal_alert').setAttribute('class', 'alertpal_modal');

	// Calling alert alertpal
	// Similar to the confirm dialogue, the modal shares attributes with the regular alert
	// So Im reusing the function
	Alertpal.alert(details);
};
