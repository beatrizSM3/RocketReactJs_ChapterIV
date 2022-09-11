import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/indexHeader";
import { Sidebar } from "../../components/Sidebar/indexSidebar";


export default function UserCreate() {

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="4">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
                    <Heading size="large" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="nome" label="Nome completo"></Input>
                            <Input name="email" type="email" label="E-mail"></Input>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="password" type="password" label="Senha"></Input>
                            <Input name="password_confirmation" type="password" label="Confirmar senha"></Input>
                        </SimpleGrid>

                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                                <Link href="/Users"><Button as="a" colorScheme="whiteAlpha">Cancelar</Button></Link>
                                <Button colorScheme="green">Salvar</Button>
                        </HStack>


                    </Flex>

                </Box>

            </Flex>

        </Box>
    );
}