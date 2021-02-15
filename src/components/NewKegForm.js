import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg name'
          value='Barracuda'
          required
        />
        <input
          type='text'
          name='brand'
          placeholder='Brand'
          value='Heff'
          required
        />
        <input
          type='number'
          name='price'
          placeholder='Price'
          value='5'
          required
        />
        <input
          type='number'
          name='alcoholContent'
          placeholder='ABV'
          value='4'
          required
        />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity'
          value='2'
          required
        />
        <button type='submit'>Add Keg</button>
      </form>
    </>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      quantity: event.target.quantity.value,
      id: v4(),
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
