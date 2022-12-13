import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewItemIndex: 0}

  iterateForward = () => {
    const {reviewItemIndex} = this.state
    const {reviewsList} = this.props
    const lenOfList = reviewsList.length
    if (reviewItemIndex < lenOfList - 1 && reviewItemIndex >= 0) {
      this.setState(previousIndexVal => ({
        reviewItemIndex: previousIndexVal.reviewItemIndex + 1,
      }))
    } else if (reviewItemIndex >= lenOfList) {
      this.setState(previousIndexVal => ({
        reviewItemIndex: previousIndexVal.reviewItemIndex,
      }))
    }
  }

  iterateBackward = () => {
    const {reviewItemIndex} = this.state
    const {reviewsList} = this.props
    const lenOfList = reviewsList.length
    console.log(reviewItemIndex)
    if (lenOfList > reviewItemIndex && reviewItemIndex > 0) {
      this.setState(previousIndexVal => ({
        reviewItemIndex: previousIndexVal.reviewItemIndex - 1,
      }))
    } else if (reviewItemIndex <= 0) {
      this.setState(previousIndexVal => ({
        reviewItemIndex: previousIndexVal.reviewItemIndex,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewItemIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      reviewItemIndex
    ]

    return (
      <div className="carousel-container">
        <button
          type="button"
          testid="leftArrow"
          onClick={this.iterateBackward}
          className="button-styling"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            alt="left arrow"
            className="arrow"
          />
        </button>
        <div className="review-container">
          <h1 className="review-heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="user-image" />
          <p className="user-name-heading">{username}</p>
          <p className="company-name">{companyName}</p>
          <p className="description-test">{description}</p>
        </div>
        <button
          type="button"
          testid="rightArrow"
          onClick={this.iterateForward}
          className="button-styling"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
            className="arrow"
            onClick={this.iterateForward}
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
