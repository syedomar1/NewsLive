import "./App.css";

// import React, { Component } from "react";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;

  // state = {
  //   progress: 0,
  // };

  const [progress, setProgress] = useState(0);

  // setProgress = (progress) => {
  //   this.setState({ progress: progress });
  // };
  // c="Omar";
  // render() {
  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          // progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                // setProgress={this.setProgress}
                // apiKey={this.apiKey}
                // key="general"
                // pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                // setProgress={this.setProgress}
                // apiKey={this.apiKey}
                // pageSize={this.pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                // setProgress={this.setProgress}
                // apiKey={this.apiKey}
                // pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                // setProgress={this.setProgress}
                // apiKey={this.apiKey}
                // pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                // setProgress={this.setProgress}
                // apiKey={this.apiKey}
                // pageSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                // setProgress={this.setProgress}
                // apiKey={this.apiKey}
                // pageSize={this.pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                // setProgress={this.setProgress}
                // apiKey={this.apiKey}
                // pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                // setProgress={this.setProgress}
                // apiKey={this.apiKey}
                // pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
      {/* Hello my first class based component {this.c} */}
    </div>
  );
  // }
};

export default App;