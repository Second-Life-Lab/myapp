/**
 * @format
 */

//import {AppRegistry} from 'react-native';
import {create} from 'react-test-renderer';
import App from './App';
import ViewComponent from './components/view';
//import {name as appName} from './app.json';
/*
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {rootTag: document.getElementById('root')});
*/
import {createRoot} from 'react-dom/client';
const appContainer = document.getElementById('app');
const appRoot = createRoot(appContainer); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);
appRoot.render(<App />);

const myComponentContainer = document.getElementById('myComponent');
const myComponentRoot = createRoot(myComponentContainer);
myComponentRoot.render(<ViewComponent />);
