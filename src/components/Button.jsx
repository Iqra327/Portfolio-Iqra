import React from 'react'
import PropTypes from 'prop-types'



const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  if(href) {
    return (
      <a href=""></a>
    )
  } else {
    return (
      <div>Button</div>
    )
  }
}

ButtonPrimary.protoTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

export {
  ButtonPrimary
} 