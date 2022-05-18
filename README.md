<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Sl4yZ/tiktoklive-widget">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">TikTokLive-Widget</h3>

  <p align="center">
    A socket client/server program that exposes a widget with alerts (such as gifts, followers ...) for a specific user streaming on Tik Tok Live platform.
    <br />
    <a href="https://github.com/Sl4yZ/tiktoklive-widget"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Sl4yZ/tiktoklive-widget">View Demo</a>
    ·
    <a href="https://github.com/Sl4yZ/tiktoklive-widget/issues">Report Bug</a>
    ·
    <a href="https://github.com/Sl4yZ/tiktoklive-widget/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This program allows you to show alerts for TikTok Live events on your streaming client such as OBS or StreamLABS.
The program exposes an html page where alerts can show off.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [SocketIO (Client/Server)](https://socket.io/)
* [tiktok-live-connector](https://www.npmjs.com/package/tiktok-live-connector)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Toastify](https://apvarun.github.io/toastify-js/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
	git clone https://github.com/Sl4yZ/tiktoklive-widget.git
   ```
2. Install NPM packages
   ```sh
	yarn install
   ```
3. Create a `.env` file at the project root (copy sample configuration in `.env.example`)
   ```
	# DEFINE YOUR LANGUAGE LOCALE
	CLIENT_LOCALE=en-US

	# DEFINE TIKTOK STREAM USERNAME
	TIKTOK_USERNAME=INSERT_HERE

	# DEFINE WIDGET URI
	WIDGET_URI=http://localhost

	# DEFINE SERVER PORT
	PORT=80

	# DEFINE TOAST DURATION (IN MS)
	TOAST_DURATION=500
   ```
4. Start the app
   ```sh
	yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/Sl4yZ/tiktoklive-widget/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Zayed Charef - [@twitter_handle](https://twitter.com/twitter_handle) - zayed.charef@gmail.com

Project Link: [https://github.com/Sl4yZ/tiktoklive-widget](https://github.com/Sl4yZ/tiktoklive-widget)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Sl4yZ/tiktoklive-widget.svg?style=for-the-badge
[contributors-url]: https://github.com/Sl4yZ/tiktoklive-widget/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Sl4yZ/tiktoklive-widget.svg?style=for-the-badge
[forks-url]: https://github.com/Sl4yZ/tiktoklive-widget/network/members
[stars-shield]: https://img.shields.io/github/stars/Sl4yZ/tiktoklive-widget.svg?style=for-the-badge
[stars-url]: https://github.com/Sl4yZ/tiktoklive-widget/stargazers
[issues-shield]: https://img.shields.io/github/issues/Sl4yZ/tiktoklive-widget.svg?style=for-the-badge
[issues-url]: https://github.com/Sl4yZ/tiktoklive-widget/issues
[license-shield]: https://img.shields.io/github/license/Sl4yZ/tiktoklive-widget.svg?style=for-the-badge
[license-url]: https://github.com/Sl4yZ/tiktoklive-widget/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png