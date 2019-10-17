/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <ul className="footer-links">
          <li><a href="https://github.com/wenzhixin/multiple-select" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/wenzhixin2010" target="_blank">Twitter</a></li>
          <li><a href="http://wenzhixin.net.cn/" target="_blank">My website</a></li>
          <li><a href="http://repos.wenzhixin.net.cn/" target="_blank">My repos</a></li>
          <li><a href="mailto:wenzhixin2010@gmail.com">Email</a></li>
        </ul>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    )
  }
}

module.exports = Footer
