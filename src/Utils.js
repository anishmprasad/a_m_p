export function gsdata(data) {
	for (var i = 0; i < data.feed.entry.length; i++) {
		for (var key in data.feed.entry[i]) {
			if (data.feed.entry[i].hasOwnProperty(key) && key.substr(0, 4) === 'gsx$') {
				// copy the value in the key up a level and delete the original key
				data.feed.entry[i][key.substr(4)] = data.feed.entry[i][key].$t;
				delete data.feed.entry[i][key];
			}
		}
	}
	return data.feed.entry;
}

export function getObjects(obj, key, val) {
	var objects = [];
	for (var i in obj) {
		if (obj && typeof obj.hasOwnProperty == 'function') {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] === 'object') {
				objects = objects.concat(getObjects(obj[i], key, val));
			} else if (i === key && obj[key] === val) {
				objects.push(obj);
			}
		}
	}
	return objects;
}
