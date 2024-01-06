import {useState} from 'react';
import FormInput from './Forminput';
import image from '../images/—Pngtree—man work from home study_6534377.png';
import './Form.css';


const Form = () => {
  const handleSubmit = async (e) => {
      e.preventDefault();
      
  }



    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: 'username',
          type: 'text',
          placeholder: 'Username',
          label: 'Username'
        },
        {
          id: 2,
          name: 'email',
          type: 'text',
          placeholder: 'Email',
          
          label: 'Email'
        },
        {
          id: 3,
          name: 'birthday',
          type: 'text',
          placeholder: 'Birthday',
          
          label: 'Birthday'
        },
        {
          id: 4,
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          
          label: 'Password'
        },
        {
          id: 5,
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'ConfirmPassword',
          
          label: 'ConfirmPassword'
        }
      ];
    
      const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
      };
    
    
        
      console.log(values);



    return (
        <div className='App'>
        
        <div className='image'>
            <img src= {image} />
        </div>
        <form>
        <h1>Register</h1>
          {
            inputs.map((input) => (
              <FormInput key = {input.id} {...input} value = {values[input.name]} onChange = {onChange}/>

            ))
          }
        <button onSubmit = {handleSubmit}>Submit</button>

        </form>


      </div>
    )
}

export default Form;