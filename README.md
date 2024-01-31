# SwiftCase Technical Challenge

## Project Overview

The SwiftCase Technical Challenge involves the development of a web interface to interact with product tasks. The webpage allows users to retrieve and process task-related data through API integrations and user inputs.

## Deployment

The app is deployed using [Vercel](https://vercel.com/) and can be accessed at [https://swiftcase-technical-test.vercel.app/](https://swiftcase-technical-test.vercel.app/).

## Features

**Form and Validation:**

1. Create a webpage with a form to enter the Product Status ID and a button to make the request.
2. Validate the Product Status ID on button click and display an error if not entered.
3. Validate that the Product Status ID is an integer and display an error if not.

**User Interface:**

4. Add an image in the bottom right of the page.
5. Add a navbar across the top with links to external websites.

**API Integration and Data Processing:**

6. Use API endpoints to retrieve task IDs based on a workflow status.
7. Fetch details of each task from the API.
8. Store data from each request in an array.

**Data Manipulation:**

9. Sum the cost data for each non-cancelled task.
10. Format the sum as £X.XX.
11. Format date columns as Unix timestamps.

**Output:**

12. Display in a modal.
13. Close the modal.

## Project Structure

```plaintext
/src
|-- components
|   |-- ui
|       |-- button.tsx
|       |-- form.tsx
|       |-- input.tsx
|       |-- modal.tsx
|       |-- mode-toggle.tsx
|       |-- navbar.tsx
|       |-- navigation-menu.tsx
|       |-- product-form.tsx
|       |-- separator.tsx
|-- pages
|   |-- index.tsx
|-- styles
|   |-- ...
|-- README.md
```

## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. **Install Dependencies:**

    ```bash
    cd your-repo
    npm install
    ```

3. **Run the Development Server:**

    ```bash
    npx next dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Enter a valid Product Status ID in the form.
- Click the "Submit" button to fetch and process data.
- View results in a modal

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building web applications.
- [Shadcn UI](https://ui.shadcn.com/) - A custom UI library for enhancing the visual design of the application.
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema declaration and validation library.
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible, and extensible forms with easy-to-use React hooks.
- [next-themes](https://github.com/pacocoursey/next-themes) - A Next.js plugin for theme management, enabling easy theme switching.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.

