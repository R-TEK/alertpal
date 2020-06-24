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
