function convert(num) {
	var romanNumeral = "";
	var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	for(var i = 0; i< numerals.length; i++);
		while(num>numerals[i]){
			romanNumeral = romanNumeral + roman[i];
			num = num - numerals[i];
		}
	return num;
}

