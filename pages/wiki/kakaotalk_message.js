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

export default function WikiKakaoTalkMessage() {
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
          카카오톡 메시지
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오톡 메시지 API를 이용하여 사용자의 카카오톡 친구에게 카카오톡
          메시지를 보내는 메시지를 전송하는 과정은 3단계로 나뉩니다.
          <br /> 카카오톡 친구가 아닌 사용자 자신에게 메시지를 보낼 때는 2~3번
          과정만 수행합니다.
          <br />
          <br />
          1. 친구 목록 가져오기 API로 카카오톡 친구 정보를 받아 서비스 UI로
          보여주고, 메시지를 보낼 친구 선택하게 하기
          <br />
          2. 메시지 템플릿을 참고하여 보낼 메시지 내용 구성하기
          <br />
          3. 구성한 메시지의 타입과 전송 대상에 맞는 카카오톡 메시지 보내기 API
          호출하기
          <br />
          <br />
          카카오톡 메시지 API가 제공하는 기능 및 가이드는 다음과 같습니다:
        </Text>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>기능</Th>
              <Th>설명</Th>
              <Th>가이드</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>카카오톡 메시지 사용 권한 신청</Td>
              <Td>카카오톡 메시지 API 기능을 사용하기 위해 필요한 권한 설정</Td>
              <Td>설정하기</Td>
            </Tr>
            <Tr>
              <Td>기본 템플릿으로 메시지 보내기</Td>
              <Td>
                카카오에서 제공하는 템플릿 형식에 따라 메시지의 구성 요소 값을
                JSON 형식이나 객체 형태로 직접 정의하고 전송하는 기능
              </Td>
              <Td>Rest, Javascript, Android, iOS</Td>
            </Tr>
            <Tr>
              <Td>사용자 정의 템플릿으로 메시지 보내기</Td>
              <Td>
                개발자 웹사이트에 등록한 사용자 정의 템플릿을 사용해 구성한
                메시지를 전송하는 기능
              </Td>
              <Td>Rest, Javascript, Android, iOS</Td>
            </Tr>
            <Tr>
              <Td>기본 템플릿으로 스크랩 메시지 보내기</Td>
              <Td>
                스크랩한 웹 페이지 정보를 바탕으로 메시지를 구성하여 전송하는
                기능
              </Td>
              <Td>Rest, Javascript, Android, iOS</Td>
            </Tr>
            <Tr>
              <Td>사용자 정의 템플릿으로 스크랩 메시지 보내기</Td>
              <Td>
                스크랩한 웹 페이지 정보를 사용자 정의 템플릿을 바탕으로 메시지를
                구성하여 전송하는 기능
              </Td>
              <Td>Rest, Javascript, Android, iOS</Td>
            </Tr>
          </Tbody>
        </Table>

        <br />
      </Stack>
    </>
  );
}
