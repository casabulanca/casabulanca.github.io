(function(win) {

	var viewModel = new ViewModel();
	ko.applyBindings(viewModel);

	$(win).scroll(function() {
		$(".blur").css("opacity", $(win).scrollTop() / 240);
	});
})(window)