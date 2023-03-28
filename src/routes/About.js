import { Component } from "../core/template";
import aboutStore from "../store/about";

export default class About extends Component {
  render() {
    const { photo, name, email, github, algorithm } = aboutStore.state;

    this.el.classList.add("about");
    this.el.innerHTML = /* html */ `
      <div style="background-image:url(${photo})" class="photo"></div>
      <p class="name">${name}</p>
      <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${email}</a></p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
      <p><a href="${algorithm}" target="_blank">Algorithm</a></p>
    `;
  }
}
