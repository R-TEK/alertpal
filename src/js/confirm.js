// Function to open and configure the confirm Alertpal
Alertpal.confirm = function (details) {
	// For confirm, since its similar to regular alert, I reuse that function
	// The alert function is slightly modified to check for a callback
	// If there is not callback then it knows that its not a confirm but an alert, vice versa
	Alertpal.alert(details);
};
