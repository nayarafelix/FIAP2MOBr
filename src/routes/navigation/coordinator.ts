import {navigation} from './navigation';
import {AuthStackScreenNames} from '../stacks/AuthStack.routes';
import {LoggedStackScreenNames} from '../stacks/Logged.routes';

const AuthCoordinator = {
  goToSignIn: () => navigation.push(AuthStackScreenNames.SignIn),
};

const LoggedCoordinator = {
  goToNews: () => navigation.push(LoggedStackScreenNames.News),
  goToMaps: () => navigation.push(LoggedStackScreenNames.Maps),
  goToMembers: () => navigation.push(LoggedStackScreenNames.Members),
  goToGustavo: () => navigation.push(LoggedStackScreenNames.Gustavo),
  goToNayara: () => navigation.push(LoggedStackScreenNames.Nayara),
  goToVinicius: () => navigation.push(LoggedStackScreenNames.Vinicius),
  goToYuri: () => navigation.push(LoggedStackScreenNames.Yuri),
};

export const coordinator = {
  goBack: () => navigation.goBack(),
  ...AuthCoordinator,
  ...LoggedCoordinator,
};
