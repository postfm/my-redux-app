import { TUser } from '../constants';
import { Heading } from '@chakra-ui/react';

type UserProps = TUser;

export default function User({ user }: UserProps): JSX.Element {
  return (
    <Heading
      as='h4'
      size='md'
    >
      Привет, {user}
    </Heading>
  );
}
