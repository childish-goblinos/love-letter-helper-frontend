//import axios from 'axios';
import React from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';

// withAuth0, because this is a Class-based component
// this allows us to use the `user` object in props
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

let SERVER = process.env.REACT_APP_SERVER;

class Main extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      letters: [],
      letter: {},
      letterBody: '',
    }
  }
  getLetters = async () =>
  {
    // if the user is authenticated, they can get letters
    if (this.props.auth0.isAuthenticated)
    {
      try
      {
        // generate a token with auth0
        // we'll use it to make a secure request with to our server
        const res = await this.props.auth0.getIdTokenClaims();

        // this is the raw token
        // note the double underscore __ in .__raw
        const jwt = res.__raw;
        // console.log('jwt: ', jwt)


        // config to do a `get` request from our server using the user's email
        const config = {
          method: 'get',
          baseURL: `${SERVER}`,
          url: '/letters',
          headers: {
            "email": `${ this.props.auth0.user.email }`,

            // pass token into the headers
            "Authorization": `Bearer ${ jwt }`
          }
        };
        // console.log('config: ', config);
        let letterData = await axios(config);

        // 
        console.log(letterData.data);

        // set the letter data from our mongo database into state
        // which'll re-render the page
        this.setState({
          letters: letterData.data,
        })
      }
      catch (err)
      {
        console.log(`Problem getting letters for ${ this.props.auth0.user.name }: `, err.message);
      }
    }
    else
    {
      // display a message asking users to log in
      // TODO: change the render to display something to let the user know they aren't logged in and can't see letters
      console.log('please log in');
    }
  }
  //make a book object
  handleAddSubmit = (e) =>
  {
    e.preventDefault();
    let letter = {
      title: e.target.addTitle.value,
      recipient: e.target.addRecipient.value,
      letterBody: this.state.letterBody,

      //    email: [CALLED FROM AUTH0 SECRET STATE]
      email: this.props.auth0.user.email,
      //score: this.state.scoreText
    }

    console.log('letter: ', letter);

    this.addLetter(letter);
    //[RE - RENDER ACCORDIAN ?]
  }

  handleCharCount = e =>
  {
    e.preventDefault();
    console.log('letter body in handle char: ', e.target.value);
    this.setState({
      letterBody: e.target.value,
    });
  }


  //THIS IS THE FUNCTION TO CREATE THE LETTERS

  addLetter = async (letter) =>
  {
    if (this.props.auth0.isAuthenticated)
    {
      try
      {
        // generate a token with auth0
        // we'll use it to make a secure request with to our server
        const res = await this.props.auth0.getIdTokenClaims();

        // this is the raw token
        // note the double underscore __ in .__raw
        const jwt = res.__raw;
        // console.log('jwt: ', jwt)


        const config = {
          method: 'post',
          baseURL: `${SERVER}`,
          url: '/letters',
          headers: {
            // pass token into the headers
            "Authorization": `Bearer ${ jwt }`
          },
          data: letter,
        }

        // log to see what the config file looks like
        // console.log('add letter config: ', config);

        let createdLetter = await axios(config);

        // log the letter that axios returns to us
        console.log('createdLetter: ', createdLetter.data);


        // use spread operator to make a deep copy of letters array in state, and concatenate the createdLetter.data to the end
        this.setState({
          letters: [...this.state.letters, createdLetter.data],
        });
      }
      catch (e)
      {
        console.log('This letter wasn\'t saved. ', e.response)
      }
    }

  }


  /*
  handleEmail = () =>
  {
    try
    {
      let emailObj =
      {
        "email": "jacko7557@gmail.com",
        // "email": this.props.auth0.user.email,
      };
      console.log('handle email object', emailObj);

      return emailObj;
    }
    catch (err)
    {
      console.log(`Problem getting email: `, err.message);
    }
  }
  */

  // letters will load as soon as this page is loaded
  // the page will only be loaded if they get through auth0
  componentDidMount()
  {
    this.getLetters();
  }
  render()
  {

    return (
      <>
        <p>Proof of Life</p>
        <AddForm
          handleAddSubmit={ this.handleAddSubmit }
          handleCharCount={ this.handleCharCount }
        />
        <EditForm />
      </>
    );
  }
}

export default withAuth0(Main);
