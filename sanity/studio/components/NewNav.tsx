import { Stack, Card, Flex, Text } from '@sanity/ui'
export default function NewNav(props: any) {
  return (
    <Stack>
      <Card padding={3} tone="caution">
        <Flex justify="center">
          <Text>Important Message: Please Read! Running on version v1085 DODRIO</Text>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  )
}