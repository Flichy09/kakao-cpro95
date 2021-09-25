import Head from "next/head";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FcDocument, FcSupport, FcDatabase } from "react-icons/fc";

export default function IntroPage() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 16 }}
        mx={2}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          카카오톡 웹 버전은? <br />
          <Text as={"span"} color={"green.400"}>
            Freedom + Idea
          </Text>
        </Heading>
        <Text color={useColorModeValue("gray.500", "gray.300")}>
          카카오톡 PC 버전이 무거운 분들과 또는 회사에서 카카오톡 PC 버전이
          설치가 안되는 분들을 위해 간단히 웹상에서 카카오톡과 소통할 수 있는
          웹앱입니다. <br />
          <br />
          한번에 200자까지만 전송되며, 이미지와 함께 송부할 때는 100자까지
          가능합니다.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            <a
              href="https://cpro95.tistory.com/50"
              rel="noreferrer"
              target="_blank"
            >
              튜토리얼 보기
            </a>
          </Button>

          <Box>
            <Icon
              as={Arrow}
              color={useColorModeValue("gray.800", "gray.300")}
              w={71}
              position={"absolute"}
              right={-71}
              top={"10px"}
            />
            <Text
              fontSize={"sm"}
              fontFamily={"Caveat"}
              position={"absolute"}
              right={"-125px"}
              top={"-15px"}
              transform={"rotate(10deg)"}
            >
              티스토리 링크 바로 가기
            </Text>
          </Box>
        </Stack>
        <Box p={4}>
          <Stack textAlign={"center"} spacing={{ base: 8, md: 14 }} mx={2}>
            <Heading
              fontWeight={500}
              fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            >
              사용 된 기술
            </Heading>
            <Text color={useColorModeValue("gray.500", "gray.300")}>
              카카오톡 웹 버전은 카카오 디벨로퍼 API에서 제공하는 KakaoLink SDK,{" "}
              <br />
              NextJS와 Chakra-UI를 이용한 프론트엔드,
              <br /> Netlify.com의 웹 호스팅을 이용해서 만들었습니다. <br />
              <br />
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={10}>
            <Stack>
              <Flex
                w={16}
                h={16}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                bg={"gray.100"}
                mb={1}
              >
                <Icon as={FcDocument} w={10} h={10} />
              </Flex>
              <Text fontWeight={600}>카카오 디벨로퍼 API</Text>
              <Text color={useColorModeValue("gray.500", "gray.300")}>
                Kakao.Link.sendDefault(params) 함수를 사용하여 카카오톡에
                메시지를 전달합니다. <br /><br />
                이미지가 있으면 {"'"}feed{"'"} objectType을 이용하고 이미지가 없으면
                단순히 {"'"}text{"'"} objectType을 이용합니다. <br /><br />
                이미지는 imageUrl에 전달하면 됩니다.
              </Text>
            </Stack>
            <Stack>
              <Flex
                w={16}
                h={16}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                bg={"gray.100"}
                mb={1}
              >
                <Icon as={FcSupport} w={10} h={10} />
              </Flex>
              <Text fontWeight={600}>NextJS + Chakra-UI</Text>
              <Text color={useColorModeValue("gray.500", "gray.300")}>
                NextJS는 React를 이용한 정적 사이트를 만들 수 있으며, <br /><br />
                이로 인해 보다 빠른 React 페이지를 구현할 수 있습니다. UI쪽은
                Chakra-UI를 사용했습니다. <br /><br />
                가장 깔끔하고 기존 프로젝트에서도 사용해서 익숙하기 때문입니다.
              </Text>
            </Stack>
            <Stack>
              <Flex
                w={16}
                h={16}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                bg={"gray.100"}
                mb={1}
              >
                <Icon as={FcDatabase} w={10} h={10} />
              </Flex>
              <Text fontWeight={600}>Netlify.com</Text>
              <Text color={useColorModeValue("gray.500", "gray.300")}>
                정적 사이트 무료 웹호스팅 서비스 중에 가장 좋다고 생각하는
                Netlify에 호스팅 했습니다. <br /><br />
                Github.io 또는 Vercel.com 또한 이용할 수 있습니다.
              </Text>
            </Stack>
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
}

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
