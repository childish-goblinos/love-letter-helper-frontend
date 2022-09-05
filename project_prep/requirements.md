# Software Requirements


## Vision

**What is the vision of this product?**

The vision of love letter helper is to create an app where lonely users can get feedback on improving the quality of their love letters.


**What pain point does this project solve?**

The nature of love letters is inherently vulnerable and personal, so getting feedback on the quality of their content can be a hurdle. We made a secure platform to write, edit, and store love letters, as well as use AI to generate a score to provide direction on the quality of their sweet nothings.


**Why should we care about your product?**

Because, there are so many lonely beasts out there who need our guidance to find their everlasting(s).


## Scope (In/Out)

**IN - What will your product do?**

- The web app will allow users to log in
- The web app will allow users to write and submit love letters to get feedback
- The web app will allow users to retrieve and see their previously written love letters
The web app will allow users to edit their previously written love letters
- The web app will allow users to see feedback on their submitted love letters
- The web app will allow users to delete their love letters
- The web app will display an `About` page with information on the developers


**OUT - What will your product not do?**

- Our web app will not guarantee any romantic outcomes
- Our web app will not generate love letters for users
- Our produce will not handle alternate forms of letters, such as 'spreadsheets'
- Out product will not find you a love interest


### Minimum Viable Product

- Login: The user will be able to log in and only see information in the database relevant to them


- Form: Users can create and edit letters with these fields:
  - Title
  - Recipient
  - Body


- Database: Entries in the database will have these fields:
  - Author
  - Recipient
  - Body
  - Id
  - Score


- Scoring: A score will be generated and we'll use that to write helpful advice for the user to refine their letter


- Letters: The user will be able to do the following with the letters:
  - Write letters
  - View previous letters
    - Previous letters will be displayed in a React Bootstrap component
  - Edit previous letters
  - Delete previous letters


### Stretch goals

- Add animations to the site.
- Add spell check to the love letter editor.
- Add a field for Googling words (with API call to thesaurus, dictionary, or Wikipedia?)
- Display different versions of the site for different tones/uses - Lonely Beast/LoveLorn (pink and girly), Business Letter Helper
- Add the ability for users to email their letter - need to add field for email with regex validation and pop up (see stretch goal from Salmon Cookies?)

## Functional Requirements


1. A user can log in
2. A user can write and submit love letters to get feedback
3. A user can see their previously written love letters
4. A user can edit their previously written love letters
5. A user can see feedback on their submitted love letters
6. A user can delete their stored love letters
7. A user can see an `About` page with information on the developers


### Data Flow

1. User logs in
2. We use Auth0 authorize user
3. User is taken to a main page where they can start to write a letter.
4. User has the option to save the new letter. 
5. Use unique user token to get the user's stored letters from the database (if any)
6. Populate the web page in an `<Accordion>` with the letters from the database; store letter data in `state`
7. When user clicks a previous letter display the letter in a `<Modal>`
    - User can delete or edit:
    - Delete: removes the letter data by `id` from state and database
    - Edit: update the letter by `id` and update database
8. When a user makes a request, send the letter (new or stored) to our server.
9. Make an API call to get the letter scored.
10. Save that score to the MongoAtlas database.


## Non-Functional Requirements


**Usability**
Our product will have clear and simple directions for each user, so they know how to enter, edit, and save love letters. The website will will be friendly to screen readers. Colors will be accessible. We will run Lighthouse tests to confirm this.


**Localization**
At this juncture, our product is available in English for API scoring. Language in this website will be careful to avoid colloquial terms and phrases.
