## Lab 2.1: Interactive Accessibility Lesson

This lab is designed to explore the key principles of accessible web design using an interactive lesson from Scrimba. Accessibility ensures that web applications are usable by everyone, including individuals with disabilities. The principles and techniques covered in this lab will help us to create inclusive web experiences.

### Key Accessibility Features Implemented

### Semantic HTML
- Proper use of structural elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Appropriate heading hierarchy (`<h1>`, `<h2>`)
- Semantic form elements with proper labels and structure
- Meaningful `<figure>` and `<figcaption>` for images

### ARIA Attributes
- Roles: `navigation`, `main`, `contentinfo`, `alert`
- Relationship attributes: `aria-labelledby`, `aria-describedby`
- State attributes: `aria-required`, `aria-invalid`, `aria-current`
- Live regions: `aria-live="polite"` and `aria-live="assertive"`

### Color & Visual Accessibility
- High contrast color scheme (verified with WebAIM Contrast Checker)
- Visible focus styles for keyboard navigation
- Responsive design for various viewport sizes

### Keyboard Accessibility
- Skip link for bypassing navigation
- Comprehensive keyboard navigation support
- Focus management for form validation errors

### Form Accessibility
- Proper `<label>` associations
- `fieldset` and `legend` for grouped controls
- Accessible error messages with ARIA
- Required field indicators

### JavaScript Enhancements
- Accessible form validation
- Dynamic content updates with ARIA live regions
- Focus management for interactive elements

## Files Included
- `accessible.html` - Main HTML file with semantic structure
- `accessible.css` - Styles with accessibility considerations
- `accessible.js` - JavaScript with accessibility enhancements

## Testing Tools Used
- WebAIM Contrast Checker - Verified color contrast ratios
- axe DevTools - Automated accessibility testing
- Screen Readers (NVDA, VoiceOver) - Manual testing with assistive technologies
- Keyboard Navigation - Manual testing without mouse

## Reflection Questions

### 1. What accessibility enhancements were the most challenging to implement, and why?
The most challenging aspects were implementing proper ARIA attributes for dynamic content and ensuring all interactive elements work with keyboard navigation. Getting the `aria-live` regions to work correctly with screen readers required careful testing across different browsers and assistive technology combinations. Form validation with proper focus management and error messaging also required significant attention to ensure a seamless experience for all users.

### 2. How do ARIA attributes improve the experience for users relying on assistive technologies?
ARIA attributes provide essential context and information to assistive technologies:
- `aria-labelledby` and `aria-describedby` create relationships between elements and their descriptions
- `aria-live` announces dynamic content changes without requiring focus
- `aria-required` clearly indicates mandatory form fields
- Roles like `navigation` and `main` help users understand page structure
- `aria-invalid` communicates form validation states
- `aria-current` indicates the current page in navigation

### 3. What tools did you use to check color contrast, and how did they help?
The WebAIM Contrast Checker was invaluable for verifying that all text has sufficient contrast against backgrounds (minimum 4.5:1 for normal text). Browser extensions like axe DevTools helped identify contrast issues and suggest compliant color combinations. These tools provided immediate feedback during development, ensuring the color scheme met WCAG standards before user testing.

## Implementation Checklist
- Used semantic HTML elements (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Added appropriate ARIA roles and attributes
- Ensured proper color contrast (verified with WebAIM)
- Included `alt` text for all meaningful images
- Implemented keyboard navigation and focus styles
- Created accessible forms with proper labels and error handling
- Added skip link for keyboard users
- Supported dynamic content with ARIA live regions

## How to Use
- Clone or download the repository
- Open `accessible.html` in a web browser
- Test accessibility features:
  - Navigate using only keyboard
  - Use a screen reader to experience the ARIA implementations
  - Verify form validation and error messages
  - Check color contrast with testing tools
