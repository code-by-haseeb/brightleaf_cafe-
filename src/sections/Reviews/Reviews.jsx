import Card from '../../components/ui/Card/Card'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { REVIEWS } from '../../data/reviews'
import './Reviews.css'

function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionTitle>What our guests say</SectionTitle>

        <div className="grid grid-3">
          {REVIEWS.map((review) => (
            <Card as="figure" key={review.id} className="review">
              <div className="review-stars" aria-label="5 stars">★★★★★</div>
              <blockquote>“{review.text}”</blockquote>
              <figcaption>— {review.name}</figcaption>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
