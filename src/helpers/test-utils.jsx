import { render, RenderOptions } from '@testing-library/react'
import PropTypes from 'prop-types'
import '@/index.css'
import React from 'react'

const AllTheProviders = ({ children }) => {
  return <>{children}</>
}

AllTheProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
