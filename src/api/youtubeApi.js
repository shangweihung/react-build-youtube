import axios from "axios";

const KEY = 'AIzaSyA5iYVWQSaUaRRVf7dU6PbGzpm4QIRYi6c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params : {
    part: 'snippet',
    maxResult: 20,
    key: KEY
  }
});
