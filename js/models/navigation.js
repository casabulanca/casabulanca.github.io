var Navigation = function() {
	var self = this;

	self.isSlideMenu = ko.observable(false);

	self.navigatItem = ko.observableArray([{
		text: "home",
		isSelect: ko.observable(true)
	}, {
		text: "lastest",
		isSelect: ko.observable(false)
	}, {
		text: "tags",
		isSelect: ko.observable(false)
	}, {
		text: "contact",
		isSelect: ko.observable(false)
	}])

	self.naviActive = function(data) {
		self.navigatItem().forEach(function(value, index) {
			if (value.text === data.text) {
				value.isSelect(true);
			} else {
				value.isSelect(false);
			}
		});

		return true;
	};

	self.slideMenuControl = function(data, event) {
		var menuClass;

		if (self.isSlideMenu()) {
			self.isSlideMenu(false);
		} else {
			self.isSlideMenu(true);
		};

		menuClass = 'open-menu';
		return document.getElementsByTagName('body')[0].classList.toggle(menuClass);
	}

	self.closeSlideMenu = function(data, event) {
		self.isSlideMenu(false);
		return document.getElementsByTagName('body')[0].classList.remove('open-menu');
	}

	self.highlightNavigate = function(data, event){
		self.navigatItem().forEach(function(value, index) {
			if (value.text === "tags") {
				value.isSelect(true);
			} else {
				value.isSelect(false);
			}
		});

		return true;
	}
}