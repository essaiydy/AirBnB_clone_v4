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

$(function () {
	const apiUrl = "http://0.0.0.0:5001/api/v1/status/";
	$.get(apiUrl, function (data, status) {
		if (data.status === "OK" && status === "success") {
			$("#api_status").addClass("available");
		} else {
			$("#api_status").removeClass("available");
		}
	});
});
