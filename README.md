# Sushi Menu

## Table of contents

<a name="readme-top"></a>

  <summary>Summary</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#screenshot">Screenshot</a></li>
        <li><a href="#built-with">Built with</a></li>
        <li><a href="#tested-with">Tested with</a></li>
      </ul>
    </li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
<br>

## Overview

This page is developed using **React**, **TypeScript**, and **Vite**. In particular, it showcases several core concepts, including list rendering using `map()`, conditional rendering, and the passing of props. The styling of the components is achieved through **styled-components**.
<br>

Here is brief overview of the key components of interest:

- `Footer`: This component illustrates the concept of conditional rendering. Based on the current time of the day (obtained through JavaScript's Date object), it either renders the `Order` component or a message about the restaurant's opening hours.

- `Menu`: The `Menu` component renders a list of sushi items, sourced from an external file named `sushiInfo`. It uses the `map()` function to create a `Sushi` component for each item in the sushi collection, thus implementing the concept of list rendering in React. The component is styled using `MenuStyled`.

- `Order`: This component exhibits an informative message about the restaurant's operating hours and an 'Order' button. The operating hours are passed down as props from the parent `Footer` component.

- `Sushi`: This component represents a single sushi item. It receives a sushi object as a prop and displays the sushi's name, ingredients, and price. Additionally, it employs conditional rendering to indicate if the sushi item is 'SOLD OUT'.

In addition to the practical implementation of React and TypeScript concepts, the application also integrates **unit testing** with **Vitest** to verify that each component behaves as expected.

### Screenshot

<div align="center">
  <img src="https://cdn.discordapp.com/attachments/1114204200885301331/1130492896114655333/sushimenus.netlify.app_.png" alt="Login page" width="600">
</div>

### Built with

<div align="center">
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-Bundler-blue?logo=vite" alt="Vite">
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-Library-green?logo=react" alt="React">
  </a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Language-blue?logo=typescript" alt="TypeScript">
  </a>
  <a href="https://styled-components.com/"><img src="https://badgen.net/badge/styled-components/Styling/pink?logo=styled-components" alt="styled-components"></a>
</div>

### Tested with

<div align="center">
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Vitest-Testing-red?logo=vitest" alt="Jest"></a>
  <a href="https://testing-library.com/docs/react-testing-library"><img src="https://img.shields.io/badge/React_Testing_Library-Testing-orange?logo=testing-library" alt="React Testing Library"></a>
</div>

## Demo

- Live Site URL: [https://sushimenus.netlify.app/](https://sushimenus.netlify.app/)

## Contact

<div align="center">
  <a href="https://www.linkedin.com/in/carlespueyodeveloper/">
    <img src="https://img.shields.io/badge/LinkedIn-Carles_Pueyo-blue?logo=linkedin" alt="LinkedIn">
  </a>
</div>
