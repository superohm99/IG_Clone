import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { Link, router } from "expo-router";

interface SearchDataItem{
    id: number;
    images : {url: string}[];
}

const SearchContent = () => {
    const searchData: SearchDataItem[] = [
        {
            id: 0,
            images: [
                {url: "https://plus.unsplash.com/premium_photo-1669058431851-aae101e63b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"}
            ],
        },
    ]

return (
    <View>
        {searchData.map(item => {
        return (
            <View key={item.id}>
                <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width:'100%'
                }}>
                {item.images.map((imageData, imgIndex) => {
                    return (
                    <TouchableOpacity onPress={() => router.push('/SearchPostScreen')}
                        key={imgIndex}
                        style={{paddingBottom: 2,width:'33%'}}>
                        <Image
                            source={{ uri: imageData.url }} // Use imageData.url here
                            style={{width: '100%', height: 150}}
                        />
                    </TouchableOpacity>
                    );
                })}
                </View>            
            </View>
        );
        })}
    </View>
    );
};
    
export default SearchContent