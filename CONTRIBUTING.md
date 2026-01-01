Contributing Guidelines
=======================

Thanks for considering contributing! 🎉  
To keep the project clean, consistent, and easy to maintain, we follow a few simple rules for commits and pull requests.

Please read this before opening a pull request.

* * *

Pull Request Rules
------------------

### 1\. Semantic Pull Request Titles (Required)

All pull requests **must** use a semantic title in the following format:

    <type>: <short description>

### Allowed types

Only the following types are accepted:

*   **feat** – A new feature
*   **fix** – A bug fix
*   **docs** – Documentation changes
*   **style** – Formatting or style changes (no functional changes)
*   **refactor** – Code changes that neither fix a bug nor add a feature
*   **perf** – Performance improvements
*   **test** – Adding or updating tests
*   **chore** – Maintenance tasks, tooling, or dependencies

### Examples

Valid:

    feat: add plant watering simulation
    fix: prevent crash when plant has no soil
    docs: update installation instructions
    chore: update dependencies

Invalid:

    Added new feature
    Fix bug
    Update README

Pull requests that do not follow this format will fail CI checks.

* * *

2\. Skipping the PR Title Check
-------------------------------

If a pull request has the label:

    skip-pr-title

The semantic pull request title check will be skipped.

This is intended for maintainers or exceptional cases only.

* * *

3\. General Guidelines
----------------------

*   Keep changes focused and minimal
*   Follow the existing code style
*   Add or update tests where appropriate
*   Update documentation if behavior changes

* * *

Questions
---------

If you are unsure about anything, feel free to open a draft pull request or start a discussion.

Happy contributing! 🚀
