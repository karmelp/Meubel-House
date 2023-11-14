'use client';
import React, { useEffect, useState } from 'react';
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FieldError,
  FieldErrors,
  Merge,
} from 'react-hook-form';
import axios from 'axios';
import { Country } from './Country';
import "./billing.scss"
interface BillingFormProps {
  onSubmit: SubmitHandler<FieldValues>;
}

const BillingForm: React.FC<BillingFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>(); // Specify the type for useForm

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Fetch countries data from an API
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log('countries', response.data);
      setCountries(response.data);
    });
  }, []);

  const renderError = (error: FieldError | undefined) => {
    if (!error) return null;

    return (
      <span style={{ color: 'red' }}>{error.message || 'There was an error with this field'}</span>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className='title'>
      <label>Billing Details</label></div>
      <div className='names'>
      <div className='billing'>
        <label>First Name:</label>
        <input {...register('firstName', { required: 'First name is required' })} />
        {/* {renderError(errors.firstName)} */}
      </div>

      <div className='billing' >
        <label>Last Name:</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>
      </div>
      <div className='billing'>
        <label>comapny name (optional):</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>

      <div className='billing'>
        <label>Country:</label>
        <select {...register('country')}>
          <option value=''>Select a country</option>
          {countries.map((country) => (
            <option key={country?.name?.common} value={country?.name?.common}>
              {country?.name?.common}
            </option>
          ))}
        </select>
      </div>
      <div className='billing'>
        <label>Street address:</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>
      <div className='billing'>
        <label>Town / City:</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>
      <div className='billing'>
        <label>Province:</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>
      <div className='billing'>
        <label>Zip code:</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>
      <div className='billing'>
        <label>Phone:</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>
      <div className='billing'>
        <label>Email address:</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>
      <div className='billing'>
       
        <input {...register('lastName', { required: 'Last name is required' })} />
        {/* {renderError(errors.lastName)} */}
      </div>
      {/* <button type='submit'>Submit</button> */}
    </form>
  );
};

export default BillingForm;
