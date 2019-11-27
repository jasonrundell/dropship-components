import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import styles from './breadcrumb.module.scss'

const Breadcrumb = ({ crumbs }) => {
  const crumbItems = crumbs.map(crumb => {
    return (
      <li key={crumb.path}>
        <Link to={crumb.path}>{crumb.text}</Link>
      </li>
    )
  })

  return (
    <nav aria-label="Breadcrumb" className={styles.root}>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {crumbItems}
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = {
  crumbs: PropTypes.array.isRequired,
}

export default Breadcrumb

/** Example */
/*
crumbs={[
  { path: '/blog/', text: 'Blog' },
  { path: path, text: title },
]}
{crumbs && <Breadcrumb crumbs={crumbs} />}
*/
