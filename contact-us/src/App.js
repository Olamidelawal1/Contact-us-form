import './App.css';
import ContactUsForm from './components/contact-us-form';

function App() {
  const contact = (form) => {
    console.log('Sending form data');
    console.log(form);
  }

  return (
    <div className="App">
      <h4>Contact Us, We would love to hear from you</h4>
      <ContactUsForm submitForm = {contact}/>
    </div>
  );
}

export default App;
