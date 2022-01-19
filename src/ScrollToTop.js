import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      const button=$('.header-btn-collapse-nav')
      if (button.attr('aria-expanded')==='true'){
        button.click()
      }
      
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);