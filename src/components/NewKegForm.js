import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  return (
    <>
      <form onSubmt={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg name'
          required />
      </form>
    </>
  )
};

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;