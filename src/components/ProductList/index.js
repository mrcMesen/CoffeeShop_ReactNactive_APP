import React from "react";
import { FlatList } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { FadeInView } from "../../components/FadeInView";

/**
 * Section Component to show a list of Product with component ProductCard
 *
 * @param {data} array Data for iterate and show each item
 */
export const ProductList = ({ data }) => {
  return (
    <FadeInView>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={320}
        renderItem={(item) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
      />
    </FadeInView>
  );
};
