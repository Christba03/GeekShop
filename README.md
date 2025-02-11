# Webpage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Angular eCommerce Project

This is a modular Angular project designed for a professional eCommerce application. It follows the best practices of Angular development, including feature-based module separation and lazy loading.

## 📁 Project Structure

```
angular-ecommerce/
│-- src/
│   ├── app/
│   │   ├── core/                 # Core services, guards, interceptors, and utilities
│   │   │   ├── services/         # Global services (e.g., AuthService, API handlers)
│   │   │   ├── guards/           # Route guards for authentication and authorization
│   │   │   ├── interceptors/     # HTTP interceptors (e.g., JWT handling)
│   │   │   ├── core.module.ts    # Core module for global imports
│   │   │   ├── core-routing.module.ts # Routing for core functionalities
│   │   ├── shared/               # Reusable components, directives, and pipes
│   │   │   ├── components/       # UI components shared across modules
│   │   │   ├── pipes/            # Custom pipes for formatting data
│   │   │   ├── directives/       # Custom directives for UI enhancements
│   │   │   ├── shared.module.ts  # Shared module for reusability
│   │   ├── features/             # Feature modules for different sections of the app
│   │   │   ├── product/          # Product-related components and services
│   │   │   │   ├── pages/        # Product list and detail views
│   │   │   │   ├── components/   # Product-specific components (e.g., ProductCard)
│   │   │   │   ├── services/     # Product-related services
│   │   │   │   ├── product.module.ts  # Module definition
│   │   │   │   ├── product-routing.module.ts  # Product routes
│   │   │   ├── cart/             # Shopping cart module
│   │   │   ├── checkout/         # Checkout and payment module
│   │   │   ├── order/            # Order history and tracking module
│   │   │   ├── authentication/   # Login, registration, and authentication services
│   │   ├── app-routing.module.ts # Main application routing
│   │   ├── app.module.ts         # Main application module
│   ├── assets/                   # Static assets (images, JSON files, etc.)
│   ├── environments/             # Configuration for different environments
│   │   ├── environment.ts        # Development environment settings
│   │   ├── environment.prod.ts   # Production environment settings
│   ├── index.html                # Main HTML file
│   ├── main.ts                   # Main entry point for the app
│   ├── styles.scss               # Global styles
```

## 📌 Modules Explanation

### 1️⃣ **Core Module** (`app/core/`)
- Handles global services (e.g., authentication, API communication).
- Includes guards for route protection and interceptors for HTTP handling.
- Should not declare UI components (only logic-related functionality).

### 2️⃣ **Shared Module** (`app/shared/`)
- Contains reusable UI components, directives, and pipes.
- These can be used across different feature modules.

### 3️⃣ **Feature Modules** (`app/features/`)
Each feature module is responsible for a specific part of the application:
- **Product Module** (`product/`) → Displays product lists and details.
- **Cart Module** (`cart/`) → Manages shopping cart functionality.
- **Checkout Module** (`checkout/`) → Handles checkout and payment.
- **Order Module** (`order/`) → Shows past orders and order tracking.
- **Authentication Module** (`authentication/`) → Manages login and registration.

Each feature module follows this structure:
- `pages/` → Contains full-page components (e.g., `ProductListComponent`, `CartComponent`).
- `components/` → Reusable components within the module (e.g., `ProductCardComponent`).
- `services/` → Contains business logic (e.g., `ProductService`, `CartService`).
- `<feature>.module.ts` → Declares and imports module dependencies.
- `<feature>-routing.module.ts` → Defines feature-specific routes.

## 🔧 Setup Instructions

### 1️⃣ **Install Dependencies**
Run the following command to install all required dependencies:
```sh
npm install
```

### 2️⃣ **Run Development Server**
To start the application in development mode:
```sh
ng serve
```
Then open `http://localhost:4200/` in your browser.

### 3️⃣ **Build for Production**
To generate a production-ready build:
```sh
ng build --prod
```

## 🚀 Features
✅ Modular architecture for better maintainability.  
✅ Lazy loading for optimal performance.  
✅ Reusable components and services.  
✅ Secure authentication and authorization.  
✅ Mobile-friendly responsive design.  
✅ API integration for dynamic content.  

## 📜 License
This project is open-source and free to use.
