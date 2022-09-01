import PropTypes from 'prop-types'

const Button = ({
  href,
  text,
  className,
}: {
  text: string
  href: string
  className: string
}) => {
  return (
    <div>
      <a href={href} className={className}>
        {text}
      </a>
    </div>
  )
}

Button.defaultProps = {
  text: 'Button',
}

export default Button
