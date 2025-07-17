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
          <h2 className="text-gray-900 dark:text-white text-3xl font-semibold text-center mb-8">
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
              className="
                w-full px-8 py-4 rounded-[1.6rem] outline-none
                border-2 border-transparent
                bg-transparent
                text-gray-900 dark:text-white font-semibold
                placeholder-pink-400 dark:placeholder-pink-400
                focus:border-transparent
                focus:outline-none
                focus:ring-4
                focus:ring-pink-500
                focus:ring-offset-0
                transition
              "
              style={{
                backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6)', // pink-500 to purple-500
                backgroundClip: 'padding-box',
              }}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              required
              placeholder="Send a message to get started."
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full h-[20rem] px-8 py-4 rounded-[1.6rem] outline-none
                border-2 border-pink-500
                bg-transparent
                text-gray-900 dark:text-white font-semibold
                placeholder-pink-400 dark:placeholder-pink-400
                resize-none overflow-y-auto
                focus:outline-none
                focus:ring-4
                focus:ring-pink-500
                focus:ring-offset-0
                transition
              "
              style={{
                borderImageSlice: 1,
                borderImageSource: 'linear-gradient(to right, #ec4899, #8b5cf6)',
              }}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting || !validEmail || !message}
              className={`
                px-24 py-4 uppercase rounded-md mt-2 text-center
                ${
                  state.submitting || !validEmail || !message
                    ? 'bg-gradient-to-r from-pink-300 to-purple-300 cursor-not-allowed text-gray-500'
                    : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'
                }
                transition-colors duration-200
              `}
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="mt-40 text-center">
          <h3 className="text-gray-900 dark:text-white text-2xl font-semibold mb-4">
            Thanks for getting in touch!
          </h3>
          <button
            onClick={() => {
              setShowThanks(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="
              rounded-md py-3 px-6 mt-2
              bg-transparent border border-gray-900 dark:border-white
              text-gray-900 dark:text-white uppercase
              hover:bg-gray-900 dark:hover:bg-white
              hover:text-white dark:hover:text-black
              transition-all
            "
          >
            Back to the form
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  )
}
