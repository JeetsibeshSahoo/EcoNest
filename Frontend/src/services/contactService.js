const submitContactForm = async (formData) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800)
  })

  console.log("Contact form submitted:", formData)

  return {
    success: true,
    message:
      "Thanks! Your message has been received. We'll get back to you soon.",
  }
}

export { submitContactForm }