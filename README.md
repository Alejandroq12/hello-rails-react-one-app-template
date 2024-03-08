# React-with-Rails-Webpack-template

<a name="readme-top"></a>
<div align="center">
    <img src="logo-julio.png" alt="main-logo" width="500"  height="auto" />
  <br/>
  <h3><b>React with Ruby on Rails - Webpack template.</b></h3>
</div>
# 📗 Table of Contents

- [React-with-Rails-Webpack-template](#react-with-rails-webpack-template)
- [📗 Table of Contents](#-table-of-contents)
- [📖 React with Ruby on Rails - Webpack template. ](#-react-with-ruby-on-rails---webpack-template-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Database](#database)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Run linter](#run-linter)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)

# 📖 React with Ruby on Rails - Webpack template. <a name="about-project"></a>

The "React with Ruby on Rails - Webpack" project serves as a template for creating full-stack applications. It integrates Ruby on Rails with React.js and Redux, employs PostgreSQL for database management, and compiles the code using Webpack. This combination offers a comprehensive environment for developing modern web applications.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://rubyonrails.org/">Ruby on Rails 7.1.3</a></li>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>

### Key Features <a name="key-features"></a>

- **It allows you to fetch a random greeting**
- **A template to create future projects.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

[Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)

### Setup

```sh
cd my-folder
git clone https://github.com/Alejandroq12/hello-rails-react-one-app-template.git
```

### Install

Install all necessary dependencies listed in the `Gemfile`.

```sh
bundle install
```

Install all necessary dependencies listed in the `package.json`.

```sh
npm install
```

### Database


```sh
sudo service postgresql start
```

Create database:

```sh
rails db:create
```

Run migrations:

```sh
rails db:migrate
```

Add the seeds:

```sh
rails db:seed
```

### Usage

To run the project, navigate to the project directory and execute the following command:

```sh
./bin/dev
```

### Run tests
Tests will be available soon!
<!-- To execute all test suites in the application, use the following command in your terminal:

```sh
rspec
``` -->

### Run linter

To run linter, run the following command:

```sh
rubocop

```
```sh
npx stylelint "**/*.{css,scss}"
```

### Deployment

It does not apply because it is a template.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 **Julio Quezada**

- GitHub: [Alejandroq12](https://github.com/Alejandroq12)
- Twitter: [@JulioAle54](https://twitter.com/JulioAle54)
- LinkedIn: [Julio Quezada](https://www.linkedin.com/in/quezadajulio/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **You may use this template to create your own projects.**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please give a star.
Thanks in advance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Thank you to all my colleagues who always inspire me to more than my best.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

**What did you learn?**

I learned how to set up a full-stack project template using Ruby on Rails, React.js, Redux, PostgreSQL, and Webpack, which is very important foundational knowledge for understanding more about these technologies and their interplay.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
