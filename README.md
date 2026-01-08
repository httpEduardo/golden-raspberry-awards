# Golden Raspberry Awards Dashboard

[![Angular](https://img.shields.io/badge/Angular-19.0-red?style=flat&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat&logo=bootstrap)](https://getbootstrap.com/)

A professional Angular dashboard application for displaying and analyzing Golden Raspberry Awards data. This interactive dashboard provides comprehensive insights into the "worst" movies honored by the Golden Raspberry Awards, including winners by year, studio statistics, producer intervals, and searchable movie data.

---

## Overview

The Golden Raspberry Awards Dashboard is a modern web application built with Angular 19 that integrates with a backend API to retrieve and display awards data. The application features a responsive, user-friendly interface designed to provide quick access to historical awards information and statistics.

---

## Features

- **Years with Multiple Winners**: Display years where multiple movies won the award
- **Top Studios by Wins**: Show the three studios with the most Golden Raspberry Awards
- **Producer Win Intervals**: Visualize maximum and minimum intervals between wins for producers
- **Movie Search by Year**: Search and filter winning movies by specific years
- **Responsive Design**: Fully responsive interface using Bootstrap 5
- **Real-time Data**: Integration with backend API for up-to-date information

---

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **Angular CLI**: Version 19.0.4
  ```bash
  npm install -g @angular/cli@19.0.4
  ```

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/httpEduardo/golden-raspberry-awards.git
   cd golden-raspberry-awards
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## Development Server

To start the local development server:

```bash
ng serve
```

Or alternatively:

```bash
npm start
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser. The application will automatically reload whenever you modify any source files.

---

## API Configuration

This project integrates with the following backend API:

```
https://challenge.outsera.tech/api/movies
```

**Configuration Notes**:
- The API connection is configured in `src/app/services/movies.service.ts`
- Ensure the API is operational and accessible from your network
- No authentication is required for the public API endpoints

**Available API Endpoints**:
- Multiple winners by year
- Top studios with wins
- Producer win intervals (max and min)
- Movie search and filtering

---

## Build

To build the application for production:

```bash
ng build
```

For production optimization:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory. These files can be deployed to any static web hosting service.

**Build Output**:
- Optimized and minified JavaScript bundles
- Compiled CSS files
- Compressed assets
- Production-ready HTML

---

## Testing

### Running Unit Tests

Execute unit tests using Karma:

```bash
ng test
```

This will run all unit tests and display the results in your default browser. The test runner will watch for file changes and re-run tests automatically.

### Running End-to-End Tests

Execute end-to-end tests:

```bash
ng e2e
```

**Note**: E2E testing framework must be configured separately (e.g., Protractor, Cypress, or Playwright).

---

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   ├── dashboard.component.ts
│   │   ├── years-with-multiple-winners/    # Years with multiple award winners
│   │   ├── top-studios/                    # Top 3 studios by wins
│   │   ├── producer-interval/              # Producer win intervals
│   │   └── movies-by-year/                 # Movie search by year
│   ├── services/
│   │   └── movies.service.ts               # HTTP service for API calls
│   ├── movies/
│   │   └── movies.module.ts                # Movies feature module
│   ├── app.component.ts                    # Root component
│   └── app.module.ts                       # Root module
├── assets/                                  # Static assets
└── styles.css                               # Global styles
```

**Key Components**:

- **Dashboard Components**: Located in `src/app/dashboard/`, these components handle the display of different dashboard sections
- **Movies Service**: `src/app/services/movies.service.ts` manages all HTTP requests to the backend API
- **Modules**: The application uses Angular modules for organization and lazy loading

---

## Code Scaffolding

Generate new components, services, or other Angular artifacts:

```bash
ng generate component component-name
ng generate service service-name
ng generate module module-name
```

For a complete list of available schematics:

```bash
ng generate --help
```

---

## Troubleshooting

### Common Issues

**1. Port Already in Use**
If port 4200 is already occupied, specify a different port:
```bash
ng serve --port 4300
```

**2. API Connection Issues**
- Verify the API endpoint is accessible: `https://challenge.outsera.tech/api/movies`
- Check your network connection and firewall settings
- Review browser console for CORS or network errors

**3. Module Import Errors**
Ensure `CommonModule` and `FormsModule` are imported in modules that use:
- `*ngIf`, `*ngFor` directives (requires `CommonModule`)
- `[(ngModel)]` two-way binding (requires `FormsModule`)

**4. Build Failures**
- Clear the Angular cache: `npm run ng cache clean`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript version compatibility

**5. Test Failures**
- Ensure all dependencies are installed: `npm install`
- Clear Karma cache: `rm -rf .angular/cache`
- Update browser drivers if using E2E tests

---

## Additional Notes

- **Angular Version**: This project uses Angular 19.0 with standalone components support
- **Styling**: Bootstrap 5.3 is used for responsive design and UI components
- **HTTP Client**: The application uses Angular's `HttpClient` for API communication
- **State Management**: Component-level state management (no external state library required)

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is available for educational and demonstration purposes.

---

## Contact

For questions or support, please open an issue in the GitHub repository.
