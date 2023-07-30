import { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import {
  FiHome,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiSmartphone,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../views/global/Topbar";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Post", icon: FiSmartphone, href: "/post" },
  { name: "Explore", icon: FiCompass, href: "/" },
  { name: "Favourites", icon: FiStar, href: "/" },
  { name: "Settings", icon: FiSettings, href: "/" },
];

export const SidebarLayout = ({ children }: { children?: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Flex
        ml={{ base: 0, md: 60 }}
        className={"main"}
        flexDir={"column"}
        height={"100vh"}
      >
        <Topbar />
        <Box
          p="4"
          className="page"
          flex={1}
          overflow={"auto"}
        >
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

//Nav items for mobile and desktop view
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  console.log("SidebarContent");
  return (
    <Box
      bg={useColorModeValue("brand.cardBackground", "gray.900")}
      borderRightWidth={1}
      borderRightColor={"brand.border"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color={"brand.primary"}>
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  href: string;
  children: ReactText;
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  console.log();
  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "brand.primary",
          color: "text.primary",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "text.primary",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={"brand.cardBackground"}
      borderBottomWidth={1}
      borderBottomColor={"brand.border"}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        color={"white"}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
