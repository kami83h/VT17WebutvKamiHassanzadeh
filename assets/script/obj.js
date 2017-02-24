var obj = { title: "My title", description: "my description"};

/*obj.toString = function() {
	return this.title + ", " + this.description;
}*/

Object.defineProperty(obj, "toString", {
	value: function() {
		return this.title + ", " + this.description;
	},
	writable: true,
	enumerable: false,
	configurable: false
});



localStorage.data = "votes";
//localStorage.somethingelse = "something else";
//localStorage.removeItem("somethingelse");

display(localStorage.votes);
//display(localStorage.rating);*/