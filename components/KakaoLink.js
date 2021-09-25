import React, { useState, useEffect } from "react";

import {
  Textarea,
  Flex,
  VStack,
  HStack,
  Button,
  Image,
  Text,
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export default function KakaoLink() {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [localUrl, setLocalUrl] = useState("");

  useEffect(() => {
    if (!window.Kakao.isInitialized())
      // 사용할 앱의 JavaScript 키를 설정해 주세요.
      window.Kakao.init("1598359c558c0e811105006367eb346d");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("files length: " + files.length);
    // console.log("localUrl length:" + localUrl.length);
    // console.log(localUrl);
    if (files.length > 0) {
      // console.log("업로드할 이미지가 있는 경우....");
      var localFiles = files;
      window.Kakao.Link.uploadImage({
        file: localFiles,
      }).then((res) => {
        // console.log("image url : " + res.infos.original.url);
        sendLink(res.infos.original.url);
      });
    } else {
      sendLink(""); // url to blank
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // console.log(e.target.files);
    const imagesLocalUrl = URL.createObjectURL(e.target.files[0]);
    // console.log("localUrl : " + imagesLocalUrl);
    setLocalUrl(imagesLocalUrl);
    setFiles(e.target.files);
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setText(e.target.value);
  };

  const sendLink = (imageUrl) => {
    var url = "http://kakaoweb.netlify.app";
    if (imageUrl.length > 0) {
      url = imageUrl;
      // 이미지를 보낼때는 objectType 을 feed로 해야 보낼 수 있다.
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "",
          description: text,
          imageUrl: url,
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
      });
    } else {
      // 이미지가 없을 때
      // Kakao.Link.sendDefault 의 text 보내기가 버그 픽스가 되었다.
      // 아래처럼 objectType 으로 'text'를 넣으면 최대 200자까지 메시지를 전달할 수 있다.
      window.Kakao.Link.sendDefault({
        objectType: "text",
        text: text,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      });
    }

    // state 초기화
    setText("");
    setFiles([]);
    setLocalUrl("");
  };

  const clean = () => {
    console.log("clean function");
    setText("");
    setFiles([]);
    setLocalUrl("");
  };

  return (
    <>
      <Flex align="center" justify="center">
        <VStack>
          <Text m={10} fontWeight="bold">
            카카오톡 웹은 Kakao Developer API와 NextJs, Chakra-UI로
            만들어졌습니다.
            <br />
            <br />
            카카오톡 PC 버전 설치 없이 간단한 메시지와 이미지를 전송할 수
            있습니다.
          </Text>

          <form>
            <VStack mx={[4, 4, 0, 0]} spacing={4}>
              <Textarea
                placeholder="한번에 200자까지만 전송 가능 (이미지 첨부할 경우 100자만 가능)"
                value={text}
                onChange={(e) => handleChange(e)}
                colorScheme="blue"
                // isFullWidth={true}
                size="lg"
                rows="5"
              />
              <HStack>
                <Button colorScheme="red" onClick={(e) => clean()}>
                  다시 쓰기
                </Button>
                <Button colorScheme="yellow" onClick={(e) => handleSubmit(e)}>
                  카톡 전송
                </Button>
                <InputGroup>
                  <InputLeftAddon>이미지 올리기</InputLeftAddon>
                  <Input
                    accept="image/*"
                    id="button-file"
                    // KakaoLink not support multiple file sending yet.
                    // multiple
                    type="file"
                    placeholder="이미지 올리기"
                    onChange={(e) => handleUpload(e)}
                  />
                </InputGroup>
              </HStack>

              {localUrl.length > 0 ? (
                <Box p={[0, 0, 4, 4]}>
                  <Image
                    src={localUrl}
                    fit="cover"
                    title="Uploaded Image"
                    alt="Uploaded Image"
                  />
                </Box>
              ) : (
                <span />
              )}
            </VStack>
          </form>
        </VStack>
      </Flex>
    </>
  );
}
