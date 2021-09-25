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
          카카오링크: JavaScript
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
          메시지 API는 카카오링크와 카카오톡 메시지 두 가지입니다. 이해하기를
          참고해 어떤 API로 메시지 보내기를 구현할 것인지 결정합니다.
        </Text>
        <Text fontWeight="bold">Step 2.메시지 종류 및 구성 방법 선택</Text>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          메시지 템플릿 &gt; 종류를 참고하여 어떤 메시지 템플릿을 사용할지
          결정합니다.
          <br />
          보낼 메시지는 기본 템플릿을 바탕으로 객체 형태로 구성하거나, 서비스에
          맞게 직접 구성한 사용자 정의 템플릿을 사용하여 구성할 수 있습니다.
          <br />
          자세한 사항은 메시지 구성 방법을 참고합니다.
          <br /> 기본으로 제공되는 템플릿 형식을 사용할 경우, 원하는 기본
          템플릿에 따라 template_object 객체로 메시지 내용을 구성하여 data
          파라미터를 통해 전달합니다.
          <br /> 자세한 사항은 기본 메시지 템플릿 구성 요소을 참고합니다.
          <br /> 사용자 정의 템플릿을 사용할 경우, 메시지에 사용자 인자로 추가할
          수 있습니다.
        </Text>
        <Text fontWeight="bold">Step 3.호출 방법 선택</Text>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          JavaScript SDK의 카카오링크 API는 두 가지 방법으로 API를 호출할 수
          있습니다. <br />
          공유하기 버튼을 JavaScript SDK를 통해 추가할지, 직접 추가한 버튼에
          메시지 보내기 요청만 연결할지에 따라 다른 API를 사용합니다.
          <br />
          메시지 보내기 요청 시 보내질 메시지 내용을 전달한다는 점은 같습니다.
          <br />
          <br />
          공유하기 버튼 사용하기: 카카오링크 공유하기 버튼에 이벤트 핸들러를
          추가하여, 사용자가 공유하기 버튼을 눌렀을 때 메시지 보내기 요청
          <br /> 직접 만든 버튼 사용하기: 서비스 웹페이지에서 자체적으로 띄운
          공유하기 버튼 클릭 시 해당 함수를 호출해 메시지 보내기 요청
          (카카오링크 공유하기 버튼을 추가하지 않고, 메시지 보내기만 요청)
        </Text>
        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          선택 조건에 따른 API
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          템플릿 종류에 따라 메시지 구성 요소가 다르므로 메시지 구성 시, 기본
          메시지 템플릿 구성 요소 및 예제를 참고합니다.
        </Text>
        <Table size={tableSize} variant="simple">
          <Thead>
            <Tr>
              <Th>메시지 종류</Th>
              <Th>메시지 구성 방법</Th>
              <Th>호출 방법</Th>
              <Th>사용할 API</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>피드, 리스트, 위치, 커머스, 텍스트</Td>
              <Td>기본 템플릿</Td>
              <Td>공유하기 버튼을 추가하고 메시지 보내기</Td>
              <Td>createDefaultButton()</Td>
            </Tr>
            <Tr>
              <Td>피드, 리스트, 위치, 커머스, 텍스트</Td>
              <Td>기본 템플릿</Td>
              <Td>직접 만든 버튼으로 메시지 보내기</Td>
              <Td>sendDefault()</Td>
            </Tr>
            <Tr>
              <Td>피드, 리스트, 커머스</Td>
              <Td>사용자 정의 템플릿</Td>
              <Td>공유하기 버튼을 추가하고 메시지 보내기</Td>
              <Td>createCustomButton()</Td>
            </Tr>
            <Tr>
              <Td>피드, 리스트, 커머스</Td>
              <Td>사용자 정의 템플릿</Td>
              <Td>직접 만든 버튼으로 메시지 보내기</Td>
              <Td>sendCustom()</Td>
            </Tr>
            <Tr>
              <Td>스크랩</Td>
              <Td>기본 템플릿</Td>
              <Td>공유하기 버튼을 추가하고 메시지 보내기</Td>
              <Td>createScrapButton()</Td>
            </Tr>
            <Tr>
              <Td>스크랩</Td>
              <Td>기본 템플릿</Td>
              <Td>직접 만든 버튼으로 메시지 보내기</Td>
              <Td>sendScrap()</Td>
            </Tr>
            <Tr>
              <Td>스크랩</Td>
              <Td>사용자 정의 템플릿</Td>
              <Td>공유하기 버튼을 추가하고 메시지 보내기</Td>
              <Td>createScrapButton()</Td>
            </Tr>
            <Tr>
              <Td>스크랩</Td>
              <Td>사용자 정의 템플릿</Td>
              <Td>직접 만든 버튼으로 메시지 보내기</Td>
              <Td>sendScrap()</Td>
            </Tr>
          </Tbody>
        </Table>

        <Divider />

        <Heading fontWeight={700} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
          기본 템플릿으로 메시지 보내기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          사용하려는 기본 템플릿에 따라 메시지를 JSON 형식으로 구성하여 카카오톡
          메시지를 보내는 기능입니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          공유하기 버튼 사용하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          웹 페이지 소스 코드 중 카카오링크 공유하기 버튼을 띄우려는 위치에서
          Kakao.Link.createDefaultButton를 호출하도록 합니다.
          <br /> 이 함수는 해당 위치에 카카오링크 공유하기 버튼을 추가하고, 해당
          버튼을 클릭했을 때 메시지 보내기를 요청합니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>Kakao.Link.createDefaultButton(PARAMETER);</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Tabs>
          <TabList>
            <Tab>피드</Tab>
            <Tab>리스트</Tab>
            <Tab>위치</Tab>
            <Tab>커머스</Tab>
            <Tab>텍스트</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.createDefaultButton({
    container: '#CONTAINER_ID',
    objectType: 'feed',
    content: {
      title: '디저트 사진',
      description: '아메리카노, 빵, 케익',
      imageUrl:
        'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
    ]
  });              
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.createDefaultButton({
    container: '#create-kakao-link-btn',
    objectType: 'list',
    headerTitle: 'WEEKLY MAGAZINE',
    headerLink: {
      mobileWebUrl: 'https://developers.kakao.com',
      webUrl: 'https://developers.kakao.com',
    },
    contents: [
      {
        title: '취미의 특징, 탁구',
        description: '스포츠',
        imageUrl:
          'http://k.kakaocdn.net/dn/bDPMIb/btqgeoTRQvd/49BuF1gNo6UXkdbKecx600/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '크림으로 이해하는 커피이야기',
        description: '음식',
        imageUrl:
          'http://k.kakaocdn.net/dn/QPeNt/btqgeSfSsCR/0QJIRuWTtkg4cYc57n8H80/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '감성이 가득한 분위기',
        description: '사진',
        imageUrl:
          'http://k.kakaocdn.net/dn/c7MBX4/btqgeRgWhBy/ZMLnndJFAqyUAnqu4sQHS0/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 보기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });     
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.createDefaultButton({
    container: '#create-kakao-link-btn',
    objectType: 'location',
    address: '경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층',
    addressTitle: '카카오 판교오피스 카페톡',
    content: {
      title: '신메뉴 출시♥︎ 체리블라썸라떼',
      description: '이번 주는 체리블라썸라떼 1+1',
      imageUrl:
        'http://k.kakaocdn.net/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });          
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.createDefaultButton({
    container: '#create-kakao-link-btn',
    objectType: 'commerce',
    content: {
      title: '언제 어디든, 더 쉽고 편하게 당신의 일상을 더 즐겁게, 헤이 라이언의 이야기를 들려드릴게요.',
      imageUrl:
        'http://k.kakaocdn.net/dn/dScJiJ/btqB3cwK1Hi/pv5qHVwetz5RZfPZR3C5K1/kakaolink40_original.png',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    commerce: {
      productName: '카카오미니',
      regularPrice: 100000,
      discountRate: 10,
      discountPrice: 90000
    },
    buttons: [
      {
        title: '구매하기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '공유하기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });         
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.createDefaultButton({
    container: '#create-kakao-link-btn',
    objectType: 'text',
    text:
      '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.',
    link: {
      mobileWebUrl:
        'https://developers.kakao.com',
      webUrl:
        'https://developers.kakao.com',
    },
  });     
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          직접 만든 버튼 사용하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          Kakao.Link.sendDefault 함수는 카카오링크 공유하기 버튼을 추가하지
          않고, 메시지 보내기 요청만 합니다. <br />웹 페이지 구성 요소 중,
          카카오링크 공유하기 버튼으로 사용할 버튼 클릭 시 해당 함수를
          호출하도록 하는 방식입니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>Kakao.Link.sendDefault(PARAMETER);</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Tabs>
          <TabList>
            <Tab>피드</Tab>
            <Tab>리스트</Tab>
            <Tab>위치</Tab>
            <Tab>커머스</Tab>
            <Tab>텍스트</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '디저트 사진',
      description: '아메리카노, 빵, 케익',
      imageUrl:
        'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
    ]
  });            
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.sendDefault({
    objectType: 'list',
    headerTitle: 'WEEKLY MAGAZINE',
    headerLink: {
      mobileWebUrl: 'https://developers.kakao.com',
      webUrl: 'https://developers.kakao.com',
    },
    contents: [
      {
        title: '취미의 특징, 탁구',
        description: '스포츠',
        imageUrl:
          'http://k.kakaocdn.net/dn/bDPMIb/btqgeoTRQvd/49BuF1gNo6UXkdbKecx600/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '크림으로 이해하는 커피이야기',
        description: '음식',
        imageUrl:
          'http://k.kakaocdn.net/dn/QPeNt/btqgeSfSsCR/0QJIRuWTtkg4cYc57n8H80/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '감성이 가득한 분위기',
        description: '사진',
        imageUrl:
          'http://k.kakaocdn.net/dn/c7MBX4/btqgeRgWhBy/ZMLnndJFAqyUAnqu4sQHS0/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 보기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.sendDefault({
    objectType: 'location',
    address: '경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층',
    addressTitle: '카카오 판교오피스 카페톡',
    content: {
      title: '신메뉴 출시♥︎ 체리블라썸라떼',
      description: '이번 주는 체리블라썸라떼 1+1',
      imageUrl:
        'http://k.kakaocdn.net/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });          
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.sendDefault({
    objectType: 'commerce',
    content: {
      title: '언제 어디든, 더 쉽고 편하게 당신의 일상을 더 즐겁게, 헤이 라이언의 이야기를 들려드릴게요.',
      imageUrl:
        'http://k.kakaocdn.net/dn/dScJiJ/btqB3cwK1Hi/pv5qHVwetz5RZfPZR3C5K1/kakaolink40_original.png',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    commerce: {
      productName: '카카오미니',
      regularPrice: 100000,
      discountRate: 10,
      discountPrice: 90000
    },
    buttons: [
      {
        title: '구매하기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '공유하기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });         
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
            <TabPanel>
              <Code colorScheme="facebook">
                <pre>
                  <code>
                    {`
Kakao.Link.sendDefault({
    objectType: 'text',
    text:
      '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.',
    link: {
      mobileWebUrl:
        'https://developers.kakao.com',
      webUrl:
        'https://developers.kakao.com',
    },
  });    
                    `}
                  </code>
                </pre>
              </Code>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Heading fontWeight={700} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
          사용자 정의 템플릿으로 메시지 보내기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          [도구] &gt; [메시지 템플릿]에서 직접 구성한 사용자 정의 템플릿을 사용하여
          카카오톡으로 메시지를 공유하는 기능입니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          공유하기 버튼 사용하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          웹 페이지 소스 코드 중 카카오링크 공유하기 버튼을 띄우려는 위치에서
          Kakao.Link.createCustomButton를 호출하도록 합니다.
          <br /> 이 함수는 해당 위치에 카카오링크 공유하기 버튼을 추가하고, 해당
          버튼을 클릭했을 때 메시지 보내기를 요청합니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>Kakao.Link.createCustomButton(PARAMETER);</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>{`
Kakao.Link.createCustomButton({
    container: '#kakao-link-btn',
    templateId: {YOUR_TEMPLATE_ID},
    templateArgs: {
      'title': '제목 영역입니다.',
      'description': '설명 영역입니다.'
    }
  });            
            `}</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          직접 만든 버튼 사용하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          Kakao.Link.sendCustom 함수는 카카오링크 공유하기 버튼을 추가하지 않고,
          메시지 보내기 요청만 합니다. <br />웹 페이지 구성 요소 중, 카카오링크
          공유하기 버튼으로 사용할 버튼 클릭 시 해당 함수를 호출하도록 하는
          방식입니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>Kakao.Link.sendCustom(PARAMETER);</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>{`
Kakao.Link.sendCustom({
    templateId: {YOUR_TEMPLATE_ID},
    templateArgs: {
      'title': '제목 영역입니다.',
      'description': '설명 영역입니다.'
    }
  });           
            `}</code>
          </pre>
        </Code>

        <Heading fontWeight={700} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
          기본 템플릿으로 스크랩 메시지 보내기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          스크랩한 웹 페이지 정보를 바탕으로 메시지를 구성하여 카카오톡으로
          메시지를 공유하는 기능입니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          공유하기 버튼 사용하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          웹 페이지 소스 코드 중 카카오링크 공유하기 버튼을 띄우려는 위치에서
          Kakao.Link.createScrapButton를 호출하도록 합니다. <br />이 함수는 해당
          위치에 카카오링크 공유하기 버튼을 추가하고, 해당 버튼을 클릭했을 때
          메시지 보내기를 요청합니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>Kakao.Link.createScrapButton(PARAMETER);</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>{`
Kakao.Link.createScrapButton({
    container: '#kakao-link-btn',
    requestUrl: 'https://developers.kakao.com'
  });            
            `}</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          직접 만든 버튼 사용하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          Kakao.Link.sendScrap 함수는 카카오링크 공유하기 버튼을 추가하지 않고,
          메시지 보내기 요청만 합니다. <br />웹 페이지 구성 요소 중, 카카오링크
          공유하기 버튼으로 사용할 버튼 클릭 시 해당 함수를 호출하도록 하는
          방식입니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>Kakao.Link.sendScrap(PARAMETER);</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>{`
Kakao.Link.sendScrap({
    requestUrl: 'https://developers.kakao.com'
  });          
            `}</code>
          </pre>
        </Code>

        <Heading fontWeight={700} fontSize={{ base: "xl", sm: "xl", md: "xl" }}>
          사용자 정의 템플릿으로 스크랩 메시지 보내기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          스크랩한 웹 페이지 정보를 바탕으로 메시지를 구성하여 카카오톡으로
          메시지를 공유하는 기능입니다.
          <br /> [도구] &gt; [메시지 템플릿]에서 구성한 사용자 정의 템플릿을
          사용하여 메시지를 구성합니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          공유하기 버튼 사용하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          웹 페이지 소스 코드 중 카카오링크 공유하기 버튼을 띄우려는 위치에서
          Kakao.Link.createScrapButton를 호출하도록 합니다.
          <br /> 이 함수는 해당 위치에 카카오링크 공유하기 버튼을 추가하고, 해당
          버튼을 클릭했을 때 메시지 보내기를 요청합니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>Kakao.Link.createScrapButton(PARAMETER);</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>{`
Kakao.Link.createScrapButton({
    container: '#kakao-link-btn',
    requestUrl: 'https://developers.kakao.com',
    templateId: {YOUR_TEMPLATE_ID}
  });           
            `}</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          직접 만든 버튼 사용하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          Kakao.Link.sendScrap 함수는 카카오링크 공유하기 버튼을 추가하지 않고,
          메시지 보내기 요청만 합니다.
          <br />웹 페이지 구성 요소 중, 카카오링크 공유하기 버튼으로 사용할 버튼
          클릭 시 해당 함수를 호출하도록 하는 방식입니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Request
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>Kakao.Link.sendScrap(PARAMETER);</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "md", sm: "md", md: "lg" }}>
          Sample
        </Heading>
        <Code colorScheme="facebook">
          <pre>
            <code>{`
Kakao.Link.sendScrap({
    requestUrl: 'https://developers.kakao.com',
    templateId: {YOUR_TEMPLATE_ID}
  });        
            `}</code>
          </pre>
        </Code>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          카카오링크 전송 성공 알림 설정하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오링크 전송 성공 알림은 사용자가 선택한 친구나 채팅방으로
          카카오링크 메시지가 성공적으로 전달된 경우, 개발자 웹사이트에 설정된
          콜백 URL로 메시지가 성공적으로 전달되었음을 알려주는 기능입니다.
          <br />
          카카오링크 메시지 전송 시에만 사용할 수 있고, 카카오톡 메시지 전송에는
          지원되지 않습니다.
          <br /> 카카오링크는 사용자가 카카오톡에서 메시지를 전송하므로
          서비스에서 전송 성공 여부를 직접 확인할 수 없기 때문에 메시지 전송
          성공 시 알림을 받는 서버 콜백(Callback) 기능을 제공합니다.
        </Text>
        <Text fontWeight="bold">
          이 기능을 사용하려면 다음을 수행해야 합니다:
        </Text>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          1. 설정하기 &gt; 카카오링크 전송 성공 알림 설정을 참고하여 콜백 URL과
          요청 방법(Method) 설정
          <br />
          2. 카카오링크 콜백을 받을 서버 구현
          <br />
          3. 카카오링크 API 호출 시 Kakao SDK에서 제공하는 링크 콜백
          인터페이스(interface)를 이용해 사용자 정의(Custom) 파라미터 전달
          <br />
          4. 서비스 서버의 콜백 URL로 전달되는 알림에 대한 처리 구현
        </Text>

        <Text color={useColorModeValue("gray.800", "gray.300")}>
          서비스 서버를 통해 카카오링크 메시지 전송 성공 알림을 받을 때, 미리
          설정해둔 사용자 정의(Custom) 파라미터를 통해 사용자가 공유한 콘텐츠가
          무엇인지 등 추가 정보를 알 수 있습니다.
          <br /> 서비스 서버로 보내지는 알림은 자세한 메시지 전송 관련 정보를
          포함하고 있지 않으므로 어떤 메시지의 전송 결과인지, 사용자가 무슨
          정보를 공유했는지 등 서비스에서 필요한 추가 정보로 파라미터를
          구성합니다.
          <br /> [내 애플리케이션]에서 카카오링크 콜백을 설정하였더라도 사용자
          정의 파라미터가 없을 경우에는 카카오링크 전송 성공 알림이 전달되지
          않습니다.
        </Text>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오링크로 메시지를 전송하는 시점에 serverCallbackArgs 파라미터로
          사용자 정의 파라미터를 전달할 수 있습니다.
          <br /> 다음 예제를 참고합니다.
        </Text>

        <Code colorScheme="facebook">
          <pre>
            <code>{`
// 링크가 전송되면 앱의 링크 콜백이 설정된 URL 및 메소드로 콜백이 전송됩니다.
Kakao.Link.sendDefault({
  objectType: 'text',
  text: '간단한 JavaScript SDK 샘플과 함께 카카오 플랫폼 서비스 개발을 시작해 보세요.',
  link: {
    mobileWebUrl: 'https://developers.kakao.com',
    webUrl: 'https://developers.kakao.com'
  },
  serverCallbackArgs: { // 사용자 정의 파라미터 설정
    key: 'value'
  }
});      
            `}</code>
          </pre>
        </Code>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          위와 같이 전달된 사용자 정의 파라미터는 서비스 서버의 콜백 URL에
          보내지는 알림에 요청 파라미터 형태로 포함됩니다.
          <br /> 카카오가 보내는 카카오링크 성공 알림 요청 전문은 유용한 참고
          정보 &gt; 고급 &gt; 카카오링크 전송 성공 알림을 확인합니다.
        </Text>

        <Heading fontWeight={500} fontSize={{ base: "lg", sm: "lg", md: "lg" }}>
          이미지 업로드하기
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오링크 메시지에 넣을 이미지는 URL 형태로 메시지 템플릿 구성 시에
          첨부하거나, 메시지 템플릿 도구에서 미리 업로드할 수 있습니다.
          <br /> 기기에 저장된 이미지 파일은 서버에 업로드하고 이미지 파일 URL
          값을 구해야 메시지 전송에 사용할 수 있습니다.
          <br />
          <br /> 이미지 파일 URL을 구하기 어려운 경우, 웹 페이지 속 이미지
          파일을 카카오링크 전용 서버로 업로드하거나 스크랩해두는 기능을 이용할
          수 있습니다.
          <br /> 카카오링크 전용 서버에 업로드된 이미지는 최대 20일간 보관되고,
          기간이 지나면 자동으로 삭제됩니다.
        </Text>
        <Text fontWeight="bold">주의 사항</Text>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          파일 용량 2MB 이하 이미지만 업로드할 수 있습니다.
        </Text>

        <Text color={useColorModeValue("gray.800", "gray.300")}>
          이미지 업로드하기
        </Text>

        <Code colorScheme="facebook">
          <pre>
            <code>{`
var files = document.getElementById('file').files;

Kakao.Link.uploadImage({
  file: files
}).then(function(res){
  document.getElementById('uploadUrl').value = res.infos.original.url;
});     
            `}</code>
          </pre>
        </Code>

        <Text color={useColorModeValue("gray.800", "gray.300")}>
          이미지 스크랩하기
        </Text>

        <Code colorScheme="facebook">
          <pre>
            <code>{`
var url = document.getElementById('url').value;

Kakao.Link.scrapImage({
  imageUrl: url
}).then(function(res){
  document.getElementById('scrapUrl').value = res.infos.original.url;
});    
            `}</code>
          </pre>
        </Code>

        <Text color={useColorModeValue("gray.800", "gray.300")}>
          이미지 삭제하기
        </Text>

        <Code colorScheme="facebook">
          <pre>
            <code>{`
var url = document.getElementById('url').value;

Kakao.Link.deleteImage({
  imageUrl: url
});    
            `}</code>
          </pre>
        </Code>

        <br />
      </Stack>
    </>
  );
}
