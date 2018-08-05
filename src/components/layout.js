import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header;
    let footer;

    footer = (<div>
      <a href="https://stackexchange.com/users/2851/sean-lynch"><img src="https://stackexchange.com/users/flair/2851.png" width="208" height="58" alt="profile for Sean Lynch on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Sean Lynch on Stack Exchange, a network of free, community-driven Q&amp;A sites" /></a>
    </div>);

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Sean's Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Sean's Blog
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          backgroundColor:'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        {footer}
      </div>
    )
  }
}

export default Template
