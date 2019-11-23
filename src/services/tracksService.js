import tracks from '../volvorap.json';
import TracksService from './TracksService.prod.js';

class TracksServiceDev extends TracksService {
  getTracks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(tracks.reverse());
      }, 2000);
    });
  }
}

export default TracksServiceDev;
