import { Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import { Notifications } from './NotificationsNav';
import {SearchBox} from './SearchBox'
import { Profile } from './Profile';
import { Logo } from './Logo';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {


    const {onOpen} = useSidebarDrawer();
    const isWideVersion = useBreakpointValue({ base: false, lg: true, })

    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" marginX="auto" marginTop="4" align="center" px="6">

            {!isWideVersion && (
                <IconButton aria-label="Open navigation" icon={<Icon as={RiMenuLine}/>} fontSize="24" variant="unstyled" onClick={onOpen} mr="2" >

                </IconButton>
            )}
            <Logo/>


            {isWideVersion && <SearchBox/>}
            
            

            <Flex
                align="center"
                ml="auto"
            >
              <Notifications/>

              <Profile showProfileData={isWideVersion}/>

            </Flex>
        </Flex>

    );
}