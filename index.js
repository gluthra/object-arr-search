
function inObjectSearch(inputList, key, search) {
	if (inputList && inputList.length > 0 && key && search) {
		var len = inputList.length;
		while( len-- ) {
			if(inputList[len][key] === search)
				return true;
		}
	}

	return false;
}

module.exports = inObjectSearch;