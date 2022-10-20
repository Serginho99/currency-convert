import { useState } from 'react';
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
} from './AddContactForm.styled';
import { useContacts } from 'components/hooks/useContacts';
import { Notify } from 'notiflix';

const initialState = {
  name: '',
  number: '',
};

export default function AddContactForm() {
  const [state, setState] = useState(initialState);
  const { contacts, addContact } = useContacts();

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, number } = state;

    if (isDuplicateContact({ name, number })) {
      return Notify.info(`${name}: ${number} is already on your contact list`);
    }

    addContact({ name, number });
    Notify.success(`${name} added to your contact list`);
    reset();
  }

  function isDuplicateContact({ name, number }) {
    return contacts.find(
      contact => contact.name === name && contact.number === number
    );
  }

  function reset() {
    setState({ name: '', number: '' });
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormLabel htmlFor="">
        Name:{' '}
        <FormInput
          onChange={handleChange}
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor="">
        Number:{' '}
        <FormInput
          onChange={handleChange}
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormWrapper>
  );
}

// export default class AddContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

// handleChange = e => {
//   const { name, value } = e.currentTarget;
//   this.setState({ [name]: value });
// };

// handleSubmit = e => {
//   e.preventDefault();
//   const { name, number } = this.state;

//   this.props.onSubmit({
//     name,
//     number,
//   });
//   this.reset();
//   e.currentTarget.reset();
// };

// reset = () => {
//   this.setState({ name: '' });
// };

//   render() {
//     const { handleChange, handleSubmit } = this;
// return (
//   <FormWrapper onSubmit={handleSubmit}>
//     <FormLabel htmlFor="">
//       Name:{' '}
//       <FormInput
//         onChange={handleChange}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </FormLabel>
//     <FormLabel htmlFor="">
//       Number:{' '}
//       <FormInput
//         onChange={handleChange}
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//     </FormLabel>
//     <FormButton type="submit">Add contact</FormButton>
//   </FormWrapper>
// );
//   }
// }
