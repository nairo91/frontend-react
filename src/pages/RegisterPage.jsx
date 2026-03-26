import { useState } from 'react'
import { AuthPageLayout } from '../components/auth/AuthPageLayout'
import { siteText } from '../content/siteText'

export function RegisterPage() {
  const page = siteText.auth.register
  const [formValues, setFormValues] = useState({
    fullName: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [infoMessage, setInfoMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')
    setInfoMessage('')

    if (formValues.password !== formValues.confirmPassword) {
      setErrorMessage(page.passwordMismatch)
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => window.setTimeout(resolve, 500))
    setInfoMessage(page.info)
    setIsSubmitting(false)
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
      footerActionTo="/login"
    >
      <button className="auth-provider-button" type="button" disabled title={page.googleHint}>
        {page.google}
      </button>

      <div className="auth-divider">
        <span>{page.divider}</span>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-form-grid">
          <label className="auth-field">
            <span>{page.fullNameLabel}</span>
            <input type="text" name="fullName" value={formValues.fullName} onChange={handleChange} required />
          </label>

          <label className="auth-field">
            <span>{page.companyLabel}</span>
            <input type="text" name="company" value={formValues.company} onChange={handleChange} />
          </label>
        </div>

        <label className="auth-field">
          <span>{page.emailLabel}</span>
          <input type="email" name="email" autoComplete="email" value={formValues.email} onChange={handleChange} required />
        </label>

        <div className="auth-form-grid">
          <label className="auth-field">
            <span>{page.passwordLabel}</span>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </label>

          <label className="auth-field">
            <span>{page.confirmPasswordLabel}</span>
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {errorMessage ? <div className="auth-feedback auth-feedback-error">{errorMessage}</div> : null}
        {infoMessage ? <div className="auth-feedback auth-feedback-info">{infoMessage}</div> : null}

        <button className="button-primary auth-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? page.submitting : page.submit}
        </button>
      </form>
    </AuthPageLayout>
  )
}
