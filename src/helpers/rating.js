const formatRating = rating => {
  return !rating ? 'Not rated' : 'Rating ' + rating
}

const colorizeRating = rating => {
  if(rating>=7) {
    return "showRatingGood"
  } else if(rating>=5) {
    return "showRatingAvg"
  } else {
    return "showRatingBad"
  }
}

module.exports = {
  formatRating,
  colorizeRating
}