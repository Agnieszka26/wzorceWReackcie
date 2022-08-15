import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContextList } from '../Context/ContextPassphrase';
import params from '../params/params';

export interface IBaseTemplate {
  // textValue: string;
  // setTextValue: void;
}
type FormValues = {
  passphrase: string;
};

const PassPhraseForm: React.FC<IBaseTemplate> = () => {
  const { passphrase } = params;
  const context = useContext(ContextList);
  // const {users} = context;
  // const context = useContext(ContextList);
  const title = 'Please, enter your password';
  const { setIsUserSetCorrectPassphrase } = context;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data) => {

    if (data.passphrase === passphrase) {
      console.log('password is correct');
      setIsUserSetCorrectPassphrase(true);
      router.push('/app');
    } else {
      console.log('password is not correct');
      setIsUserSetCorrectPassphrase(false);
    }
  };

  return (
    <Container fixed>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" justifyContent="center" direction="column">
          <TextField
                      label={'passphrase'}
            {...register('passphrase', {
              required: 'Passphrase is required. ',
              validate: (value) => {
                if (value !== passphrase) {
                  return 'Passphrase is not correct';
                }
              },
            })}
            helperText={errors?.passphrase?.message}
          />
          <Button type="submit">Submit</Button>
        </Grid>
      </form>
    </Container>
  );
};

export default PassPhraseForm;
