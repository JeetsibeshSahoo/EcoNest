const submitContactForm = async (formData) => {
  if (!formData || typeof formData !== "object") {
    return {
      success: false,
      message: "Invalid contact form data.",
    }
  }

  const { name, email, message } = formData

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return {
      success: false,
      message: "Please provide your name, email, and message.",
    }
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 800)
  })

  console.log("Contact form submitted:", {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  })

  return {
    success: true,
    message:
      "Thanks! Your message has been received. We'll get back to you soon.",
  }
}

export { submitContactForm }