import React from 'react';
// import styles from './footer.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        {this.props.children}
      </footer>
    )
  }
}

export default Footer;