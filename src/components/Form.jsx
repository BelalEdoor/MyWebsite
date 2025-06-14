import React, { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import validator from 'validator'

export function Form() {
  const [state, handleSubmit] = useForm('mqabqopb') // تأكد من الـID
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [showThanks, setShowThanks] = useState(false)

  function verifyEmail(email) {
    setValidEmail(validator.isEmail(email))
  }

  useEffect(() => {
  if (state.succeeded) {
    setShowThanks(true)
    toast.success('Email successfully sent!', {
      position: "bottom-left",
      pauseOnFocusLoss: false,
      closeOnClick: true,
      hideProgressBar: false,
      toastId: 'succeeded',
    })
  }
}, [state.succeeded])

  return (
    <div className="mt-12 grid place-items-center">
      {!showThanks ? (
        <>
          <h2 className="text-white text-3xl font-semibold text-center mb-8">
            Get in touch using the form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center text-center gap-4 w-full max-w-[60rem] px-4"
          >
            <input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              onChange={(e) => verifyEmail(e.target.value)}
              required
              className="w-full px-8 py-4 rounded-[1.6rem] outline-none border border-white bg-transparent text-white font-semibold placeholder-white"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea
              required
              placeholder="Send a message to get started."
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-[20rem] px-8 py-4 rounded-[1.6rem] outline-none border border-white bg-transparent text-white font-semibold placeholder-white resize-none overflow-y-auto"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
              type="submit"
              disabled={state.submitting || !validEmail || !message}
              className="px-24 py-4 uppercase text-[#fbfbfb] rounded-md mt-2 text-center"
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="mt-40 text-center">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Thanks for getting in touch!
          </h3>
          <button
            onClick={() => {
              setShowThanks(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="rounded-md py-3 px-6 mt-2 text-white uppercase bg-transparent border border-white hover:bg-white hover:text-black transition-all"
          >
            Back to the form
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  )
}
