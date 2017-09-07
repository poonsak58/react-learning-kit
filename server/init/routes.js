/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import {
  controllers,
  passport as passportConfig
} from '../db';

const agodaLearningController = controllers && controllers.agodaLearning;

export default (app) => {
  if (agodaLearningController) {
    app.get('/api/agoda-learning/user-list', agodaLearningController.userList);
  }
};
