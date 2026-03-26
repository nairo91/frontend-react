import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginWithPassword, saveAuthToken } from '../api/authApi'
import { AuthPageLayout } from '../components/auth/AuthPageLayout'
import { siteText } from '../content/siteText'

export function LoginPage() {
  const navigate = useNavigate()
  const page = siteText.auth.login
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      const response = await loginWithPassword(formValues)
      if (response?.token) {
        saveAuthToken(response.token)
      }
      setSuccessMessage(page.success)
      window.setTimeout(() => navigate('/'), 700)
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthPageLayout
      eyebrow={page.eyebrow}
      title={page.title}
      copy={page.copy}
      benefits={siteText.auth.benefits}
      cardTitle={page.cardTitle}
      cardCopy={page.cardCopy}
      footerPrompt={page.switchPrompt}
      footerActionLabel={page.switchAction}
      footerActionTo="/register"
    >
      <button className="auth-provider-button" type="button" disabled title={page.googleHint}>
        {page.google}
      </button>

      <div className="auth-divider">
        <span>{page.divider}</span>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-field">
          <span>{page.emailLabel}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="auth-field">
          <span>{page.passwordLabel}</span>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </label>

        {errorMessage ? <div className="auth-feedback auth-feedback-error">{errorMessage}</div> : null}
        {successMessage ? <div className="auth-feedback auth-feedback-success">{successMessage}</div> : null}

        <div className="auth-meta">
          <a className="auth-text-link" href="#footer-contact">
            {page.forgotPassword}
          </a>
        </div>

        <button className="button-primary auth-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? page.submitting : page.submit}
        </button>
      </form>
    </AuthPageLayout>
  )
}
