import './Review.css';

const Review = ({review}) => {
    return (
        <div className='Review'>
            <h2>{review.name}</h2>
            <p>{review.body}</p>
            <h6>Added: {review.date}</h6>
        </div>
    )
}

export default Review;