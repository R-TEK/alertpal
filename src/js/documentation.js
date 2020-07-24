document.addEventListener('DOMContentLoaded', function () {
	const source = document.querySelectorAll('.details');
	for (x in source) {
		source[x].style.display = 'none';
	}
});
