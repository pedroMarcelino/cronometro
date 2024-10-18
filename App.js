import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      texto: 'Vai',
      ultimo: 0,
    }

    // variavel do timer relogio
    this.timer = null;

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai() {
    if (this.timer != null) {
      this.setState({ texto: 'Vai' });
      //aqui vai parar o timer 
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.setState({ texto: 'Pausar' });
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.01 })
      }, 100)
    }

  }

  limpar() {
    if (this.timer != null) {
      //aqui vai parar o timer 
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      texto: 'Vai'
    });
  }


  render() {
    return (
      <View style={style.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={style.cronometro}
        />

        <Text style={style.timer}>{this.state.numero.toFixed(2)}</Text>

        <View style={style.btnArea}>

          <TouchableOpacity style={style.btn} onPress={this.vai}>
            <Text style={style.btnTexto}>{this.state.texto}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.btn} onPress={this.limpar}>
            <Text style={style.btnTexto}>Limpar</Text>
          </TouchableOpacity>

        </View>

        <View style={style.areaUltima}>
          <Text style={style.txtUltimo}>{this.state.ultimo.toFixed(1)}</Text>
        </View>

      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    width: 100,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltima: {
    marginTop: 40,
  },
  txtUltimo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
})

export default App