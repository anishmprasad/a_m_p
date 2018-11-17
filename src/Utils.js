export function gsdata(data) {
  for (var i = 0; i < data.feed.entry.length; i++) {
    for (var key in data.feed.entry[i]) {
      if (
        data.feed.entry[i].hasOwnProperty(key) &&
        key.substr(0, 4) === 'gsx$'
      ) {
        // copy the value in the key up a level and delete the original key
        data.feed.entry[i][key.substr(4)] = data.feed.entry[i][key].$t;
        delete data.feed.entry[i][key];
      }
    }
  }
  return data.feed.entry;
}
