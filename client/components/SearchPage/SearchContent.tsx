import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native';

type SearchContentProps = {
    data: (data: string) => void;
};

const SearchContent = (props:SearchContentProps) => {
    const searchData = [
        {
            id: 0,
            images: [
                {url: "https://plus.unsplash.com/premium_photo-1669058431851-aae101e63b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"},
                {url: "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"}
            ]
        }
    ]

return (
    <View>
        {searchData.map((data, index) => {
        return (
            <View key={index}>
            {data.id === 0 ? (
                <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width:'100%'
                }}>
                {data.images.map((imageData, imgIndex) => {
                    return (
                    <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData.url)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2,width:'33%'}}>
                        <Image
                            source={{ uri: imageData.url }} // Use imageData.url here
                            style={{width: '100%', height: 150}}
                        />
                    </TouchableOpacity>
                    );
                })}
                </View>
            ) : null}
            
            </View>
        );
        })}
    </View>
    );
};
    
export default SearchContent