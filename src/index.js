import React from 'react'
import ReactDOM from 'react-dom'
import ToDo from './ToDo'

let dom = document.createElement("div")
document.body.appendChild(dom)

ReactDOM.render(
  <ToDo />,
  dom
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}