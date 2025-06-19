import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function ProductItem({ product, onAdd }) {
  return (
    <View style={tw`border p-4 mb-2 rounded`}>
      <Text style={tw`text-lg font-semibold`}>{product.productName}</Text>
      <Text>{product.description}</Text>
      <Text style={tw`mb-2`}>${product.price}</Text>
      <Button title="Add to Cart" onPress={onAdd} />
    </View>
  );
}