import { Icon, Text, Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";
import Link from 'next/link'


interface NavLinkProps extends LinkProps {
    children: string;
    icon: ElementType;
    href: string;

}

export function NavLink({children, icon, href,  ...rest}: NavLinkProps) {

    return(
        <Link href={href} passHref>
          <ChakraLink display="flex" alignItems="center" {...rest}>
              <Icon as={icon} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                {children}
              </Text>
            </ChakraLink>
        </Link>
    );
}