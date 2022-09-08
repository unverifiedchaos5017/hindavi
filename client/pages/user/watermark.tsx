import Upload from '@mui/icons-material/Upload';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';

const watermark: NextPage = () => {
  return (
    <Container maxWidth='sm'>
      <Typography
        variant='h5'
        component='h2'
        sx={{ marginTop: 2, marginBottom: 4 }}
      >
        Create Watermark
      </Typography>
      <TextField
        variant='outlined'
        placeholder='Enter watermark text'
        sx={{ width: '100%' }}
      />
      <Typography
        variant='body1'
        component='p'
        color='primary'
        sx={{ textAlign: 'center', marginY: { md: 2, xs: 1 } }}
      >
        or
      </Typography>
      <Button
        variant='contained'
        color='secondary'
        startIcon={<Upload sx={{ fontSize: 40 }} />}
        sx={{
          color: 'white',
          width: '100%',
          marginTop: 1,
          paddingY: { md: 1.5, xs: 1 },
        }}
      >
        Upload watermark image
        <input hidden accept='image/*' type='file' />
      </Button>
      <Button
        variant='contained'
        sx={{
          color: 'white',
          marginTop: { md: 4, xs: 3 },
          paddingY: { md: 2, xs: 1.2 },
          width: '100%',
        }}
      >
        Submit
      </Button>
    </Container>
  );
};

export default watermark;
