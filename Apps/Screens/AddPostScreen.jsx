import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export default function AddPostScreen() {
  const db = getFirestore(app);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "Category"));

    querySnapshot.forEach((doc) => {
      setCategoryList((categoryList) => [...categoryList, doc.data()]);
    });
  };

  return (
    <View>
      <Text>AddPostScreen</Text>
    </View>
  );
}
