import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ActivityIndicator, Button, Image, ImageBackground, ScrollView} from 'react-native';

const Nome = "";
const Sobrenome = "";
const Cep  = "";
const Endereco = ""
const Cidade = ""
const Estado = ""

const ValidateLogin = async (nome, sobrenome, cep, endereco, cidade, estado, status, activity) => {
    if (!nome.trim()) {
        alert("Digite o seu nome.");
        return;
    }

    if (!sobrenome.trim()) {
        alert("Digite o seu sobrenome.");
        return;
    }
    if (!cep.trim()) {
        alert("Digite o seu cep.");
        return;
    }
    if (!endereco.trim()) {
        alert("Digite o seu endereco.");
        return;
    }
    if (!cidade.trim()) {
        alert("Digite a sua cidade.");
        return;
    }
    if (!estado.trim()) {
        alert("Digite o seu estado.");
        return;
    }
    
    else {
            alert("Todos os campos foram preenchidos")
        }


    activity(true);

}

export default () => {
    const [activity, setActivity] = useState(false)
    const [status, setStatus] = useState('')
    const [nome, setNome] = useState('')
    const [sobrenome, setSobreome] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')


    return (
        <View style={Estilos.container}>
            <ImageBackground source={require("./Brother_Calm.png")}
                     resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
              <Text style={Estilos.loginLabel}>Nome:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={"digite seu nome"}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={""}
                  onChangeText={(value) => setNome(value)}
              />
              <Text style={Estilos.loginLabel}>Sobrenome:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={"digite seu sobrenome"}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={""}
                  onChangeText={(value) => setSobreome(value)}
              />
              <Text style={Estilos.loginLabel}>CEP:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={"digite seu CEP"}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={""}
                  onChangeText={(value) => setCep(value)}
              />
              <Text style={Estilos.loginLabel}>Endereco:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={"digite seu endereço"}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={""}
                  onChangeText={(value) => setEndereco(value)}
              />
              <Text style={Estilos.loginLabel}>Cidade:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={"digite sua cidade"}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={""}
                  onChangeText={(value) => setCidade(value)}
              />
              <Text style={Estilos.loginLabel}>Estado:</Text>
              <TextInput
                  autoCorrect={false}
                  placeholder={"Digite seu estado"}
                  placeholderTextColor="grey"
                  style={Estilos.textInput}
                  clearButtonMode="always"
                  defaultValue={""}
                  onChangeText={(value) => setEstado(value)}
              />
              <View style={Estilos.button}>
                <Button onPress={() => ValidateLogin(nome, sobrenome, cep, endereco, cidade, estado, setStatus, setActivity)}title="OK" />
              </View>
              <View style={{marginTop: 10}}>
                  <ActivityIndicator size="large" animating={activity}/>
              </View>
              <Text style={Estilos.loginLabel}>{status}</Text>
            </ImageBackground>
        </View>
    )
};

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#202020'
    },
    loginLabel: {
        color: 'white',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        fontSize: 15,
        width: 120,
        height: 40,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        textAlign: 'center',
        alignSelf: 'center'
    },
    textInput: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 15,
        height: 40,
        width: 250,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    appImage: {
      flex: 1,
      justifyContent: "left",
      backgroundColor: 'black'
    }
});
