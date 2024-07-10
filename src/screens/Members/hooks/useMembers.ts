import { coordinator } from '@routes';

export function useMembers() {
    const {goToGustavo, goToNayara, goToVinicius, goToYuri} = coordinator;

     return {
        goToGustavo,
        goToNayara,
        goToVinicius,
        goToYuri
      };
}