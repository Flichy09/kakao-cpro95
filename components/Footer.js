import {
  Flex,
  Box,
  Stack,
  Text,
  VStack,
  Divider,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const MenuItem = ({ children, to = "/" }) => {
  return (
    <Text
      ms={{ base: 2, sm: 2, md: 2, xl: 2 }}
      mr={{ base: 2, sm: 2, md: 2, xl: 2 }}
      display="block"
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Footer = () => {
  return (
    <VStack direction={["column", "column", "column", "column"]}>
      <Divider />
      <Flex
        px={{ base: "4", md: "8" }}
        py="4"
        as="footer"
        wrap="wrap"
        w="100%"
        mx="auto"
      >
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
          w="100%"
        >
          <MenuItem m={4} to="https://cpro95.tistory.com/50">
            카카오톡 웹 버전 만들기
          </MenuItem>
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="https://github.com/cpro95/kakao-cpro95"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/cpro95"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>
      </Flex>
      <MenuItem m={4} to="/">
        &copy; 2021 , made by cpro95@gmail.com
      </MenuItem>
    </VStack>
  );
};

export default Footer;
