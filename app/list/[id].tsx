import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function List() {
  const { id, title } = useLocalSearchParams();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack.Screen options={{ title: `${title}` }} />
      <Text>This is List {title}</Text>
      <Text>id: {id}</Text>
      <Link href="/details">
        <Text>Go to Details Screen</Text>
      </Link>
    </SafeAreaView>
  );
}
