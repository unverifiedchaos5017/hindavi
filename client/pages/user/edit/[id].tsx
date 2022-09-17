import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import Upload from '@mui/icons-material/Upload';
import HomeIcon from '@mui/icons-material/Home';
import { NextPage } from 'next';
import {
  InputFields,
  InputFieldType,
} from '../../../components/InputFields/InputFields';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { State } from '../../signup';

const EditProfile: NextPage = () => {
  const usernamereference = useRef<HTMLInputElement>(null);
  const emailreference = useRef<HTMLInputElement>(null);
  const addressreference = useRef<HTMLInputElement>(null);
  const passwordreference = useRef<HTMLInputElement>(null);
  const confirmPasswordreference = useRef<HTMLInputElement>(null);
  const phonereference = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<State>({
    showPassword: false,
    showError: false,
    error: '',
    usernameValue: 'Mark Sepcter',
    emailValue: 'marksepcter2002@gmail.com',
    phoneValue: '6362043768',
    addressValue:
      'No. 15, 9th A cross, Anthony Swamy Layout, Lingarajpuram, Bengaluru - 560084',
    passwordValue: 'markishere123',
  });

  const changeValue = (id: string, value: string) => {
    console.log(id, value);
    switch (id) {
      case 'username':
        setState({ ...state, usernameValue: value });
        break;
      case 'email':
        setState({ ...state, emailValue: value });
        break;
      case 'phone':
        setState({ ...state, phoneValue: value });
        break;
      case 'address':
        setState({ ...state, addressValue: value });
        break;
      case 'password':
        setState({ ...state, passwordValue: value });
    }
  };

  const inputsArr: InputFieldType[] = [
    {
      icon: <AccountCircle />,
      label: 'Username',
      id: 'username',
      type: 'text',
      value: state.usernameValue,
      inputProps: {
        maxLength: 25,
      },
      reference: usernamereference,
      state,
      setState,
    },
    {
      icon: <Email />,
      label: 'Email Address',
      id: 'email',
      type: 'email',
      value: state.emailValue,
      inputProps: {},
      reference: emailreference,
      state,
      setState,
    },
    {
      icon: <Phone />,
      label: 'Phone number',
      id: 'phone',
      type: 'number',
      value: state.phoneValue,
      inputProps: {
        minLength: 10,
      },
      reference: phonereference,
      state,
      setState,
    },
    {
      icon: <HomeIcon />,
      label: 'Address',
      id: 'address',
      type: 'text',
      value: state.addressValue,
      inputProps: {},
      reference: addressreference,
      state,
      setState,
    },
    {
      icon: <Lock />,
      label: 'Password',
      id: 'password',
      type: '',
      value: state.passwordValue,
      inputProps: {
        minLength: 8,
      },
      reference: passwordreference,
      displayVisibility: true,
      state,
      setState,
    },
  ];

  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' component='h2' sx={{ marginY: 2 }}>
        Edit your profile
      </Typography>
      <Box sx={{ marginY: 2, textAlign: 'center' }}>
        <Avatar
          alt='User Profile Photo'
          sx={{
            width: { md: '10rem', xs: '8rem' },
            height: { md: '10rem', xs: '8rem' },
            marginX: 'auto',
          }}
        />
        <Button
          variant='contained'
          startIcon={<Upload />}
          color='secondary'
          sx={{ color: 'white', marginTop: 2 }}
        >
          Update Profile Picture
          <input hidden accept='image/*' type='file' />
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          paddingX: 1,
          marginTop: 2,
        }}
      >
        <form>
          {inputsArr.map((el: InputFieldType, i) => {
            if (el.displayVisibility) {
              return (
                <InputFields
                  key={i}
                  icon={el.icon}
                  label={el.label}
                  id={el.id}
                  type={el.type}
                  reference={el.reference}
                  value={el.value}
                  changeValue={changeValue}
                  inputProps={el.inputProps}
                  displayVisibility={el.displayVisibility}
                  state={el.state}
                  setState={el.setState}
                />
              );
            }
            return (
              <InputFields
                key={i}
                icon={el.icon}
                label={el.label}
                id={el.id}
                type={el.type}
                reference={el.reference}
                value={el.value}
                changeValue={changeValue}
                inputProps={el.inputProps}
                state={el.state}
                setState={el.setState}
              />
            );
          })}
          <Button
            type='submit'
            fullWidth={true}
            variant='contained'
            sx={{
              color: '#fff',
              fontWeight: '700',
              marginY: 4,
              paddingY: 1,
            }}
          >
            Update
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditProfile;
