# Planning Data Service Handbook
A handbook for people working on the Planning Data service.

## Installation

1. Install [Node.js](https://nodejs.org/en/download) v18.17 or later.
2. Clone or download this repository.
3. In the `service-handbook` directory, run `make init`.
4. Run `make serve`.

## Using GitHub Codespaces

If you want to contribute using GitHub Codespaces, follow these steps:

1. **Open the Repository in GitHub**  
   Go to the repository page on GitHub.

2. **Create a Codespace**  
   Click the green **Code** button, then select **Create codespace on main** (or your chosen branch).

3. **Wait for Setup**  
   GitHub will automatically set up your development environment. This may take a few minutes.

4. **Install Dependencies**  
   In the Codespaces terminal, run:
   ```
   make init
   ```

5. **Start the Development Server**  
   In the terminal, run:
   ```
   make serve
   ```

6. **Make Contributions**  
   - Edit files as needed.
   - Use `git` commands in the terminal to commit and push your changes.
   - Open a Pull Request on GitHub to propose your changes.

**Tip:** Codespaces comes with Node.js pre-installed, so you don't need to install it manually.