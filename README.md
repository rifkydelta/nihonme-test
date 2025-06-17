# NihonMe - Prototype Validity Test Web App

A modern web application for testing the validity of the NihonMe Japanese language learning application prototype. This application provides a platform for validators to assess both media and material aspects of the prototype.

## Features

- Interactive web preview with device simulation (Desktop, Tablet, Mobile)
- Separate validation forms for media and material assessment
- Modern, responsive UI with glass-morphism design
- Desktop-optimized interface

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rifkudelta/nihonme-test.git
cd nihonme-test
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Configuration

The application uses a configuration file for URLs. Follow these steps to set up your configuration:

1. Copy the template configuration file:
```bash
cp src/config/urls.example.json src/config/urls.json
```

2. Edit `src/config/urls.json` with your URLs:
```json
{
  "urlwebtest": "https://example.com/nihonme",
  "forms": {
    "media": "https://your-media-form-url",
    "material": "https://your-material-form-url"
  }
}
```

Replace the following values:
- `urlwebtest`: Change to your website URL (e.g., "https://your-website.com" or "https://your-github-username.github.io/your-repo")
- `media`: Your media validation form URL
- `material`: Your material validation form URL

Example with actual values:
```json
{
  "urlwebtest": "https://rifkydelta.github.io/nihonme",
  "forms": {
    "media": "https://docs.google.com/forms/d/e/your-media-form-id/viewform?embedded=true",
    "material": "https://docs.google.com/forms/d/e/your-material-form-id/viewform?embedded=true"
  }
}
```

## Development

1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Build for production:
```bash
npm run build
# or
yarn build
```

## Project Structure

```
nihonme-test/
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx            # Application entry point
│   └── config/
│       ├── urls.json       # URL configuration (create from template)
│       └── urls.example.json # Template configuration file
├── public/
│   └── index.html         # HTML template
├── package.json
└── README.md
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Key Components

### App.tsx
- Main application component
- Handles view state management
- Implements device preview functionality
- Manages form integration

### Configuration
- `urls.json`: Contains all external URLs used in the application
  - `urlwebtest`: Main website preview URL
  - `forms.media`: Media validation form URL
  - `forms.material`: Material validation form URL

## Development Guidelines

1. **State Management**
   - Use React's useState for local state
   - View states: 'initial', 'media', 'material'
   - Device view states: 'desktop', 'tablet', 'mobile'

2. **Styling**
   - Use Tailwind CSS for styling
   - Follow the existing design system
   - Maintain responsive design principles

3. **Component Structure**
   - Keep components modular and reusable
   - Follow the established layout patterns
   - Maintain consistent naming conventions

## Deployment

1. Build the application:
```bash
npm run build
# or
yarn build
```

2. Deploy the contents of the `dist` directory to your hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Arindra Rifky Saputra

Project Link: [https://github.com/rifkydelta/nihonme-test](https://github.com/rifkydelta/nihonme-test) 