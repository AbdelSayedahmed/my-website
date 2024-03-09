Creating a Responsive Navbar

1. Create your index.html and add your boilerplate code.

2. Create the HTML structure:
   - Define a `<header>` element for the navbar.
   - Inside the `<header>`, include an `<h1>` for the title of your site and a `<p>` for the description. Give your `<p>` tag a class of "subtitle".
   - Add a `<nav>` element with an unordered list (`<ul>`) for the navigation links (`<a>`). For the purpose of this example, you can set the href for each link to "#".

```
<header>
    <h1>Media Queries</h1>
    <p class="subtitle">Navbar Demo Using Flexbox & Media Queries</p>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Me</a></li>
      </ul>
    </nav>
</header>
```

3. Prepare the HTML for styling:
   - Wrap the contents of `<header>` in a `<div>` with classes `container` and `container-nav`.
   - Group the `<h1>` and `<p>` elements within a `<div>` with a class of "titles".

4. Start styling with CSS:
   - Set the background color and font family for the `<body>`.

```body {
    background-color: #719fb0; /* Set background color */
    font-family: "VT323", monospace; /* Set font family */
    margin: 0; /* Remove default 8px margin */
}
```

   - Define typography styles for elements such as `<h1>`, `.subtitle`, and `<nav>`.

```
h1 {
  font-family: "Caveat", cursive; /* Set font family for <h1> */
  font-size: 2.5rem; /* Set font size */
  color: #fd5f00; /* Set text color */
  margin: 0; /* Remove default margin */
}

.subtitle,
nav a {
  font-size: 1.5rem; /* Set font size for subtitle and nav links */
  color: #f9f8eb; /* Set text color */
  text-transform: uppercase; /* Transform text to uppercase */
}
```


   - Set layout styles for the `.container` and `.container-nav`, including width, max-width, and margin.

```
.container {
  width: 90%; /* Set width */
  max-width: 900px; /* Set maximum width */
  margin: 0 auto; /* Center horizontally */
}

.container-nav {
  display: flex; /* Use flexbox */
  justify-content: space-between; /* Space items evenly */
  align-items: center; /* Center items vertically */
}
```

5. Styling the navbar:
   - Style the `<header>` with background color, padding, and box-shadow.

```
header {
  background-color: #05004e; /* Set background color */
  padding: 0.8em 0; /* Set padding */
  box-shadow: 2px 2px 10px #f1f6f9; /* Add box shadow */
}
```
   - Style the `<nav>` elements such as `<ul>` to remove bullets and make them display as flex items.
   - Adjust spacing between `<li>` elements within the `<nav>`.

```
nav ul {
  list-style: none; /* Remove bullets */
  padding: 0; /* Remove default padding */
  display: flex; /* Use flexbox */
}

nav li {
  margin-left: 2em; /* Add space between list items */
}
```
   - Style the `<a>` elements within the `<nav>` to remove underline and define hover/focus styles.

```
nav a {
  text-decoration: none; /* Remove underline */
}

nav a:hover,
nav a:focus {
  color: #fd5f00; /* Change color on hover/focus */
}
```

6. Make the navbar responsive with media queries:
   - Apply media queries with a maximum width of 640px.
   - Center the texts inside the `.container` for smaller screens.
   - Change the flex-direction of `.container-nav` and `<nav>` to column for stacking items vertically.
   - Adjust margins for `<li>` elements within `<nav>` to ensure proper spacing.

```
@media (max-width: 640px) {
  .container {
    text-align: center; /* Center text */
  }

  .container-nav {
    flex-direction: column; /* Stack items vertically */
  }

  nav ul {
    flex-direction: column; /* Stack list items vertically */
  }

  nav li {
    margin: 0.8em 0; /* Add margin top and bottom */
  }
}
```

7. Test your navbar on different screen sizes to ensure responsiveness and usability.
