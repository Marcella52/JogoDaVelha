import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 20,
    color: '#555',
    marginTop: 20,
  },
  boxJogador: {
    width: 80,
    height: 80,
    backgroundColor: '#ddd',
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
    backgroundColor: '#f5f5dc',
  },
  botaoMenu: {
    marginTop: 20,
  },
  textoBotaoMenu: {
    color: '#4e6fe4',
  },
  ganhador: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;
