import { body } from 'express-validator';

export function validationCreateStage() {
  return [
    body('name')
      .isString()
      .isIn(['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final'])
      .withMessage('Invalid stage name')
  ];
}

export function validationUpdateStage() {
  return [
    body('name')
      .optional()
      .isString()
      .isIn(['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final'])
      .withMessage('Invalid stage name')
  ];
}
