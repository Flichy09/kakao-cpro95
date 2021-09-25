import {
  Box,
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
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WikiMessage() {
  const tableSize = useBreakpointValue({
    base: "sm",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <>
      <Stack spacing={{ base: 8, md: 14 }} mx={6} mt={6}>
        <Box
          w="full"
          h="150px"
          bg={useColorModeValue("#03166c", "white")}
          p={4}
        >
          <Heading color={useColorModeValue("gray.300", "gray.800")}>
            메시지
          </Heading>
        </Box>
        <Heading
          fontWeight={500}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        >
          기능 소개
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          메시지 API는 사용자가 카카오톡 친구에게 카카오톡 메시지를 보내는
          기능을 제공합니다. <br />
          이 API는 메시지를 통한 정보 공유 및 서비스 재방문 효과에 초점을 두고
          만들어졌습니다. <br />
          메시지 API로 보낸 메시지는 카카오디벨로퍼스(Kakao Developers, 이하
          개발자 웹사이트)에 등록된 애플리케이션(이하 앱) 정보를 담고 있어,
          사용자가 메시지를 통해 서비스 웹사이트나 앱을 방문할 수 있습니다.
          <br />
          <br />
          메시지 API로 보낼 카카오톡 메시지는 공유할 정보의 특징이나 메시지의
          성격에 따라 적합한 템플릿을 선택하여 구성할 수 있습니다.
          <br />
          지원하는 메시지의 종류와 만드는 방법은 메시지 템플릿을 참고합니다.
          <br />
          메시지를 보내는 방법은 크게 두 가지로, 카카오링크 API를 사용하는
          방법과 카카오톡 메시지 API를 사용하는 방법이 있습니다.
          <br />
          <br />두 API의 차이점은 다음과 같습니다.
        </Text>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>설명</Th>
              <Th>카카오링크 API</Th>
              <Th>카카오톡 메시지 API</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>카카오톡 친구 목록 페이지</Td>
              <Td>카카오톡 앱에서 카카오톡 친구 목록 이용</Td>
              <Td>친구 목록 가져오기 API를 이용</Td>
            </Tr>
            <Tr>
              <Td>메시지 전송이 가능한 친구의 범위</Td>
              <Td>카카오톡의 모든 친구</Td>
              <Td>친구 목록 가져오기 API의 정보 제공 조건에 맞는 친구</Td>
            </Tr>
            <Tr>
              <Td>카카오톡 앱으로 이동해 메시지 전송</Td>
              <Td>O</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>메시지 전송 요청 실행</Td>
              <Td>카카오톡</Td>
              <Td>서비스 클라이언트 또는 서버</Td>
            </Tr>
            <Tr>
              <Td>사용 신청 및 검수</Td>
              <Td>X</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>REST API 지원</Td>
              <Td>X</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>메시지 전송 성공 여부 확인</Td>
              <Td>카카오링크 전송 성공 알림 받기 기능을 사용해 자체 구현</Td>
              <Td>API 응답으로 확인</Td>
            </Tr>
          </Tbody>
        </Table>

        <Image
          src={"/img/message_link.png"}
          objectFit="cover"
          alt="message_link"
        />

        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오링크 API는 서비스 클라이언트에서 카카오톡 앱을 실행시켜 카카오톡
          메시지를 보내는 반면, 카카오톡 메시지 API는 카카오톡 앱을 실행시키지
          않고 서비스 클라이언트나 서버를 통해 카카오톡 친구에게 메시지를 보낼
          수 있도록 합니다.
          <br />
          대신, 두 가지 API 모두 카카오톡 메시지를 전송하므로 사용자
          카카오계정에 연결된 카카오톡이 없는 상태, 즉 카카오톡 미사용자라면
          메시지 보내기 요청 시 에러가 발생합니다.
          <br />
          <br />
          카카오링크 API는 카카오가 제공하는 카카오톡 친구 또는 대화 목록
          페이지를 띄워 사용자가 메시지를 보낼 수 있도록 합니다. <br />
          따라서 서비스가 카카오톡 친구 정보를 출력하는 페이지를 직접 만들
          필요가 없고, 모든 카카오톡 친구가 목록에 포함됩니다. <br />
          대신, 카카오톡 친구 정보를 데이터로 제공하지 않습니다. 카카오링크
          API는 웹 페이지 소스코드에 공유할 내용을 정의하는 등 상대적으로
          간단하게 기능을 구현할 수 있습니다.
          <br />
        </Text>

        <Image
          src={"/img/message_talk.png"}
          objectFit="cover"
          alt="message_talk"
        />

        <Text color={useColorModeValue("gray.800", "gray.300")}>
          반면, 카카오톡 메시지 API는 친구 목록 가져오기 API를 통해 받은 친구
          정보 중 지정한 친구에게 메시지를 보내는 기능을 제공합니다. <br />
          카카오톡 친구 정보를 데이터로 제공하지만 카카오톡 친구 목록 페이지를
          띄워주지 않습니다. <br />
          따라서 서비스는 사용자의 카카오톡 친구 정보를 받아 처리하는 기능과
          친구 목록을 직접 만들어야 합니다. <br />
          또한 친구 목록 가져오기 API와 카카오톡 메시지 API는 각각 사용 권한
          신청이 필요합니다.
          <br />
          <br />
          참고: Android Sharesheet 또는 iOS 공유 익스텐션을 통한 카카오톡
          공유하기 모바일 환경의 경우, 메시지 템플릿을 사용하지 않고 파일 등
          간단한 데이터만을 공유하려면 각 플랫폼의 공유하기 기능을 사용해
          카카오톡으로 공유할 수 있습니다. 자세한 사항은 다음 공식 문서를
          참고합니다:
          <br />
          - Android: 다른 앱으로 간단한 데이터 보내기
          <br />- iOS: Sharing and Actions
          <br />
        </Text>
        <br />
      </Stack>
    </>
  );
}
