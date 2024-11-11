import { body } from 'express-validator';

export function validationCreateClient() {
  return [
    body('name').isString().isLength({ min: 3 }).withMessage('Name is required and should be at least 3 characters long'),
    body('email').isEmail().withMessage('Valid email is required')
  ];
}

export function validationUpdateClient() {
  return [
    body('name').optional().isString().isLength({ min: 3 }).withMessage('Name should be at least 3 characters long'),
    body('email').optional().isEmail().withMessage('Valid email is required')
  ];
}
