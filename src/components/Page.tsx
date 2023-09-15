import { REFERENCE_YEAR } from '../constants';
import { MouseEvent } from 'react';
import { setYearAction } from '../store/page-process/page-process';
import { useDispatch } from 'react-redux';
import { Button, Heading, Text } from '@chakra-ui/react';
import { fetchPhotosAction } from '../store/page-process/page-action';

type PageProps = {
  year: number;
  photos: string[];
};

export default function Page({ year, photos }: PageProps): JSX.Element {
  const currentYear = new Date().getFullYear();
  const yearList: number[] = [];
  const dispatch = useDispatch();
  for (let i = REFERENCE_YEAR; i <= currentYear; i++) {
    yearList.push(i);
  }

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    dispatch(setYearAction(+evt.currentTarget.innerText));
    dispatch(fetchPhotosAction());
  };

  const yearButtonList = yearList.map((year) => (
    <Button
      mr={2}
      key={year}
      onClick={handleButtonClick}
    >
      {year}
    </Button>
  ));

  return (
    <>
      {yearButtonList}
      <Heading
        as='h4'
        size='md'
        mt={4}
      >
        {year} год
      </Heading>
      <Text fontWeight='bold'>У тебя {photos.length} фото</Text>
    </>
  );
}
