import React from 'react';
import youtube from '../api/youtubeApi.js';
import SearchBar from './SearchBar.js';
import VideoSidebar from './VideoSidebar.js';
import VideoMain from './VideoMain.js';

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
          <h1 className="ui center aligned header" style={{ marginTop: '1rem' }}><i class="fas fa-headphones"></i> My Youtube</h1>
            <SearchBar keywordSubmit={this.keywordSubmit}/>
            <div className="ui grid">
              <div className="ui row">
                <div className="ten wide column">
                  <VideoMain 
                    video={this.state.selectedVideo} 
                    remove={this.remove}/>
                </div>
                <div className="six wide column">
                  <VideoSidebar
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
