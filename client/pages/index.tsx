import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import {
  FormControl,
  InputAdornment,
  Typography,
  Box,
  IconButton,
  Button,
  InputLabel,
  OutlinedInput,
  Link,
} from '@mui/material';
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useState } from 'react';

const Home: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container
      maxWidth='sm'
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          placeSef: 'center center',
        }}
      >
        <Typography
          color='primary'
          variant='h3'
          component='h1'
          sx={{
            width: '100%',
            fontWeight: 700,
          }}
        >
          Login
        </Typography>

        <Typography
          color='primary.light'
          variant='body1'
          component='p'
          marginTop={0.5}
          sx={{
            width: '100%',
            marginLeft: 1,
          }}
        >
          Please login to continue
        </Typography>
        <Box
          sx={{
            width: '100%',
            paddingX: 1,
            marginTop: 6,
          }}
        >
          <form>
            <FormControl fullWidth={true} variant='outlined'>
              <InputLabel htmlFor='username'>Username</InputLabel>
              <OutlinedInput
                id='username'
                label='Username'
                fullWidth={true}
                startAdornment={
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              fullWidth={true}
              variant='outlined'
              sx={{
                marginTop: 2,
              }}
            >
              <InputLabel htmlFor='password'>Password</InputLabel>
              <OutlinedInput
                id='password'
                label='Password'
                fullWidth={true}
                type={showPassword ? 'text' : 'password'}
                startAdornment={
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Link
              href='/' //     TODO     //
              color='primary.light'
              variant='subtitle1'
              component='p'
              align='right'
              marginTop={0.5}
              sx={{
                width: '100%',
                textDecoration: 'none',
              }}
            >
              forgot password?
            </Link>
            <Button
              type='submit'
              fullWidth={true}
              variant='contained'
              sx={{
                color: '#fff',
                fontWeight: '700',
                marginTop: 4,
                paddingY: 1,
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
      <Typography
        variant='body1'
        component='p'
        sx={{ placeSelf: 'end center', marginTop: 6 }}
      >
        New user?
        <Link href='/signup' sx={{ marginLeft: 1, textDecoration: 'none' }}>
          Sign up
        </Link>
      </Typography>
    </Container>
  );
};

export default Home;