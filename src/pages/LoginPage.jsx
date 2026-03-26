import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginWithPassword, saveAuthToken } from '../api/authApi'
import { AuthPageLayout } from '../components/auth/AuthPageLayout'
import { siteText } from '../content/siteText'
import { getLoginValidationError, mapLoginApiError } from '../utils/authValidation'

export function LoginPage() {
  const navigate = useNavigate()
  const page = siteText.auth.login
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    setFormValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    const validationError = getLoginValidationError(formValues)
    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await loginWithPassword({
        email: formValues.email.trim(),
        password: formValues.password,
      })
      if (response?.token) {
        saveAuthToken(response.token, formValues.rememberMe)
      }
      setSuccessMessage(page.success)
      window.setTimeout(() => navigate('/espace-client'), 700)
    } catch (error) {
      setErrorMessage(mapLoginApiError(error))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthPageLayout
      eyebrow={page.eyebrow}
      title={page.title}
      copy={page.copy}
      benefits={siteText.auth.loginBenefits}
      cardTitle={page.cardTitle}
      cardCopy={page.cardCopy}
      footerPrompt={page.switchPrompt}
      footerActionLabel={page.switchAction}
      footerActionTo="/register"
    >
      <div className="auth-provider-group">
        <button className="auth-provider-button" type="button" disabled title={page.googleHint}>
          {page.google}
        </button>
        <p className="auth-provider-note">{page.googleStatus}</p>
      </div>

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

        <div className="auth-meta-row">
          <label className="auth-checkbox">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formValues.rememberMe}
              onChange={handleChange}
            />
            <span>{page.rememberMe}</span>
          </label>

          <a className="auth-text-link" href="#footer-contact">
            {page.forgotPassword}
          </a>
        </div>

        {errorMessage ? <div className="auth-feedback auth-feedback-error">{errorMessage}</div> : null}
        {successMessage ? <div className="auth-feedback auth-feedback-success">{successMessage}</div> : null}

        <button className="button-primary auth-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? page.submitting : page.submit}
        </button>
      </form>
    </AuthPageLayout>
  )
}
