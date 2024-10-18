import React from 'react'
import PropTypes from 'prop-types'

/** 
 * Primary Btn
*/

const ButtonPrimary = ({
  href,
  target = '_blank',
  label,
  icon,
  classes
}) => {
  if(href) {
    return (
      <a 
        href={href}
        download = "Iqra's Resume"
        target={target}
        className={`btn btn-primary ${classes}`}
      >
        {label}

        {icon ? 
          <span 
            className='material-symbols-rounded'
            aria-hidden='true'
          > {icon}
          </span> 
          : undefined
        } 
      </a>
    )
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}

        {icon ? 
          <span 
            className='material-symbols-rounded'
            aria-hidden='true'
          > {icon}
          </span> 
          : undefined
        } 
      </button>
    )
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

/** 
 * Outline Btn
*/

const ButtonOutline = ({
  href,
  target = '_blank',
  label,
  icon,
  classes
}) => {
  if(href) {
    return (
      <a 
        href={href}
        target={target}
        className={`btn btn-outline ${classes}`}
      >
        {label}

        {icon ? 
          <span 
            className='material-symbols-rounded'
            aria-hidden='true'
          > {icon}
          </span> 
          : undefined
        } 
      </a>
    )
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label}

        {icon ? 
          <span 
            className='material-symbols-rounded'
            aria-hidden='true'
          > {icon}
          </span> 
          : undefined
        } 
      </button>
    )
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

export {
  ButtonPrimary,
  ButtonOutline
} 