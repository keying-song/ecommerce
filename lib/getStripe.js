import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51LgbXtILZ3zr17UuqydXgQiU0r3FTD2KmYdALnGk9qqJYakfk9mV0VCUbOk8t1wdWO1uYHTTuANLonLUKxGlqemk00rpwNZAEJ");
  }

  return stripePromise;
}

export default getStripe;
