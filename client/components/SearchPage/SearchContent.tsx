import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import { Link, router } from "expo-router";
import { images } from '@/constants';

interface SearchDataItem{
    id: string;
    user: string;
    images : {url: string}[];
}

// Helper function to chunk the array
const chunkArray = (array:any, chunkSize:any) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};
const SearchContent = () => {
    const searchData: SearchDataItem[] = [
        {
            id: '0',
            user: 'Ant',
            images: [
                {url: "https://plus.unsplash.com/premium_photo-1669058431851-aae101e63b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"}
            ],
        },
        {
            id: '1',
            user: 'Bird',
            images: [
                {url: "https://plus.unsplash.com/premium_photo-1664304582040-4f6c69c8380c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '2',
            user: 'Cat',
            images: [
                {url: "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '3',
            user: 'Dog',
            images: [
                {url: "https://images.unsplash.com/photo-1715412406617-e76cd73e644d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"}
            ],
        },
        {
            id: '4',
            user: 'Elephant',
            images: [
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '5',
            user: 'Fish',
            images: [
                {url: "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '6',
            user: 'Giraff',
            images: [
                {url: "https://images.unsplash.com/photo-1715541746936-6c3ac3de7802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '7',
            user: 'Hors',
            images: [
                {url: "https://images.unsplash.com/photo-1715694289855-7a7f04b49e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '8',
            user: 'F',
            images: [
                {url: "https://images.unsplash.com/photo-1715639116465-92add34d121f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '9',
            user: 'F',
            images: [
                {url: "https://images.unsplash.com/photo-1715351885312-3ab5f7d85df1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '10',
            user: 'F',
            images: [
                {url: "https://images.unsplash.com/photo-1715586041798-9583f0642747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
            ],
        },
        {
            id: '11',
            user: 'F',
            images: [
                {url: "https://images.unsplash.com/photo-1715351190944-a32bc9a900ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"},
            ],
        },
        
    ]
    const handlePress = (id: string,user: string) => {
        router.push({pathname:"/SearchPostScreen", params: {id,user}})
      };

    const chunkedData = chunkArray(searchData, 3);

    return (
        <View style={styles.container}>
            {chunkedData.map((chunk, index) => (
                <View key={index} style={styles.row}>
                    {chunk.map((item: SearchDataItem) => (
                    <TouchableOpacity
                        key={item.id} // Use item.id for unique key
                        onPress={() => handlePress(item.id,item.user)} // Call handlePress with item.id
                        style={styles.imageContainer} // New wrapper style
                        >
                        <Image source={{ uri: item.images[0].url }} style={styles.image} />
                    </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
    },
    image: {
        width: '100%', // Adjust this value as needed to fit the design
        height: 130,
        marginHorizontal: 3,
    },
    imageContainer: {
        width: '30%', // Adjust width as needed
        height: 'auto',
        marginHorizontal: 3,
      },
});
export default SearchContent