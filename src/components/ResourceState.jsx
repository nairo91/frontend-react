export function ResourceState({
  isLoading,
  error,
  skeletonCount,
  loadingClassName = 'loading-grid',
  errorMessage,
  children,
}) {
  if (isLoading) {
    return (
      <div className={loadingClassName}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div className="skeleton" key={index} />
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="empty-state">{errorMessage}</div>
  }

  return children
}
