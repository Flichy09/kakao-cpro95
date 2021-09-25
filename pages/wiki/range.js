import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WikiRange() {
  const tableSize = useBreakpointValue({
    base: "sm",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <>
      <Stack spacing={{ base: 8, md: 14 }} mx={6} mt={6}>
        <Heading
          fontWeight={500}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        >
          지원 범위
        </Heading>

        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Service</Th>
              <Th>API</Th>
              <Th>Android SDK</Th>
              <Th>iOS SDK</Th>
              <Th>JavaScript SDK</Th>
              <Th>REST API</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>카카오링크</Td>
              <Td>기본 템플릿으로 메시지 보내기</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>카카오링크</Td>
              <Td>사용자 정의 템플릿으로 메시지 보내기</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>카카오링크</Td>
              <Td>기본 템플릿으로 스크랩 메시지 보내기</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>카카오링크</Td>
              <Td>사용자 정의 템플릿으로 스크랩 메시지 보내기</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>카카오톡 메시지</Td>
              <Td>기본 템플릿으로 메시지 보내기</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>카카오톡 메시지</Td>
              <Td>사용자 정의 템플릿으로 메시지 보내기</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>카카오톡 메시지</Td>
              <Td>기본 템플릿으로 스크랩 메시지 보내기</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>카카오톡 메시지</Td>
              <Td>사용자 정의 템플릿으로 스크랩 메시지 보내기</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading
          fontWeight={400}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        >
          REST API 미지원: 카카오링크
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오링크 API는 카카오톡 앱이나 전용 웹 페이지를 통해 메시지를 보내는
          방식으로 동작하기 때문에 REST API 방식을 지원하지 않고 Kakao SDK로만
          제공합니다.
          <br />
          메시지 전송 결과를 알림 받기 위한 서버 콜백 기능은 Kakao SDK를 통해
          파라미터 지정이 가능하고, 콜백 처리는 서비스 서버에 구현해야 합니다.
          <br />
        </Text>
        <br />
      </Stack>
    </>
  );
}
