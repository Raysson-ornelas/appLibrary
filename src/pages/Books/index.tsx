import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { propsNavigationStack } from '../../routes/Models';
import { Book } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Models';
import {
    Image,
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import {
    Text,
    TextInput,
    IconButton,
    Colors,
    Card,
    Title,
    Paragraph,
    Subheading,
} from 'react-native-paper';

type booksScreenRouteType = RouteProp<propsNavigationStack, 'Books'>

export default function Books(){
    const {params} = useRoute<booksScreenRouteType>();
    const [bookData, setBookData] = useState<Book[]>([]);
    const navigation = useNavigation<propsStack>();

    const getBooks = async (token?: string) => {
        let request = await fetch('https://books.ioasys.com.br/api/v1/books?page=1', {
            method: 'Get',
            headers:{
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': '*/*',
            },
        });
        let books = await request.json();
        setBookData(books.data);
    }

    useEffect(() => {
        getBooks(params.token);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/Logo-black.png')}
                    resizeMode='contain'
                    style={{marginTop: 4}}
                />
                <Text style={styles.title}>Books</Text>
                <IconButton
                    icon='logout'
                    size={28}
                    color={Colors.black}
                    style={styles.logoutButton}
                    onPress={() => navigation.navigate('SignIn')}
                    touchSoundDisabled={undefined}
                />
            </View>
            <TextInput
                activeOutlineColor='#33333333'
                mode='outlined'
                placeholder='Procurar um livro'
                disabled={true}
                right={
                    <TextInput.Icon
                        name='magnify'
                        size={30}
                        color='#33333333' />
                }
                style={styles.searchInput} children={undefined} onPressIn={undefined} onPressOut={undefined} focusable={undefined} textAlign={undefined} onTextInput={undefined} autoComplete={undefined} showSoftInputOnFocus={undefined}            />
            <ScrollView>
                {bookData.map((book: Book) =>{
                    return(
                        <Card style={styles.card} key={book.id}>
                            <Card.Content style={styles.cardContent}>
                                <Image source={{uri: book.imageUrl}} style={styles.cardImage}/>
                                <Card.Content style={styles.cardDescription}>
                                    <Title style={styles.cardTitle}>{book.title}</Title>
                                    <Subheading style={styles.cardSubheading}>{book.category}</Subheading>
                                    <Paragraph style={styles.cardInformation}>{book.pageCount + ' páginas'}</Paragraph>
                                    <Paragraph style={styles.cardInformation}>{'Editora ' + book.publisher}</Paragraph>
                                    <Paragraph style={styles.cardInformation}>{'Publicado em '+ book.published}</Paragraph>
                                </Card.Content>
                            </Card.Content>
                        </Card>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#F2E7DC',
    },
    header: {
        flexDirection: 'row',
        width: '50%',
        marginBottom: 5,
        marginTop: 20,
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    logoutButton:{
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#33333333',
        borderStyle: 'solid',
        marginLeft: 125,
    },
    searchInput:{
        marginBottom: 5,
        height: 50,
    },
    card:{
        marginTop: 10,
    },
    cardContent:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    cardImage:{
        flexDirection: 'column',
        height: 170,
        width: 120
    },
    cardDescription:{
        flexDirection: 'column',
        width: '65%',
    },
    cardSubheading:{
        fontSize: 12,
        marginBottom: 20,
        color: '#AB2680',
    },
    cardTitle:{
        fontSize: 20,
    },
    cardInformation:{
        fontSize: 13,
        color: '#8C8C8C',
    },
});