import tracks from '../volvorap.json';

class TrackService {
  getTracks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(tracks.reverse());
      }, 2000);
    });
  }
}

export default TrackService;
