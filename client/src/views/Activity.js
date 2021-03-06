import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchActivityData } from "../store/actions/activityActions";
// import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import M from "materialize-css";
import Slider from "react-slick";

class Activity extends Component {
  componentDidMount() {
    // var elems = document.querySelectorAll(".carousel");
    // M.Carousel.init(elems);
  }
  render() {
    console.log(this.props);
    const { error, isLoading, activities } = this.props;

    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };

    let activityList = activities;

    if (error) {
      return <div>Error{error.message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (activityList = activityList.map(activity => {
      return (
        <Slider {...settings} key={activity._id}>
          <div className="card small">
            <div className="#ef9a9a red-text lighten-3 carousel-item ">
              {activity.title}
              <img
                src={activity.img}
                alt=""
                // width="200"
              />
            </div>
          </div>
        </Slider>
      );
    }));
  }
}

export default Activity;
