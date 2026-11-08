import Card from '../../components/ui/Card/Card'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { FEATURES } from '../../data/features'
import './About.css'

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle>Why people love us</SectionTitle>

        <div className="grid grid-3">
          {/* .map() turns each item in the array into a Card */}
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="feature">
              <img src={feature.image} alt="" className="feature-img" loading="lazy" />
              <div className="feature-body">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
