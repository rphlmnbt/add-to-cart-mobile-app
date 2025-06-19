import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function ProductItem({ product, onAdd }) {
  return (
    <View style={tw`border p-4 mb-2 rounded-lg border-gray-50 bg-gray-600`}>
      <View style={tw`flex-row justify-between items-center mb-1`}>
        <Text style={tw`text-white text-lg font-semibold`}>
          {product.productName}
        </Text>
        <Text style={tw`text-white text-xl font-bold`}>${product.price}</Text>
      </View>
      <Text style={tw`text-white mb-2`}>{product.description}</Text>
      <Button title="Add to Cart" onPress={onAdd} />
    </View>
  );
}
