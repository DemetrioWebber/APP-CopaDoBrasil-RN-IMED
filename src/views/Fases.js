import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import * as FasesService from '../services/API_fases'

export default function Jogos(props) {
    const {navigation} = props;

    const [fases, setFases] = useState([])

    useLayoutEffect(() => {
        FasesService.getFases()
            .then((dados) => {
                setFases(dados)
            })
            .catch((erro) => console.log(erro))
    }, [])

  return (
    <View>
        <SafeAreaView>
                <FlatList
                    data={fases}
                    renderItem={
                        ({ item }) =>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Jogos", item)}
                            >
                                <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 20 }}>{item.nome}</Text>
                                </View>
                            </TouchableOpacity>

                    }
                    keyExtractor={aluno => String(aluno.email)}
                />
            </SafeAreaView>
    </View>
  );
  }
