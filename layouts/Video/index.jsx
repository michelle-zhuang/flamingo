import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import { Config } from "../../config.js";
import css from "../style.css";

import VideoCard from "../../components/ArticleCard";

import { SizeMe } from "react-sizeme";

export default class CategoryLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aVideoCard: this.props.posts[0], // grabs the first video in the list, but you need to do something like <VideoCard video={this.props.post[0]}></VideoCard> because you want to use the json as the props to a video card
      bVideoCard: this.props.posts[1], // grabs the second video in the json
      cVideoCard: this.props.posts[2] // grabs the 3rd video in the json
    };
  }

  render() {
    return (
      <SizeMe monitorHeight={false}>
        {({ size }) => {
          if (size.width < 600) {
            return <div>{/* mobile layout */}</div>;
          } else if (size.width < 900) {
            return <div>{/* tablet layout */}</div>;
          } else {
            return <div>{this.state.aVideoCard}</div>;
          }
        }}
      </SizeMe>
    );
  }
}