import { FC, useState, ChangeEvent, useEffect, useRef } from 'react';
import { startPayment } from '../../utils';

import Button from '../partials/button';

const DonateForm: FC = () => {
  const [state, setState] = useState({
    amount: '',
    submitting: false,
    complete: false,
    txhash: '',
  });
  const [error, setError] = useState('');
  const paymentSession = useRef(false);

  useEffect(() => {
    if (error && state.amount) {
      setTimeout(() => setError(''), 7000);
    }
  }, [error, state.amount]);

  useEffect(() => {
    if (paymentSession.current && state.complete) {
      paymentSession.current = false;
    }
  }, [state.complete]);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    paymentSession.current = true;
    setState((prevState) => ({
      ...prevState,
      submitting: true,
      txhash: '',
    }));
    await startPayment({
      setError,
      setState,
      amount: state.amount,
    });
  };

  const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
      <div className="mt-5">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 mx-2 stroke-current text-red-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
          </svg>
          <label className="ml-3 text-red-500 text-sm">{message}</label>
        </div>
      </div>
    );
  };

  const SuccessMessage = () => {
    return (
      <div className="mt-5">
        <p className="text-base mt-0 mb-4 text-indigo-900 font-bold">
          Thank you for your generous donation
        </p>
        <div className="flex-1">
          <article className="my-4 flex">
            <a
              href={`https://ropsten.etherscan.io/tx/${state.txhash}`}
              target="_blank"
              rel="noopener noreferrer">
              <Button text="View transaction" sub className="inline-block" />
            </a>
            <Button
              text="Send again"
              className="inline-block ml-3"
              sub
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  complete: false,
                }))
              }
            />
          </article>
        </div>
      </div>
    );
  };

  if (state.complete) return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full sm:w-2/3 md:w-1/2">
        <div className="my-4">
          <input
            type="text"
            className="p-3 bg-transparent border-gray-300 text-xs sm:text-sm border block w-full focus:ring focus:outline-none"
            placeholder="0.00"
            value={state.amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              setState((prevState) => ({
                ...prevState,
                amount: value,
              }));
            }}
          />
        </div>
        <div>
          <Button
            type="submit"
            text="Transfer (ETH)"
            className="focus:ring focus:outline-none w-full transfer-button"
          />
          <ErrorMessage message={error} />
        </div>
      </div>
    </form>
  );
};

export default DonateForm;
