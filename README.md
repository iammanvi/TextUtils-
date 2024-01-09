# TextUtils
Developed a website that offers users a platform to analyze and edit their text by using various functions, including converting to uppercase, converting to lowercase, , clearing text, copying and removing extra spaces,etc.
Also in this I enabled dark made.

(ReactJs basics...)
✨ npm = npm helps us to install packages in Node js
- here for using any package we have to install/downlod it first...

✨ npx = by using npx, without installing any package we can use this package once

✨Create a New React App 
  syntax:  npx create-react-app AppName

To run the New React App 
  syntax:  npm start  

In src, index.js & App.js are present and this two files are linked with each other.. if we done any changeas in app.js then it will shows on index.js website. So app.js is our site.

✨JSX = JSX is a syntax extension of js... In JSX we write HTML code but in that HTML code (inside {}curly bracket we can write js code also)

In JSX, Html's reserved keyword 
(for) is writtened as (htmlFor)...
class is writtened as className....

In app.js JSX is present(inside function App() HTML code is present i.e. JSX )

✨In react js , if we are using JSX so we have to return only one element(ex. 1 div ya 1 h1 tag aur kuch bhi 1 hi return kr sakte ho)
✨all the code present inside function App() is JSX code and this code is in HTML and inside that {} indicats JS code
✨afer adding h1 tag it shows error becz in this(JSX) we can do only one return.. and here we are doing return of both h1 and div.. so to avoid error use JSX Fragment(<>... </>)  */

✨to write code for website use JSX Fragment(<>... </>) tag in app.js
   JSX fragment is used to return more that one HTML tag... so use JSX fragment while creting website

✨or to write code for website first delete the code that is already present in function App()  and then inside function App() use normal div in app.js
✨In app.js file...  import './App.css'; //here we are importing css.. so for applying css do changes in App.css & we can change name of css file
✨JSX fragment is used to return more that one HTML tag... so use JSX fragment while creting website

take care about one think that any HTML tag written inside JSX should be end with />
ex: <img src="" alt="" /> //this is correct ending
    <img src="" alt="" /> //this is wrong.. in this error occurs

✨We can delete node modules folder and while sending code to someone do not send node module folder... after deleating this folder we can reinstall it for see your website by using syntax : npm install  

✨ For using bootstrap we copy Bootstraps JS and CSS link in index.html
    and if we copy navbar from bootstrap so paste the code in app.js and replace class by className also  href="#" by href="/" also checj end of HTML tag should be </>

✨ for printing default code of React.js use rfc + enter 

✨ to understand props we create props in  new component folder and in which create files by using component name(ex. Navbar.js,..) and remaimber 1 thing component name should be start with capital letter

Now in Navbar.js, write a default code of React.js by typing  rfc + enter

✨ For reusing components like Navbar a again and again, write code of each component by creating seprate file like(Navbar.js) and cut all bootstrap code of navbar present in app.js and paste it in Navbar.js and in app.js import Navbar like this (import Navbar from './components/Navbar';) and inside function App() write <Navbar/> so that by seeing app.js we can understand that we create a navbar.

In app.js inside function App() when we write <Navbar/> so give that navbar a title like this(<Navbar title="TextUtils"/>)
then in Navbar.js pass props as a parameter in fuction like this (export default function Navbar(props)) and then pass title like (props.title) inside navbar.js in curly bracket becz it is a part of js file like this (<a className="navbar-brand" href="/">{props.title}</a>)

by doing this is now we can easily change the title of our website by doing changes in app.js, inside title we can write any name for our website like this(<Navbar title="TextUtils243"/> )

So, basically props means we create a component like (Navbar) and pass various variables inside the component like title, aboutText,etc so all this title and other variables that we pass called props.

So, here in this component <Navbar title="TextUtils" aboutText="About TextUtils"/>  title and aboutText are props.

✨ // syntax for mentioning prop type...
    Navbar.propTypes = {title: PropTypes.string,
                        aboutText: PropTypes.string}

    prop types means write the datatype of the prop that we declare priviously  and also import propType                  


✨  // syntax for mentioning prop type(datatype)...
    Navbar.propTypes = {title: PropTypes.string.isRequired,
                        aboutText: PropTypes.string}

    by using isRequired we have to compulsory pass the props...

✨  // syntax for defaultProps...
    Navbar.defaultProps = {   //defaultProp used when incase we forgot to pass values in props so defaultProp set automatically... otherwise normal passed props is applied
      title: 'Set title here',
      aboutText: 'About text here'
    };   

✨  hooks = hooks apko bina class banaye class ke featurs use karne mai help karta hai
    set state means 1 aisa element jisko react automatically watch karenga
  //useState is a hook in react
    import React, {useState} from 'react'  /here we are importing useState hook from react

    //copy this syntax of hook(useState) from react.js org
    syntax: const [text, setText] = useState('Enter text here'); 
    
    here we set a text value as Enter text here and if we want to update text value so we cant directly update it like this (text = "new text"; //wrong way to change the state)
    
    So, for updating the text value we have to use setText() like this (setText("new text"); //correct way to change the state)
  
✨  const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value); //by passing event as a parameter and using this syntax, now you can add text to the text box while value={text} is present in textarea
    }

