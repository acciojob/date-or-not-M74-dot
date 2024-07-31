var isDate = function (input) {
  // write your code here
	if(input instanceof Date){
		return !isNaN(input.getTime());
	}
	if(typeof input === 'string' || typeof input === 'number'){
		const parseDate = new Date(input);
		return !isNaN(parseDate.getTime())
	}
	return false;
};


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

