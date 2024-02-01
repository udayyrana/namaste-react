# Namaste React

# Parcel

- Making a development build
- Creating a local server
- HMR = Hot Module Replacement (means automatically refreshing our page)
- Uses a File Watching Algorithm - Written in CPP
- Caching - for Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential Bundling - to support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code

# Fast Food ordering app

- Header
- Logo
- Nav Items
- Body
- Search
- RestaurantContainer
- RestaurantCard
- Img
- Name of res, star rating, cuisine, delivery time

- Footer
- Copyright
- Links
- Address
- Contact

# React Hooks

- Normal JS Utility functions
- most imp hooks
  - useState()
  - useEffect()
- useState() - whenever a state variable is updated react will automatically re-renders the component, in a very optimaized way

# How react works behind the scene?

- It uses re-concilation algorithm behind the scenes
- This consists virtual DOM, and diff algorithm
- Virtual DOM - is nothing but a representation of actual DOM
  - if we log into console, then we can see, it is a normal javascript object
- Diff-algorithm - it function is to find out the difference between the old virtual DOM and new Virtual DOM
  - basically it keeps a track of changes of old virtual DOM, and if there is any difference, it automatically updates the actual DOM
  - it is fast because, to check diff. in objects it is fast as compared to HTML tags

# Why React is Fast?

- it uses virtual DOM
- virtual DOM - is representation of actual DOM
