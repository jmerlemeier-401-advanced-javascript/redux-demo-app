import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Name from '../name';
import Changer from '../changer';

export default props => {
  return (
    <>
      <Header title="Redux app" />
        <Name />
        <Changer />
      <Footer>
        <p>&copy; j. meier</p>
      </Footer>
    </>
  )
}