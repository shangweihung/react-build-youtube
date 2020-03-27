import React from 'react';
import youtube from '../api/youtubeApi.js';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';

class App extends React.Component {
  state = { videos:[], selectedVideo: null };

  componentDidMount(){
    this.keywordSubmit('Jason Mraz');
  }

  keywordSubmit = (term) => {
    youtube.get('/search' , {
      params:{
        q:term
      }
    })
    .then(res => {
      this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[0]
      });
    })
    .catch(err => {
      console.log(err);
      this.setState({videos: err})
    })
  };

  videoSelect = (video) => {
    this.setState({selectedVideo: video});
  };

  render(){
    return (
      <div className="ui container">
        <SearchBar keywordSubmit={this.keywordSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} remove={this.remove}/>
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                videoSelect={this.videoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
