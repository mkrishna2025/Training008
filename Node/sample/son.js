class Father {
	getName(){
		return "Lakshman";
	}
	getGender() {
		return "M";
	}
}

class Son extends Father {
	getName(){
		return "Rakesh";
	}
	getCity(){
		return "Hyderbad";
	}
}

module.exports = Son;