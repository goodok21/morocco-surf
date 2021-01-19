import React from 'react';
import { useRouter } from 'next/router'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const HomePage = () => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  console.log(locale, locales, defaultLocale);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Typography gutterBottom>
          Current locale: {locale}
        </Typography>
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
      </Box>
    </Container>
  );
}

export default HomePage