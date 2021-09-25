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

export default function WikiKakaoLink() {
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
          카카오링크
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오링크는 사용자가 카카오톡 메시지로 친구에게 메시지에 담긴 정보를
          공유하는 기능입니다. 사용자는 카카오링크가 적용된 웹 페이지 또는 특정
          정보를 자신의 카카오톡 친구에게 공유할 수 있습니다. <br />
          <br />
          카카오톡 최소 지원 버전 카카오링크는 사용자의 모바일 기기에
          카카오링크를 지원하는 버전의 카카오톡이 설치되어 있어야 정상
          동작합니다. 카카오링크 이용을 위한 플랫폼별 카카오톡 최소 버전은
          다음과 같습니다.
          <br />
          - Android: 6.0.0
          <br />
          - iOS: 5.9.8 <br />
          <br />
          카카오링크는 Kakao SDK for JavaScript, Android, iOS로만 제공되며, REST
          API로는 제공되지 않습니다. 이 기능은 최대한 간편하게 카카오톡으로
          메시지를 보내 정보를 공유하는 기능을 구현할 수 있도록 만들어졌기
          때문에, 카카오톡을 거치지 않고 메시지를 보내는 REST API 방식은
          카카오링크가 아닌 카카오톡 메시지 API로만 사용할 수 있습니다.
          <br />
          <br />
          카카오링크로 메시지를 보내는 과정을 간략히 정리하면 2단계로 나눌 수
          있습니다.
          <br />
          <br />
          1. 메시지 템플릿을 참고하여 보낼 메시지 내용 구성하기
          <br />
          2. 구성한 메시지를 전달 인자로 카카오링크 API 호출하여 메시지 전송을
          요청하기
          <br />
          <br />
          카카오링크 API가 제공하는 기능 및 가이드는 다음과 같습니다:
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
              <Td>기본 템플릿으로 메시지 보내기</Td>
              <Td>
                카카오에서 제공하는 템플릿 형식에 따라 메시지의 구성 요소 값을
                JSON 형식이나 객체 형태로 직접 정의하고 전송하는 기능
              </Td>
              <Td>Javascript, Android, iOS</Td>
            </Tr>
            <Tr>
              <Td>사용자 정의 템플릿으로 메시지 보내기</Td>
              <Td>
                개발자 웹사이트에 등록한 사용자 정의 템플릿을 사용해 구성한
                메시지를 전송하는 기능
              </Td>
              <Td>Javascript, Android, iOS</Td>
            </Tr>
            <Tr>
              <Td>기본 템플릿으로 스크랩 메시지 보내기</Td>
              <Td>
                스크랩한 웹 페이지 정보를 바탕으로 메시지를 구성하여 전송하는
                기능
              </Td>
              <Td>Javascript, Android, iOS</Td>
            </Tr>
            <Tr>
              <Td>사용자 정의 템플릿으로 스크랩 메시지 보내기</Td>
              <Td>
                스크랩한 웹 페이지 정보를 사용자 정의 템플릿을 바탕으로 메시지를
                구성하여 전송하는 기능
              </Td>
              <Td>Javascript, Android, iOS</Td>
            </Tr>
            <Tr>
              <Td>카카오링크 전송 성공 알림 설정하기</Td>
              <Td>
                카카오링크를 통해 보낸 메시지가 정상적으로 전달되었음을 알려주는
                기능, 플랫폼별 가이드에서 사용자 정의 파라미터 설정 필요
              </Td>
              <Td>설정하기, Javascript, Android, iOS, 콜백 알림 정보</Td>
            </Tr>
          </Tbody>
        </Table>

        <br />
      </Stack>
    </>
  );
}
