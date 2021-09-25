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
  Divider,
  Code,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
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
      <Stack spacing={{ base: 4, md: 8 }} mx={6} mt={6}>
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
          fontWeight={800}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        >
          카카오톡 메시지: JavaScript
        </Heading>
        <Heading fontWeight={700} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
          시작하기 전에
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          보낼 메시지의 종류와 구성 방법에 따라 호출해야할 API가 다르므로, 개발
          전 다음 순서대로 사용할 API를 선택합니다.
        </Text>
        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          사용할 API 선택하기
        </Heading>

        <Text fontWeight="bold">Step 1.메시지 API 선택</Text>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          메시지 API는 카카오링크와 카카오톡 메시지 두 가지입니다.
          <br /> 이해하기를 참고해 어떤 API로 메시지 보내기를 구현할 것인지
          결정합니다.
        </Text>
        <Text fontWeight="bold">Step 2.메시지 종류 및 구성 방법 선택</Text>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          메시지 템플릿 &gt; 종류를 참고하여 어떤 메시지 템플릿을 사용할지
          결정합니다.
          <br />
          <br />
          보낼 메시지는 기본 템플릿을 바탕으로 객체 형태로 구성하거나, 서비스에
          맞게 직접 구성한 사용자 정의 템플릿을 사용하여 구성할 수 있습니다.
          <br />
          자세한 사항은 메시지 구성 방법을 참고합니다.
        </Text>
        <Text fontWeight="bold">Step 3.메시지 전송 대상 선택</Text>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오톡 메시지의 경우, 수신 대상에 따라 나에게 보내기, 친구에게
          보내기로 API가 구분되어 있다는 점에 유의합니다. <br />
          <br />
          1. 나에게 보내기: 현재 로그인한 사용자의 카카오톡 나와의 채팅에
          메시지를 보냅니다. <br />이 기능으로는 다른 사용자에게 메시지를 보낼
          수 없고, 로그인한 사용자 본인에게만 메시지를 보낼 수 있습니다.
          <br />
          2. 친구에게 보내기: 현재 로그인한 사용자의 카카오톡 친구에게 메시지를
          보냅니다. <br />
          친구 목록 가져오기 API를 통해 수신 대상 정보를 받는 과정을 추가
          구현해야 합니다. <br />한 번에 최대 5명의 친구에게 메시지를 보낼 수
          있습니다.
          <br /> 카카오톡 메시지 API의 경우, 일간 및 월간 제공량이 정해져
          있으므로 운영 정책을 참고합니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          선택 조건에 따른 API
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          JavaScript SDK는 카카오톡 메시지 API를 내장 함수 형태로 지원하지
          않습니다.
          <br /> 웹 페이지에서 카카오톡 메시지 API를 사용하려면
          Kakao.API.request 함수를 통해 REST API와 같은 URL로 요청합니다.
          <br /> 템플릿 종류에 따라 메시지 구성 요소가 다르므로 메시지 구성 시,
          기본 메시지 템플릿 구성 요소 및 예제를 참고합니다.
        </Text>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>메시지 종류</Th>
              <Th>메시지 구성 방법</Th>
              <Th>전송 대상</Th>
              <Th>사용할 API</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>피드, 리스트, 위치, 커머스, 텍스트</Td>
              <Td>기본 템플릿</Td>
              <Td>나</Td>
              <Td>/v2/api/talk/memo/default/send</Td>
            </Tr>
            <Tr>
              <Td>피드, 리스트, 위치, 커머스, 텍스트</Td>
              <Td>기본 템플릿</Td>
              <Td>친구</Td>
              <Td>/v1/api/talk/friends/message/default/send</Td>
            </Tr>
            <Tr>
              <Td>피드, 리스트, 커머스</Td>
              <Td>사용자 정의 템플릿</Td>
              <Td>나</Td>
              <Td>/v2/api/talk/memo/send</Td>
            </Tr>
            <Tr>
              <Td>피드, 리스트, 커머스</Td>
              <Td>사용자 정의 템플릿</Td>
              <Td>친구</Td>
              <Td>/v1/api/talk/friends/message/send</Td>
            </Tr>
            <Tr>
              <Td>스크랩</Td>
              <Td>기본 템플릿</Td>
              <Td>나</Td>
              <Td>/v2/api/talk/memo/scrap/send</Td>
            </Tr>
            <Tr>
              <Td>스크랩</Td>
              <Td>기본 템플릿</Td>
              <Td>친구</Td>
              <Td>/v1/api/talk/friends/message/scrap/send</Td>
            </Tr>
            <Tr>
              <Td>스크랩</Td>
              <Td>사용자 정의 템플릿</Td>
              <Td>나</Td>
              <Td>/v2/api/talk/memo/scrap/send</Td>
            </Tr>
            <Tr>
              <Td>스크랩</Td>
              <Td>사용자 정의 템플릿</Td>
              <Td>친구</Td>
              <Td>/v1/api/talk/friends/message/scrap/send</Td>
            </Tr>
          </Tbody>
        </Table>

        <Divider />

        <Heading fontWeight={700} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
          커스텀 스킴(Custom scheme) 설정하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오톡 메시지는 지정된 웹 페이지 또는 앱을 실행하는 링크를
          포함합니다. 메시지 속 버튼들은 URI 스킴(URI Schemes)과 파라미터로
          구성된 커스텀 스킴을 통해 앱을 실행합니다.
          <br />
          자세한 사항은 카카오링크: JavaScript &gt; 커스텀 스킴 설정하기를
          참고합니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          기본 템플릿으로 메시지 보내기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          사용하려는 기본 템플릿에 따라 메시지를 객체로 구성하여 보내는
          기능입니다.
          <br /> template_object 객체로 메시지 내용을 구성하여 data 파라미터를
          통해 전달합니다.
          <br />
          <br /> 친구에게 메시지 보내기 요청 시, 친구 목록 가져오기 API의
          응답으로 받은 uuid를 receiver_uuids 파라미터에 전달합니다.
          <br /> 한 번에 최대 5명의 친구에게 메시지를 보낼 수 있습니다.
          <br />
          <br /> 요청 성공 시 응답은 REST API의 기본 템플릿으로 메시지 보내기와
          같습니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          나에게 보내기
        </Heading>
        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v2/api/talk/memo/default/send'
  });                    
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Parameter
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td>String</Td>
              <Td>/v2/api/talk/memo/default/send로 고정</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>success</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 성공할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>fail</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 실패할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>always</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출 성공 여부에 관계 없이 항상 호출되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>data</Td>
              <Td>Object</Td>
              <Td>
                API에 전달할 파라미터 자세한 내용은 data: 기본 템플릿으로 나에게
                메시지 보내기 확인
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          data: 기본 템플릿으로 나에게 메시지 보내기
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>template_object</Td>
              <Td>Object</Td>
              <Td>
                메시지 구성 요소를 담은 객체(Object) 피드, 리스트, 위치, 커머스,
                텍스트 중 하나
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v2/api/talk/memo/default/send',
    data: {
      template_object: {
        object_type: 'feed',
        content: {
          title: '카카오톡 링크 4.0',
          description: '디폴트 템플릿 FEED',
          image_url:
            'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            web_url: 'https://developers.kakao.com',
            mobile_web_url: 'https://developers.kakao.com',
          },
        },
        social: {
          like_count: 100,
          comment_count: 200,
        },
        button_title: '바로 확인',
      },
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });                    
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          친구에게 보내기
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v1/api/talk/friends/message/default/send'
  });                    
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Parameter
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td>String</Td>
              <Td>/v1/api/talk/friends/message/default/send로 고정</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>success</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 성공할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>fail</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 실패할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>always</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출 성공 여부에 관계 없이 항상 호출되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>data</Td>
              <Td>Object</Td>
              <Td>
                API에 전달할 파라미터 자세한 내용은 data: 기본 템플릿으로
                친구에게 메시지 보내기 확인
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          data: 기본 템플릿으로 친구에게 메시지 보내기
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>receiver_uuids</Td>
              <Td>String[]</Td>
              <Td>
                친구 목록 가져오기 API를 통해 얻은 사용자 uuid 값, 최대 5개
              </Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>template_object</Td>
              <Td>Object</Td>
              <Td>
                메시지 구성 요소를 담은 객체(Object) 피드, 리스트, 위치, 커머스,
                텍스트 중 하나
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v1/api/talk/friends/message/default/send',
    data: {
      receiver_uuids: ['receiver_uuids'],
      template_object: {
        object_type: 'feed',
        content: {
          title: '카카오톡 링크 4.0',
          description: '디폴트 템플릿 FEED',
          image_url:
            'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            web_url: 'https://developers.kakao.com',
            mobile_web_url: 'https://developers.kakao.com',
          },
        },
        social: {
          like_count: 100,
          comment_count: 200,
        },
        button_title: '바로 확인',
      },
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });                   
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          사용자 정의 템플릿으로 메시지 보내기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          기본 템플릿으로 메시지 보내기와는 달리, [도구] &gt; [메시지 템플릿]에서
          직접 구성한 사용자 정의 템플릿을 사용하여 메시지를 보내는 기능입니다.
          <br /> [도구] &gt; [메시지 템플릿]에서 구성한 템플릿의 ID를 template_id
          파라미터로 전달합니다.
          <br /> 메시지에 변동되는 정보를 포함하려면 해당 템플릿에 사용자 인자를
          추가한 후, template_args 파라미터를 통해 전달합니다.
          <br /> 메시지 템플릿에 사용자 인자가 포함되었음에도 template_args
          파라미터를 사용하지 않으면 메시지에 ${"{"}key{"}"}가 글자 그대로
          포함됩니다.
          <br />
          <br /> 친구에게 메시지 보내기 요청 시, 친구 목록 가져오기 API의
          응답으로 받은 uuid를 receiver_uuids 파라미터에 전달합니다. 한 번에
          최대 5명의 친구에게 메시지를 보낼 수 있습니다.
          <br />
          <br /> 요청 성공 시 응답은 REST API의 사용자 정의 템플릿으로 메시지
          보내기와 같습니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          나에게 보내기
        </Heading>
        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v2/api/talk/memo/send'
  });                   
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Parameter
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td>String</Td>
              <Td>/v2/api/talk/memo/send로 고정</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>success</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 성공할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>fail</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 실패할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>always</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출 성공 여부에 관계 없이 항상 호출되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>data</Td>
              <Td>Object</Td>
              <Td>
                API에 전달할 파라미터 자세한 내용은 data: 사용자 정의 템플릿으로
                나에게 메시지 보내기 확인
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          data: 사용자 정의 템플릿으로 나에게 메시지 보내기
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>template_id</Td>
              <Td>Long</Td>
              <Td>메시지 템플릿 도구에서 구성한 사용자 정의 템플릿의 ID</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>template_args</Td>
              <Td>Object</Td>
              <Td>
                template_id로 지정한 템플릿에 사용자 인자(User argument)가
                포함되어 있는 경우 대입할 값, key:value 형식으로 전달
              </Td>
              <Td>X</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v2/api/talk/memo/send',
    data: {
      template_id: TEMPLATE_ID,
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });                 
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          친구에게 보내기
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v1/api/talk/friends/message/send'
  });                   
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Parameter
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td>String</Td>
              <Td>/v1/api/talk/friends/message/send로 고정</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>success</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 성공할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>fail</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 실패할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>always</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출 성공 여부에 관계 없이 항상 호출되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>data</Td>
              <Td>Object</Td>
              <Td>
                API에 전달할 파라미터 자세한 내용은 data: 사용자 정의 템플릿으로
                친구에게 메시지 보내기 확인
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          data: 사용자 정의 템플릿으로 친구에게 메시지 보내기
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>receiver_uuids</Td>
              <Td>String[]</Td>
              <Td>
                친구 목록 가져오기 API를 통해 얻은 사용자 uuid 값, 최대 5개
              </Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>template_id</Td>
              <Td>Long</Td>
              <Td>메시지 템플릿 도구에서 구성한 사용자 정의 템플릿의 ID</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>template_object</Td>
              <Td>Object</Td>
              <Td>
                template_id로 지정한 템플릿에 사용자 인자(User argument)가
                포함되어 있는 경우 대입할 값, key:value 형식으로 전달
              </Td>
              <Td>X</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v1/api/talk/friends/message/send',
    data: {
      receiver_uuids: ['receiver_uuids'],
      template_id: TEMPLATE_ID,
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });                 
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          기본 템플릿으로 스크랩 메시지 보내기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          기스크랩한 웹 페이지 정보를 바탕으로 메시지를 구성하여 보내는
          기능입니다.
          <br />
          <br /> 요청 시, 스크랩할 웹 페이지 URL(request_url)을 필수로
          전달합니다. 또한 스크랩할 웹 페이지의 도메인은 [내 애플리케이션] &gt;
          [플랫폼] &gt; [Web]에 등록돼 있어야 합니다.
          <br />
          <br /> 친구에게 메시지 보내기 요청 시, 친구 목록 가져오기 API의
          응답으로 받은 uuid를 receiver_uuids 파라미터에 전달합니다. 한 번에
          최대 5명의 친구에게 메시지를 보낼 수 있습니다.
          <br />
          <br /> 요청 성공 시 응답은 REST API의 기본 템플릿으로 스크랩 메시지
          보내기와 같습니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          나에게 보내기
        </Heading>
        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v2/api/talk/memo/scrap/send'
  });                  
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Parameter
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td>String</Td>
              <Td>/v2/api/talk/memo/scrap/send로 고정</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>success</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 성공할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>fail</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 실패할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>always</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출 성공 여부에 관계 없이 항상 호출되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>data</Td>
              <Td>Object</Td>
              <Td>
                API에 전달할 파라미터 자세한 내용은 data: 기본 템플릿으로 나에게
                스크랩 메시지 보내기 확인
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          data: 기본 템플릿으로 나에게 스크랩 메시지 보내기
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>equest_url</Td>
              <Td>String</Td>
              <Td>
                스크랩할 웹 페이지 URL, [내 애플리케이션] &gt; [플랫폼] &gt; [Web]에
                등록된 도메인만 사용 가능
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v2/api/talk/memo/scrap/send',
    data: {
      request_url: SITE_URL,
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });               
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          친구에게 보내기
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v1/api/talk/friends/message/scrap/send'
  });                 
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Parameter
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td>String</Td>
              <Td>/v1/api/talk/friends/message/scrap/send로 고정</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>success</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 성공할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>fail</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 실패할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>always</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출 성공 여부에 관계 없이 항상 호출되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>data</Td>
              <Td>Object</Td>
              <Td>
                API에 전달할 파라미터 자세한 내용은 data: 기본 템플릿으로
                친구에게 스크랩 메시지 보내기 확인
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          data: 기본 템플릿으로 친구에게 스크랩 메시지 보내기
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>receiver_uuids</Td>
              <Td>String[]</Td>
              <Td>
                친구 목록 가져오기 API를 통해 얻은 사용자 uuid 값, 최대 5개
              </Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>request_url</Td>
              <Td>String</Td>
              <Td>
                스크랩할 웹 페이지 URL, [내 애플리케이션] &gt; [플랫폼] &gt; [Web]에
                등록된 도메인만 사용 가능
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v1/api/talk/friends/message/scrap/send',
    data: {
      receiver_uuids: ['receiver_uuids'],
      request_url: SITE_URL,
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });               
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          사용자 정의 템플릿으로 스크랩 메시지 보내기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          스크랩한 웹 페이지 정보를 바탕으로 메시지를 구성하여 보내는
          기능입니다.
          <br /> 기본 템플릿으로 스크랩 메시지 보내기와 다르게, [도구] &gt; [메시지
          템플릿]에서 구성한 사용자 정의 템플릿을 사용하여 메시지를 구성합니다.
          <br />
          <br /> 요청 시, 스크랩할 웹 페이지 URL(request_url)은 필수로
          전달해합니다.
          <br /> 이 때, 스크랩할 웹 페이지의 도메인은 [내 애플리케이션] &gt;
          [플랫폼] &gt; [Web]에 등록돼 있어야 합니다.
          <br />
          <br /> 또한 [도구] &gt; [메시지 템플릿]에서 구성한 사용자 정의 템플릿의
          ID를 template_id 파라미터로 함께 전달합니다. 메시지에 변동되는 정보를
          포함하려면 해당 템플릿에 사용자 인자를 추가한 후, template_args
          파라미터를 통해 전달합니다.
          <br />
          메시지 템플릿에 사용자 인자가 포함되었음에도 template_args 파라미터를
          사용하지 않으면 메시지에 ${"{"}key{"}"}가 글자 그대로 포함됩니다.
          <br />
          <br /> 친구에게 메시지 보내기 요청 시, 친구 목록 가져오기 API의
          응답으로 받은 uuid를 receiver_uuids 파라미터에 전달합니다. 한 번에
          최대 5명의 친구에게 메시지를 보낼 수 있습니다.
          <br />
          <br /> 요청 성공 시 응답은 REST API의 사용자 정의 템플릿으로 스크랩
          메시지 보내기와 같습니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          나에게 보내기
        </Heading>
        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v2/api/talk/memo/scrap/send'
  });                 
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Parameter
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td>String</Td>
              <Td>/v2/api/talk/memo/scrap/send로 고정</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>success</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 성공할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>fail</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 실패할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>always</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출 성공 여부에 관계 없이 항상 호출되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>data</Td>
              <Td>Object</Td>
              <Td>
                API에 전달할 파라미터 자세한 내용은 data: 사용자 정의 템플릿으로
                나에게 스크랩 메시지 보내기 확인
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          data: 사용자 정의 템플릿으로 나에게 스크랩 메시지 보내기
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>request_url</Td>
              <Td>String</Td>
              <Td>
                스크랩할 웹 페이지 URL, [내 애플리케이션] &gt; [플랫폼] &gt; [Web]에
                등록된 도메인만 사용 가능
              </Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>template_id</Td>
              <Td>Long</Td>
              <Td>스크랩한 정보를 반영할 사용자 정의 템플릿의 ID</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>template_args</Td>
              <Td>Object</Td>
              <Td>
                template_id로 지정한 템플릿에 사용자 인자(User argument)가
                포함되어 있는 경우 대입할 값, key:value 형식으로 전달 스크랩
                결과를 덮어쓰기(overwrite) 할 수는 없음
              </Td>
              <Td>X</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v2/api/talk/memo/scrap/send',
    data: {
      request_url: SITE_URL,
      template_id: TEMPLATE_ID,
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });             
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          친구에게 보내기
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v1/api/talk/friends/message/scrap/send'
  });                 
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Parameter
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>url</Td>
              <Td>String</Td>
              <Td>/v1/api/talk/friends/message/scrap/send로 고정</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>success</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 성공할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>fail</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출이 실패할 때 실행되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>always</Td>
              <Td>Function(Object)</Td>
              <Td>API 호출 성공 여부에 관계 없이 항상 호출되는 콜백 함수</Td>
              <Td>X</Td>
            </Tr>
            <Tr>
              <Td>data</Td>
              <Td>Object</Td>
              <Td>
                API에 전달할 파라미터 자세한 내용은 data: 사용자 정의 템플릿으로
                친구에게 스크랩 메시지 보내기 확인
              </Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          data: 사용자 정의 템플릿으로 친구에게 스크랩 메시지 보내기
        </Heading>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Description</Th>
              <Th>Required</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>receiver_uuids</Td>
              <Td>String[]</Td>
              <Td>
                친구 목록 가져오기 API를 통해 얻은 사용자 uuid 값, 최대 5개
              </Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>request_url</Td>
              <Td>String</Td>
              <Td>
                스크랩할 웹 페이지 URL, [내 애플리케이션] &gt; [플랫폼] &gt; [Web]에
                등록된 도메인만 사용 가능
              </Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>template_id</Td>
              <Td>Long</Td>
              <Td>스크랩한 정보를 반영할 사용자 정의 템플릿의 ID</Td>
              <Td>O</Td>
            </Tr>
            <Tr>
              <Td>template_args</Td>
              <Td>Object</Td>
              <Td>
                template_id로 지정한 템플릿에 사용자 인자(User argument)가
                포함되어 있는 경우 대입할 값, key:value 형식으로 전달 스크랩
                결과를 덮어쓰기(overwrite) 할 수는 없음
              </Td>
              <Td>X</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>
              {`            
Kakao.API.request({
    url: '/v1/api/talk/friends/message/scrap/send',
    data: {
      receiver_uuids: ['receiver_uuids'],
      request_url: SITE_URL,
      template_id: TEMPLATE_ID,
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });             
                    `}
            </code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          이미지 업로드하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          메시지에 넣을 이미지는 URL 형태로 메시지 템플릿 구성 시에 첨부하거나,
          메시지 템플릿 도구에서 미리 업로드할 수 있습니다.
          <br /> 자세한 사항은 카카오링크: JavaScript &gt; 이미지 업로드하기를
          참고합니다.
        </Text>

        <br />
      </Stack>
    </>
  );
}
