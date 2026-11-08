import Button from '../../components/ui/Button/Button'
import Card from '../../components/ui/Card/Card'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { useContactForm } from '../../hooks/useContactForm'
import { SITE } from '../../data/site'
import './Contact.css'

function Contact() {
  // All the form logic comes from our custom hook.
  const { values, errors, sent, handleChange, handleSubmit } = useContactForm()

  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-inner">
        <div>
          <SectionTitle align="left">Come say hello</SectionTitle>
          <ul className="contact-info">
            <li><strong>Address</strong>{SITE.address}</li>
            <li><strong>Hours</strong>{SITE.hours}</li>
            <li><strong>Phone</strong>{SITE.phone}</li>
          </ul>
        </div>

        <Card as="form" className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* && means: only show this if `sent` is true */}
          {sent && <p className="contact-success">Thanks! We'll get back to you soon.</p>}

          <label>
            Name
            <input name="name" value={values.name} onChange={handleChange} />
            {errors.name && <span className="contact-error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input name="email" type="email" value={values.email} onChange={handleChange} />
            {errors.email && <span className="contact-error">{errors.email}</span>}
          </label>

          <label>
            Message
            <textarea name="message" rows="4" value={values.message} onChange={handleChange} />
            {errors.message && <span className="contact-error">{errors.message}</span>}
          </label>

          <Button type="submit">Send message</Button>
        </Card>
      </div>
    </section>
  )
}

export default Contact
