# FrontEnd Specific Notes

## TailwindCSS Design Standards

*feel free to alter to what you think looks better, but chnage it here for other devs to see with a descriptive commit message*

###  Border Radius Standards
| Component | Tailwind Class |
|-----------|--------------|
| **Buttons** | `rounded-md` | 
| **Cards / Sections** | `rounded-lg` | 
| **Modals & Containers** | `rounded-lg` | 
| **Avatars** | `rounded-xl` | 
| **Icons** | `rounded-xl` |

###  Typography Standards
- anything `font-montserrat` bold where necessary, semi-bold where necessary

### Responsive Design Standards
- implement as necessary, use `sm:, md:, lg:, xl:, 2xl:` breakpoints where you see fit for your component

#### Example
```html
<div class="p-4 md:p-8 lg:p-12">
  This padding increases on larger screens.
</div>
```



## React Examples 


### Example Using a colour from `/assets/styles/BrandColours.js`:

```jsx
import React from "react";
import colours from "../assets/styles/BrandColours";

const CustomButton = ({ text, bgColor }) => {
  return (
    <button
      className={`
        //conditional logic for colour possibilities
        ${
          bgColor === "RAISIN_BLACK" ? "bg-raisin" :
          bgColor === "BLUE_MUNSELL" ? "bg-blueMunsell" :
          bgColor === "REBECCA_PURPLE" ? "bg-rebeccaPurple" :
          bgColor === "BLUE_YONDER" ? "bg-blueYonder" :
          "bg-white text-black"
        }
      `}
      >
      {text}
    </button>
  );
};

export default CustomButton;
```
### Then in a page you can pass the props paramaters into a Button:
```jsx
<CustomButton text="Learn More" bgColor="REBECCA_PURPLE" />
```

## Using a component from React Bootstrap

### Call the component in a component directory file --> customize it --> Apply to pages as necessary

```jsx
import Form from 'react-bootstrap/Form';

function FormControlDisabledExample() {
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Disabled input"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      <br />
      <Form.Control
        type="text"
        placeholder="Disabled readonly input"
        aria-label="Disabled input example"
        readOnly
      />
    </>
  );
}

export default FormControlDisabledExample;
```

### Simple React Bootstrap Usage
You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.
```jsx
import React from 'react';
import Button from 'react-bootstrap/Button';

function MyButton() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button
        variant="primary" // Button style (primary, secondary, success, etc.)
        size="lg" // Button size (sm, lg)
        onClick={() => alert('Button clicked!')} // Click handler
        style={{ borderRadius: '25px', fontWeight: 'bold' }} // Custom inline styles
      >
        Click Me
      </Button>
    </div>
  );
}

export default MyButton;
```
#### In App.js (example)
```jsx
import React from 'react';
import MyButton from './MyButton';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Welcome to My App</h1>
      <MyButton />
    </div>
  );
}

export default App;

```

### Example with Framer-Motion (Can use for sliders, hover animations, underline animations, etc.)
Here’s a simple example of how to animate a slider using Framer Motion
```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  { id: 1, title: 'Card 1', color: 'bg-blue-500' },
  { id: 2, title: 'Card 2', color: 'bg-green-500' },
  { id: 3, title: 'Card 3', color: 'bg-yellow-500' },
  { id: 4, title: 'Card 4', color: 'bg-red-500' },
  { id: 5, title: 'Card 5', color: 'bg-purple-500' },
  //...
];

function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-64">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 flex items-center justify-center rounded-lg shadow-lg ${cards[currentIndex].color}`}
          >
            <h2 className="text-white text-2xl font-bold">
              {cards[currentIndex].title}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        &rarr;
      </button>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSlider;
```

#### Using it in a page

```jsx
import React from 'react';
import CardSlider from './CardSlider'; // Import your slider component

function MainPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        <p className="mt-2">Explore the interactive slider below!</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Featured Cards</h2>
          <CardSlider /> {/* Include the slider component */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;

```

#### Now put the page in the app

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Main Page */}
      </Routes>
    </Router>
  );
}

export default App;

```


