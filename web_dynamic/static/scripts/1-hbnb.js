$(document).ready(fonction() {
	var amids = []
	$('li input[type="checkbox"]').change(function () {
		var amid = $(this).data('id');
		if $(this.checked) {
			amids.push(amid);
		}
		else {
			var index = amids.indexOf(amid);
			if (index !== -1) {
				amids.splice(index, 1);
			}
		}
		$('div.Amenities h4').text(amids.join(', '));
		});
});
