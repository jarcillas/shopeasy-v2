import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function List() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Shoplists will be here</Text>
      <Link href="/details">
        <Text>Go to Details Screen</Text>
      </Link>
    </View>
  );
}
