import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const SERVICE_ID = "service_bd05uye"
  const TEMPLATE_ID = 'template_y99guwk'
  const USER_ID = "gQKX_MpnoOCZVxBse"

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
          confirmButtonColor: "#22bfc8",
          timer: 3000,
        })
      }, (error) => {
        console.log(error.text)
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          confirmButtonColor: "#22bfc8",
          text: error.text,
          timer: 3000,
        })
      })
      e.target.reset()
      setFormData('')
      setMessage('')
  }


  return (
    <div className='contact-section' id='contact'>
      <h2 className='sub-heading'>Contact</h2>
      <p>Are you interested in my work? I am eager to bring my passion and skills to new challenges and opportunities. Enter your info below and I will be in touch soon!</p>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input
          className="input-field"
          name="from_name"
          type="text"
          value={formData.from_name}
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />
        <input
          className="input-field"
          name="reply_to"
          type="text"
          value={formData.reply_to}
          placeholder="Enter your email address"
          onChange={handleChange}
          required
        />
        <textarea
          className="textarea-field"
          name="message"
          type="text"
          value={message}
          placeholder="What would you like to say..."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className='btn'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact