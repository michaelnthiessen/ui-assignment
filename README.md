# Front-End/Web Development UI Assignment for Interviewees

## Part 1: UI/UX/Interaction Design and Development

A sample set of data (taken from Github's public APIs) is provided. Using this data, please construct a UI which will allow users to do the following:

* When the user visits the landing page, they should be presented with a brief overview of the first 25 commits from the data set (in this case "the first 25" can be any arbitrary 25, order doesn't matter), with some way to view the remaining commits. Keep in mind that the sample data set has only 200 items, but a real data set may have many more than that. This summary should include the following information for each commit:
  * Author's name
  * Commit time (either the author's commit date or the committer's commit date is acceptable)
  * The first 50 characters of the commit message
  * The counts of additions/deletions
  * The files included in the commit
* The user should be able to select a file from a commit to view the patch contents for that file
* The user should also be able to view the full commit message
* When a user is viewing the commit message, they should have the option to edit its contents, with the ability to save these changes
  * If a user closes the commit message and then re-opens it, any previous changes should still be present (Note: this requirement does not hold if the page is reloaded - i.e. it is acceptable for changes to be stored in-memory only)
* Users should be able to tell easily which commits they've made changes to

The data set is made available as an array, `ALL_DATA`, which is loaded and available within `js/main.js`.