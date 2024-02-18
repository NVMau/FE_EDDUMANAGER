import { registerRootComponent } from 'expo';

//import App from './App';
// import Sign_in from './Sign_in';
// import Sign_up from './Sign_up';
import student_home from './student_home';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(student_home);
