import { body } from 'express-validator';

export function validationCreateProjectType() {
  return [
    body('name')
      .isString()
      .isIn(['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización'])
      .withMessage('Invalid project type')
  ];
}

export function validationUpdateProjectType() {
  return [
    body('name')
      .optional()
      .isString()
      .isIn(['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización'])
      .withMessage('Invalid project type')
  ];
}
