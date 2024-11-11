import { body } from 'express-validator';

export function validationCreateUniversity() {
  return [
    body('name').isString().isLength({ min: 3 }).withMessage('Name is required and should be at least 3 characters long'),
    body('address').isString().isLength({ min: 5 }).withMessage('Address is required and should be at least 5 characters long'),
    body('phone').isString().matches(/^\d+$/).withMessage('Valid phone number is required')
  ];
}

export function validationUpdateUniversity() {
  return [
    body('name').optional().isString().isLength({ min: 3 }).withMessage('Name should be at least 3 characters long'),
    body('address').optional().isString().isLength({ min: 5 }).withMessage('Address should be at least 5 characters long'),
    body('phone').optional().isString().matches(/^\d+$/).withMessage('Valid phone number is required')
  ];
}