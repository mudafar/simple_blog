import axios from 'axios'

// Get CSRF token only if the element exists.
// Avoid Error:'Cannot read property 'getAttribute' of undefined
// when doing system tests.
let csrfTokenElements = document.getElementsByName('csrf-token');
axios.defaults.headers.common['X-CSRF-Token'] = csrfTokenElements[0].getAttribute('content');


export default axios