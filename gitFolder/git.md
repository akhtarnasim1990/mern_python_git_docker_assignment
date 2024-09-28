# GitHub/Bitbucket and Version Control

- [GitHub/Bitbucket and Version Control](#githubbitbucket-and-version-control)
  - [13. Basic Git Commands](#13-basic-git-commands)
  - [14. Branching Strategy](#14-branching-strategy)
  - [15. Merging and Resolving Conflicts](#15-merging-and-resolving-conflicts)
  - [16. Setting up a basic CI/CD pipeline for Node.js using GitHub Actions:](#16-setting-up-a-basic-cicd-pipeline-for-nodejs-using-github-actions)

## 13. Basic Git Commands

Steps to initialize a repository and push to GitHub:

```bash
Copy code

#### Initialize a Git repository

git init

#### Add all files to the repository

git add .

#### Commit the changes

git commit -m "Initial commit"

#### Add remote GitHub repository

git remote add origin https://github.com/myusername/my-repo.git

#### Push the code to the master branch of the remote repository

git push -u origin master
```

---

## 14. Branching Strategy

Feature Branching Strategy:

In a feature branching strategy, each new feature is developed in its own branch. This allows developers to work independently without affecting the main codebase. The typical workflow is:

1.  Create a new branch for the feature:

```bash
git checkout -b feature/new-feature
```

2. Work on the feature and commit changes.

3. Push the branch to the remote repository:

```bash
git push origin feature/new-feature
```

4. Create a pull request (PR) to merge the feature into the main branch.

5. Once reviewed and approved, merge the PR.

---

## 15. Merging and Resolving Conflicts

Step-by-step guide to resolve a merge conflict:

1. Switch to the main branch:

```bash
git checkout main
```

2. Pull the latest changes:

```bash
git pull origin main
```

3. Merge the feature branch:

```bash
git merge feature/new-feature
```

4. Resolve conflicts manually in the conflicting files. Look for sections like this:

```bash
<<<<<<< HEAD
Code from main branch
=======
Code from feature branch

> > > > > > > feature/new-feature
> > > > > > > Edit the file to combine the code as needed.
```

5. Add the resolved files:

```bash
git add .
```

6. Complete the merge with a commit:

```bash
git commit
```

7. Push the changes to the main branch:

```bash
git push origin main 16. CI/CD Integration with GitHub Actions
```

---

## 16. Setting up a basic CI/CD pipeline for Node.js using GitHub Actions:

**Setting up a basic CI/CD pipeline for Node.js using GitHub Actions:**

Create a `.github/workflows/nodejs.yml` file in your repository:

```yaml
Copy code
name: Node.js CI

on:
push:
branches: - main

jobs:
build:
runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '20.11.0'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test

    - name: Deploy to production
      run: |
        # Add your deployment commands here
        echo "Deploying application..."
```

This workflow:

- Triggers on each push to the main branch.
- Sets up the Node.js environment.
- Installs dependencies.
- Runs tests.
- Deploys the application if the tests pass.
