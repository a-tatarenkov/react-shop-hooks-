import Review from "./Review/Review";
import {useEffect, useState} from "react";

const Reviews = () => {
    let [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'Alex',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem earum iure iusto nostrum obcaecati repudiandae ullam. Ducimus, molestiae.',
            date: '11.01.2024'
        },
        {
            id: 2,
            name: 'Vladyslav',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem earum iure iusto nostrum obcaecati repudiandae ullam. Ducimus, molestiae.',
            date: '11.12.2023'
        },
        {
            id: 3,
            name: 'Roman',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem earum iure iusto nostrum obcaecati repudiandae ullam. Ducimus, molestiae.',
            date: '09.01.2024'
        }
    ]);
    let [currentReview, setCurrentReview] = useState('');
    let [currentUser, setCurrentUser] = useState('Guest');

    const AddReviewHandler = () => {
        const review = {
            id: reviews.length + 2,
            name: currentUser,
            body: currentReview,
            date: new Date().toLocaleString(),
        }

        setReviews([review, ...reviews]);
        setCurrentReview('');
        console.log(review.id)
    }

    const CurrentReviewHandler = (e) => {
        let currentReview = e.currentTarget.value;
        setCurrentReview(currentReview);
    }

    const CurrentUserHandler = (e) => {
        setCurrentUser(e.currentTarget.value)
    }

    return (
        <div className='Reviews'>
            <h2>Reviews:</h2>
            <input type="text" onChange={CurrentUserHandler}/>
            <textarea name="" id="" cols="60" rows="5" onChange={CurrentReviewHandler} value={currentReview}></textarea>
            <button onClick={AddReviewHandler}>Add review</button>
            {
                reviews.map(review => <Review review={review} key={review.id}/>)
            }
        </div>
    )
}

export default Reviews;