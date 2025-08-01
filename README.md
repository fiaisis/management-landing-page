This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Testing with Cypress

This project uses [Cypress](https://www.cypress.io/) for end-to-end testing. The tests verify that all buttons on the landing page are correctly displayed.

### Running Tests Locally

To run the Cypress tests locally, you can use the following commands:

```bash
# Start the development server
yarn dev

# In a separate terminal, run Cypress tests in headless mode
yarn cypress:run

# Or open the Cypress GUI for interactive testing
yarn cypress:open
```

### Test Structure

The tests are located in the `cypress/e2e` directory and verify:
- The page title is displayed
- All buttons are visible with the correct links:
  - ArgoCD and Grafana buttons in the top section
  - Frontend, Admin-Portal, and API Docs buttons in the Staging section
  - Frontend, Admin-Portal, and API Docs buttons in the Production section

## Continuous Integration

This project includes a GitHub Actions workflow that:
1. Builds the Docker container using the Dockerfile
2. Runs the Next.js application in the container
3. Executes the Cypress tests against the running application

The workflow is triggered on push and pull requests to the main branch. Test results, including screenshots and videos of failed tests, are uploaded as artifacts in GitHub Actions.

### Workflow File

The workflow configuration is located in `.github/workflows/e2e-tests.yml`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
