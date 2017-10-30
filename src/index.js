import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAMXF1ikCwuYM_yUfjOLJgQv_HD-RwmPZQ';

// Create a new component. This component should produce some HTML
// const means this is the final value of this variable, no changes.
// JSX to provide JS that ultimately can produce HTML
// this is a class, not component instances
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  };

  videoSearch(term) {
    //prevent no video being rendered when user first load the page
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos })
      // when key and value same name
    });
  };

  render() {
    // get a version of inner function that can only be called every 300 milliseconds
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// reactDOM is used to interact with the actual DOM and react is used to create and manage components.
// can only pass in instances
// to produce instances, jz need to wrap it with JSX tag
// 2nd parameter is to specify which DOM is used to renter that
ReactDOM.render(<App />, document.querySelector('.container'));


