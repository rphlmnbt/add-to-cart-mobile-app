import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
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
    clearVoucher,
    error,
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
      <View style={tw`mt-4`}>
        <TextInput
          style={tw`border border-gray-50 rounded-lg text-white p-2 bg-gray-700 mb-3`}
          placeholder="Enter voucher code"
          placeholderTextColor="#ffffff"
          value={voucherCode}
          onChangeText={setVoucherCode}
        />

        <View style={tw`flex-row justify-between mb-2`}>
          <View style={tw`w-1/2 pr-1`}>
            <Button title="Apply Voucher" onPress={applyVoucher} />
          </View>
          <View style={tw`w-1/2 pl-1`}>
            <TouchableOpacity
              onPress={clearVoucher}
              disabled={discount === 0}
              style={tw.style(
                `rounded py-2 px-4 items-center`,
                discount === 0 ? `bg-gray-600` : `bg-gray-800`,
              )}
            >
              <Text style={tw`text-white font-semibold`}>CLEAR VOUCHER</Text>
            </TouchableOpacity>
          </View>
        </View>

        {error ? (
          <Text style={tw`text-red-400 font-semibold mb-2`}>{error}</Text>
        ) : discount > 0 ? (
          <Text style={tw`text-green-400 font-semibold mb-2`}>
            Discount Applied!
          </Text>
        ) : null}

        <View style={tw`mt-4`}>
          <Text style={tw`text-white text-2xl font-extrabold text-right`}>
            Total: $
            {discount > 0 ? discountedTotal.toFixed(2) : total.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}
