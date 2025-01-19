# Frontend Assignment

## Live Demo

The app is deployed on Netlify. You can view it live here:
[https://saas-labs-takehome.netlify.app/](https://saas-labs-takehome.netlify.app/)

## Project Setup

Follow these steps to set up the project locally:

1. Clone the repository

    Clone the project from GitHub:

```
git clone https://github.com/rahulchaudhary2244/saaslabs-frontend-assignment.git
```

2. Install dependencies

    Navigate to the project directory and install all dependencies:

```
cd saas-labs-takehome
```

```
npm install
```

3. Start the development server

    Start the app in development mode. By default, the development server runs at http://localhost:5173.

```
npm run dev
```

4. Run unit tests

    Run the unit tests to ensure everything is functioning correctly:

```
npm run test
```

5. Build for production

    Create a production build of the app by running the following command. The build will be generated in the dist/ folder.

```
npm run build
```


## Assignment

You are required to fetch the details of the highly-rated kickstarter projects by implementing an AJAX call to their APIs.

Use the web API (link : https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json) ) to fetch the details of specific projects.

## Minimum Requirements

1. Create a table and list the following three attributes for all the projects:
    * S.No.
    * Percentage funded
    * Amount pledged

1. Ensure that the UI is aesthetically pleasing to gain extra points.
1. Implement pagination with maximum 5 records per page.
1. UX should remain like you would see on an ecommerce website (Amazon, Flipkart, etc.) and edge cases should not break.
1. Take care of last page.

### Expected Output format

| **S.No.** | **Percentage funded** | **Amount pledged** |
|-----------|-----------------------|--------------------|
| 0         | 186                   | 15283              |


## Good to have

1. Unit tests.
1. Accessibility.


## Steps for submission

1. Fork this repo.
1. Do changes to the above assignment.
1. Email the assignment back to us with:
    1. Link of the open source repo.
    1. Link of the assignment hosted online. (You can use any free tools to host this assignment, eg. vercel, netlify or heroku). It should be accessible online for atleast 7 days.


## Frameworks Allowed
1. React/Vanilla JS for JavaScript
1. No framework for CSS. Only Raw CSS is allowed.

## Note

1. Result on platforms like codesandbox, replit are not accepted. 
1. Private unaccessible links will lead to rejection.