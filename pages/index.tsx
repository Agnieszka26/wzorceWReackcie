import type { NextPage } from 'next';
import { ContextProvider } from '../components/Context/ContextPassphrase';
import PassphraseForm from '../components/PassphraseForm/PassphraseForm';

const Home: NextPage = () => {
  return (
    <>
      <ContextProvider>
        <PassphraseForm />
      </ContextProvider>
    </>
  );
};

export default Home;
