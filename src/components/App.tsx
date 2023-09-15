import { useAppSelector } from '../hooks';
import { getPageData } from '../store/page-process/selectors';
import { getUserName } from '../store/user-process/selectors';
import { Center, Container, Grid, GridItem } from '@chakra-ui/react';
import User from './User';
import Page from './Page';

export default function App() {
  const { user } = useAppSelector(getUserName);
  const { photos, year } = useAppSelector(getPageData);

  return (
    <Center>
      <Container
        maxW='container.xl'
        h={'100vh'}
        pt={10}
        bg={'gray.50'}
      >
        <Grid templateColumns='10fr 2fr'>
          <GridItem w='100%'>
            <Page
              year={year}
              photos={photos}
            />
          </GridItem>
          <GridItem w='100%'>
            <User user={user} />
          </GridItem>
        </Grid>
      </Container>
    </Center>
  );
}
