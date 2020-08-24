// Simple Alert
function simpleAlert() {
	const config = {
		title: 'Simple Alert',
		description: 'This is an example of the simple alerts'
	};

	Alertpal.alert(config);
}

// Confirm dialog
function confirmDialog() {
	const config = {
		title: 'Confirm Dialog',
		description: 'This is an example of the confirm dialog',
		cancel: 'No',
		ok: 'Yes',
		okCallback: function () {
			Alertpal.message('Success', { message: 'You clicked Yes' });
		}
	};

	Alertpal.confirm(config);
}

// Modal box
function modalAlert() {
	const config = {
		title: 'Terms and conditions',
		description:
			'<b style="color: red">Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Vivamus eget augue enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam gravida metus a tellus maximus, a convallis lorem aliquet. Curabitur laoreet purus leo, in malesuada nunc pretium a. Praesent eget nulla vehicula, euismod tortor in, finibus orci. Donec fringilla diam quis enim malesuada convallis. Donec dignissim risus in ante feugiat, id mattis velit ultricies. Mauris in rutrum quam. Fusce vulputate eget nisl quis ultricies. Morbi at metus facilisis, mollis nulla at, eleifend ex.Nam eu ligula vel sem elementum congue. Aliquam sodales nisi et tortor tincidunt, ac tempor eros blandit. Donec malesuada fringilla purus vel venenatis. Nulla tempus mi porta ipsum congue consectetur. Duis leo purus, venenatis eu mollis sed, facilisis ut augue. Integer congue erat id nisi pellentesque, vel fermentum ipsum tristique. Cras placerat risus a augue sodales, vitae gravida lacus commodo. Sed ut ultricies lectus. Donec congue efficitur aliquet. Praesent ut enim aliquam, suscipit lacus eget, tempor sapien. Nunc sem nisi, molestie in mollis in, convallis pharetra neque.Quisque non hendrerit augue. Nam fermentum congue mattis. Morbi ac eros eget urna ullamcorper fringilla. Integer consectetur, ex et convallis aliquam, lacus mauris tristique turpis, quis egestas justo arcu vel arcu. Proin auctor, ipsum sit amet rutrum mattis, tortor dui pharetra enim, gravida maximus urna ipsum eu urna. Vestibulum ac nulla massa. Curabitur vitae tincidunt leo. Cras ac scelerisque purus, eget eleifend massa. Nullam molestie mi sit amet nunc lacinia, ut gravida elit blandit. Sed blandit molestie ligula vel ultrices. Pellentesque orci sapien, interdum sit amet faucibus in, vulputate et est. Vivamus ex nunc, condimentum nec fringilla volutpat, laoreet vitae justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;Nam eu ligula vel sem elementum congue. <br><br> Aliquam sodales nisi et tortor tincidunt, ac tempor eros blandit. Donec malesuada fringilla purus vel venenatis. Nulla tempus mi porta ipsum congue consectetur. Duis leo purus, venenatis eu mollis sed, facilisis ut augue. Integer congue erat id nisi pellentesque, vel fermentum ipsum tristique. Cras placerat risus a augue sodales, vitae gravida lacus commodo. Sed ut ultricies lectus. Donec congue efficitur aliquet. Praesent ut enim aliquam, suscipit lacus eget, tempor sapien. Nunc sem nisi, molestie in mollis in, convallis pharetra neque.Quisque non hendrerit augue. Nam fermentum congue mattis. Morbi ac eros eget urna ullamcorper fringilla. Integer consectetur, ex et convallis aliquam, lacus mauris tristique turpis, quis egestas justo arcu vel arcu. Proin auctor, ipsum sit amet rutrum mattis, tortor dui pharetra enim, gravida maximus urna ipsum eu urna. Vestibulum ac nulla massa. Curabitur vitae tincidunt leo. Cras ac scelerisque purus, eget eleifend massa. Nullam molestie mi sit amet nunc lacinia, ut gravida elit blandit. Sed blandit molestie ligula vel ultrices. Pellentesque orci sapien, interdum sit amet faucibus in, vulputate et est. Vivamus ex nunc, condimentum nec fringilla volutpat, laoreet vitae justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;Vestibulum molestie ut arcu ut egestas. Sed pellentesque gravida massa a convallis. Sed ut vulputate purus. In sodales iaculis ipsum ut convallis. Praesent suscipit enim molestie massa scelerisque, quis sollicitudin.,Vestibulum molestie ut arcu ut egestas. <br><br> Sed pellentesque gravida massa a convallis. Sed ut vulputate purus. In sodales iaculis ipsum ut convallis. Praesent suscipit enim molestie massa scelerisque, quis sollicitudin',
		ok: 'Agree',
		cancel: 'Disagree',
		okCallback: function () {
			Alertpal.message('success', { message: 'You click Agree' });
		}
	};

	Alertpal.modal(config);
}

// Default message
function normalMsg() {
	const config = {
		message: 'Normal'
	};

	Alertpal.message('default', config);
}

// Success message
function successMsg() {
	const config = {
		message: 'Success'
	};

	Alertpal.message('success', config);
}

// Warn message
function warnMsg() {
	const config = {
		message: 'Warning! Click for more info.',
		okCallback: function () {
			Alertpal.alert({
				title: 'Warning details',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget augue enim.'
			});
		}
	};

	Alertpal.message('warn', config);
}

// Error message
function errorMsg() {
	const config = {
		message: 'Error'
	};

	Alertpal.message('error', config);
}