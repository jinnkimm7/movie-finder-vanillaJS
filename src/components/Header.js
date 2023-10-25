import Component from '../core/Component';

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header',
    })
  }
  render() {
    this.el.classList.add('header');
    this.el.innerHTML = `
      <h1>
        <span>OMDb API</span></br>
        THE OPEN </br>
        MOVIE DATABASE
      </h1>
      <p>
        The OMDb API is a RESTful web service to obtain movie information,
        all content and images on the site are contributed and maintained by our users.
        If you find this service useful, please consider making a one-time donation or become a patron.
      </p>
    `;
  }
}