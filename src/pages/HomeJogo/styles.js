import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ddd',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 20,
    color: '#f5f5dc',
    marginTop: 20,
    marginBottom: 10,
  },
  boxJogador: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  jogadorX: {
    fontSize: 40,
    color: '#553FDA',
  },
  jogadorO: {
    fontSize: 40,
    color: '#da3f3f',
  },
  inlineItems: {
    flexDirection: 'row',
    backgroundColor: '#c0c0c0',
  },
  botaoMenu: {
    marginTop: 20,
  },
  textoBotaoMenu: {
    color: '#fff5ee',
  },
  ganhador: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  imagem: {
    resizeMode: 'contain',
    height: 100,
    width: 200,
  },
});

export default styles;
