$('button').hover(function () {
	$(this).addClass('animate__animated animate__pulse');
});
const ajaxCall = () => {
	$.ajax({
		url:
			' https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' +
			$('#search').val(),
		dataType: 'jsonp',
		type: 'GET',
		success: function (data) {
			console.log(data);
			$('#update').empty();

			let output = '';
			data.query.search.forEach((value) => {
				const title = '<h2>' + value.title + '</h2>' + '<br>';
				const snippet = '<p>' + value.snippet + '</p>';
				const linkOut =
					'<a href="https://en.wikipedia.org/wiki/' +
					value.title +
					'" target=_blank>"';
				const endLink = '</a>';
				output += linkOut + title + endLink + snippet + '<hr>';
			});

			$('#update').append(output);
		}
	});
};

const randomFunction = () => {
	$('#update').empty();
	$('#search').empty();
	$('iframe').attr('src', 'https://en.wikipedia.org/wiki/Special:Random');
};

$('document').ready(() => {
	$('#search').focus();
	$('#search').off('keyup');
	$('#search').on('keyup', () => {
		ajaxCall();
		$('iframe'.attr)('src', '');
	});
	// Show random wiki article
	$('.random').on('click', () => {
		randomFunction();
		$('.random').text('Show me another random article!');
	});
});
