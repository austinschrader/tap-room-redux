import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type='text' name='name' placeholder='Keg name' required />
        <input type='text' name='brand' placeholder='Keg name' required />
        <input type='text' name='price' placeholder='Keg name' required />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Keg name'
          required
        />
        <input type='text' name='quantity' placeholder='Keg name' required />
      </form>
    </>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.name.brand,
      price: event.target.name.price,
      alcoholContent: event.target.name.alcoholContent,
      quantity: event.target.name.quantity,
      id: v4(),
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
