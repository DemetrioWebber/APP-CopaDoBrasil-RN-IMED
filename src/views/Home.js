import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import * as JogosService from '../services/API_campeonatos'

export default function Home(props) {

    const {navigation} = props;

    const [campeonato, setCampeonato] = useState([])

    useLayoutEffect(() => {
        JogosService.getCampeonatos()
            .then((dados) => {
                setCampeonato(dados[1])
            })
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <View style={{padding: 130}}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Fases", campeonato)}
            >
                <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{campeonato.nome} </Text>
                </View>
                <Image
                style={{ height: 150, width: 150 }}
                source={{
                    uri: campeonato.logo,
                }}
                />

            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({});