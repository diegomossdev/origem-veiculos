// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

// export default history;


let history

if (typeof document !== 'undefined') {
  const createBrowserHistory = require('history/createBrowserHistory').default

  history = createBrowserHistory()
}

export default history