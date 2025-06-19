import React from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import ProductItem from './components/ProductItem';
import Cart from './components/Cart';
import useCart from './hooks/useCart';
import useVoucher from './hooks/useVoucher';

const products = [
  {
    id: '1',
    productName: 'Laptop',
    description: 'Portable computer',
    price: 999,
  },
  {
    id: '2',
    productName: 'Phone',
    description: 'Smartphone device',
    price: 699,
  },
  {
    id: '3',
    productName: 'Headphones',
    description: 'Noise-cancelling',
    price: 199,
  },
  {
    id: '4',
    productName: 'Keyboard',
    description: 'Mechanical keyboard',
    price: 89,
  },
];

export default function App() {
  const { cartItems, addToCart, removeFromCart, total } = useCart();
  const {
    voucherCode,
    setVoucherCode,
    discountedTotal,
    discount,
    applyVoucher,
  } = useVoucher(total);

  return (
    <View style={tw`flex-1 p-4 bg-gray-900 pt-8`}>
      <Text style={tw`text-xl font-bold mb-4 text-white`}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={tw`w-1/2 p-2`}>
            <ProductItem product={item} onAdd={() => addToCart(item)} />
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={tw`justify-between`}
        contentContainerStyle={tw`pb-4`}
        showsVerticalScrollIndicator={false}
      />

      <Cart items={cartItems} onRemove={removeFromCart} />

      <View style={tw`mt-4 mb-4`}>
        <TextInput
          style={tw`border border-gray-50  rounded-lg text-white p-2 mb-2 bg-gray-700`}
          placeholder="Enter voucher code"
          placeholderTextColor="#ffffff"
          value={voucherCode}
          onChangeText={setVoucherCode}
        />
        <Button title="Apply Voucher" onPress={applyVoucher} />
        {discount > 0 ? (
          <Text style={tw`mt-2 text-white font-semibold`}>
            Discount Applied! New Total: ${discountedTotal.toFixed(2)}
          </Text>
        ) : (
          <Text style={tw`mt-2 text-white font-semibold`}>
            Total: ${total.toFixed(2)}
          </Text>
        )}
      </View>
    </View>
  );
}
