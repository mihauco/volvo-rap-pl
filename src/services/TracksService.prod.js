class TracksService {
  getTracks() {
    return fetch('https://raw.githubusercontent.com/noiff/volvo-rap-pl/master/src/volvorap.json')
      .then(response => {
        return response.json();
      })
      .then(tracks => {
        tracks.reverse();
      });
  }
}

export default TracksService;
