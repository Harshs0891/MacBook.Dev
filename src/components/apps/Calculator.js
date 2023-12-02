import React, { Component } from "react";
import Window from "../Window";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
  }

  componentDidMount() {
    this.setupIframeListener();
  }

  setupIframeListener() {
    const iframe = this.iframeRef.current;

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.document.addEventListener(
        "click",
        this.handleIframeClick
      );
    }
  }

  handleIframeClick = (event) => {
    if (event.target.tagName === "a" && event.target.href) {
      event.preventDefault();
      this.loadInIframe(event.target.href);
    }
  };

  loadInIframe = (url) => {
    const iframe = this.iframeRef.current;

    if (iframe) {
      iframe.src = url;
    }
  };
  render() {
    return (
      <>
        <iframe
          className="h-full w-full"
          src="https://social-app-asaprogrammer.vercel.app/"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </>
    );
  }
}
export default Calculator;
