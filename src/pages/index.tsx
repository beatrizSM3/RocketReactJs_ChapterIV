import { Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
      <Flex as='form' w='100%' maxWidth={360} bg='gray.800' p='8' borderRadius={8} flexDir='column' columnGap='4'>
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" placeholder="example@gmail.com" ></Input>
          <Input name="password" type="password" label="Password" placeholder="*******"></Input>
          
        </Stack>
        <Button type='submit' marginTop={6} colorScheme='pink'>Sign in</Button>
      </Flex>
    </Flex>
  )
}
