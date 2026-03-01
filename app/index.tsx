import { Link } from 'expo-router';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const data: ItemData[] = [
  { id: '9e1367f0-e5b0-437b-bbf6-4400d827ae22', title: 'Groceries' },
  { id: '013d7035-1de6-4671-a3ff-d20dcdd4ca62', title: 'Books' },
  { id: 'b17abc2b-7fff-49d9-9f0f-6cd8834ed287', title: 'Pharmacy' },
  { id: '4c1e8d2a-10bb-408b-826d-89b68a1d1950', title: 'Friday Night' },
];

const Item = ({ item }: { item: ItemData }) => (
  <Link
    href={{
      pathname: '/list/[id]',
      params: { id: item.id },
    }}
    asChild
  >
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 100,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.title}</Text>
    </TouchableOpacity>
  </Link>
);

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Shopping Lists
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
