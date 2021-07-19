// Builds the HTML Table out of myList json data from Ivy restful service.
function buildHtmlTable(arr) {
	var table = _table_//,//.cloneNode(false),
	columns = addAllColumnHeaders(arr, table);
	for (var i = 0, maxi = arr.length; i < maxi; ++i) {
		var tr = _tr_.cloneNode(false);
		//order
		var td = _td_.cloneNode(false);
		td.appendChild(document.createTextNode((i + 1) + "."))
		td.classList.add("column1");
		tr.appendChild(td);
		//row from arr
		for (var j = 0, maxj = 4/*columns.length*/; j < maxj; ++j) {
			var td = _td_.cloneNode(false);
			cellValue = arr[i][columns[j]];
			td.appendChild(document.createTextNode(cellValue));
			td.classList.add("column" + (j + 3));
			tr.appendChild(td);
		}
		_tbody_.appendChild(tr);
	}
	return table;
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(arr, table) {
	var columnSet = [],
		tr = _tr_.cloneNode(false);
	for (var i = 0, l = arr.length; i < l; i++) {
		for (var key in arr[i]) {
			if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
				columnSet.push(key);
				var th = _th_.cloneNode(false);
				th.appendChild(document.createTextNode(key));
				tr.appendChild(th);
			}
		}
	}
	//table.appendChild(tr);
	return columnSet;
}