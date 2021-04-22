import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import axios from "axios"

export default function Jogos(props) {
    const {navigation} = props;

    var url = props.route.params._link

    const [jogos , setJogos] = useState([])

    const getJogos = () => {

        return new Promise(async (resolve, reject) => {
            try {
                let response = await axios.get("https://api.api-futebol.com.br"+url,  {headers: {'Authorization': `Bearer live_2dde67de903d8817464c1f3a4fd4f4`}})
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    useLayoutEffect(() => {
            getJogos()
            .then((dados) => {
                setJogos(dados.chaves)
            })
            .catch((erro) => console.log(erro))
    }, [])

  return (
    <View>
        <SafeAreaView>
                <FlatList
                    data={jogos}
                    renderItem={
                        ({ item }) =>
                            
                                <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 20 }}>Jogo: {item.partida_ida.placar}</Text>
                                </View>
                    }
                    keyExtractor={jogos => String(jogos.nome)}
                />
            </SafeAreaView>
    </View>
  );
  }
