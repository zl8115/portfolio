import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import ReactGA from "react-ga";

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      // console.log("PageView:"+window.location.pathname);
      // if (window.location.pathname !== "/"){
      	
      // }
      window.scrollTo(0, 0);
      // ReactGA.set({ page: window.location.pathname });
  	  // ReactGA.pageview(window.location.pathname);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);