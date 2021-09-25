import { Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";

export default function WikiPolicy() {
  return (
    <>
      <Stack spacing={{ base: 8, md: 14 }} mx={6} mt={6}>
        <Heading
          fontWeight={500}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        >
          이용 정책
        </Heading>
        <Text color={useColorModeValue("gray.800", "gray.300")}>
          카카오 API는 플랫폼 이용 정책에 따른 사용량 제한이 있습니다.
          <br />
          앱 및 API마다 할당된 사용량을 초과하면 에러가 발생하며 더 이상 API를
          사용할 수 없습니다.
          <br />
          할당된 사용량을 늘리려면 별도의 협의 및 제휴가 필요합니다.
          <br />
          단, 카카오톡 메시지의 경우 빈번한 메시지로부터 사용자를 보호하기
          위하여 쿼터 증설이 불가능합니다.
          <br />
          제휴 안내는 FAQ를 참고합니다.
          <br />
          <br />
          메시지 보내기 기능 중, 친구에게 보내기 기능은 기본적으로 앱의 팀
          멤버에 한해 동작합니다.
          <br />
          이 상태에서는 테스트를 위해 기능 이용 권한이 열려 있는 것이므로 하루
          30건으로 사용량이 제한됩니다.
          <br />
          실제 서비스에서 모든 사용자가 메시지 보내기 기능을 이용하려면 검수를
          거쳐야 합니다.
          <br />
          친구 상태에 따른 정보 제공 여부에 대한 자세한 설명은 카카오톡 소셜을
          참고합니다.
          <br />
          <br />
        </Text>
      </Stack>
    </>
  );
}
