import { Flex, Text, Box, Stack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Link from "next/link";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuItem = ({ children, onClick, to = "/", target }) => {
  return (
    <Text
      ms={{ base: 2, sm: 2, md: 2, xl: 2 }}
      mr={{ base: 2, sm: 2, md: 2, xl: 2 }}
      display="block"
      onClick={onClick}
      fontWeight="bold"
      color="black"
    >
      {target ? (
        <a href={to} target="target">
          {children}
        </a>
      ) : (
        <Link href={to}>{children}</Link>
      )}
    </Text>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  const kakaoTalkColor = "#F9E000";

  return (
    <Flex
      // mb={4}
      p={4}
      as="nav"
      align="center"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bgColor={kakaoTalkColor}
    >
      <Box w="200px" ml={8}>
        <Heading as="h1" size="lg" color="black">
          <Link href="/">카카오톡 웹</Link>
        </Heading>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon color="black" /> : <HamburgerIcon color="black" />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem onClick={toggleMenu} to="/intro">
            소개
          </MenuItem>
          <MenuItem
            onClick={toggleMenu}
            to="https://cpro95.tistory.com"
            target="_blank"
          >
            블로그 방문
          </MenuItem>
          <DarkModeSwitch />
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
