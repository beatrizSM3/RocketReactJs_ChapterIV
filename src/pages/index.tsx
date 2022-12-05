import { Flex, Button, Stack} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;

}


const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {

  

  const { register, handleSubmit, formState} = useForm({resolver: yupResolver(SignInFormSchema)})
  const {errors} = formState


  const  handleSignIn: SubmitHandler<SignInFormData>=  async (data, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
      <Flex as='form' w='100%' maxWidth={360} bg='gray.800' p='8' borderRadius={8} flexDir='column' columnGap='4' onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" placeholder="example@gmail.com"  {...register('email')} error = {errors.email}></Input>
          <Input name="password" type="password" label="Password" placeholder="*******" {...register('password')} error={ errors.password}></Input>
          
        </Stack>
        <Button type='submit' marginTop={6} colorScheme='pink' isLoading={formState.isSubmitting}>Sign in</Button>
      </Flex>
    </Flex>
  )
}
