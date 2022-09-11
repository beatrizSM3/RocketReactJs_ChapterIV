import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return(

        <Flex
        align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Beatriz de Souza</Text>
                    <Text color="gray.300" fontSize="small">beatriz@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Beatriz Souza" src='https://github.com/NitroCaffeine.png'></Avatar>
        </Flex>

    );
}