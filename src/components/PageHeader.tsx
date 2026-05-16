type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="page-header">
      {eyebrow && (
        <div className="page-header__eyebrow">
          <span>{eyebrow}</span>
          <span className="page-header__eyebrow-line" />
        </div>
      )}
      <h2 className="headline-lg page-header__title">{title}</h2>
      {description && <p className="body-lg page-header__desc">{description}</p>}
    </header>
  )
}
