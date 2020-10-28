import React from "react";
import { FlatList } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { FadeInView } from "../../components/FadeInView";

export const ProductList = ({ data }) => {
  return (
    <FadeInView>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
      />
    </FadeInView>
  );
};
