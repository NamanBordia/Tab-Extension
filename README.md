# Naman's Tab Extension

## Description
**Naman's Tab** is a custom browser extension that overrides the default new tab page, offering a clean, user-friendly interface with quick access to useful links and Google search functionality. Users can also personalize their experience by adding custom links directly from the interface.

## Features
- **Custom New Tab Page**: Replaces the browser's default new tab page with a personalized interface.
- **Quick Links**: Provides quick access to popular websites like YouTube, LeetCode, MDN Docs, and more.
- **Add Custom Links**: Allows users to add their own frequently visited links dynamically.
- **Google Search Integration**: Includes a built-in Google search bar for convenience.
- **Interactive Animations**: Features smooth animations and a responsive design.

## File Structure

- **`manifest.json`**  
  Defines the extension's metadata and configurations.  
  - Overrides the default new tab with `index.html`.  
  - Sets the extension's name, version, and icon.

- **`index.html`**  
  The main HTML file for the new tab interface.  
  - Contains the layout, sidebar with predefined links, and search functionality.  
  - Includes a modal to add custom links.

- **`styles.css`**  
  The stylesheet for the extension.  
  - Styles the sidebar, content area, and modal window.  
  - Adds animations such as a bouncing ball and name shrinking effects.

- **`script.js`**  
  The JavaScript file for handling interactivity.  
  - Handles adding custom links dynamically.  
  - Implements animations and modal behavior.  
  - Manages search functionality.

- **`logo.png`**  
  The icon for the extension.


## Installation
1. Download the project files.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click on **Load unpacked** and select the project folder.
5. The extension will be added, and you can open a new tab to see it in action.

## Usage
1. Open a new tab to access the extension.
2. Use the sidebar to quickly navigate to predefined links.
3. Click **Add Link** to add custom links by providing a name and URL.
4. Use the Google search bar for quick web searches.

## Future Enhancements
- Add support for theme customization.
- Include a bookmark synchronization feature.
- Integrate widgets for weather, news, or to-do lists.

## Credits
Developed by **Naman Bordia**.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you like.


 
