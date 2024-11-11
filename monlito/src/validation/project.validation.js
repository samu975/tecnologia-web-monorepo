import { body } from 'express-validator';

export function validationCreateProject() {
  return [
    body('number').isString().isLength({ min: 1 }).withMessage('Unique project number is required'),
    body('title').isString().isLength({ min: 3 }).withMessage('Title is required and should be at least 3 characters long'),
    body('startDate').isISO8601().toDate().withMessage('Valid start date is required'),
    body('endDate').isISO8601().toDate().withMessage('Valid end date is required'),
    body('value').isNumeric().withMessage('Value is required and must be numeric'),
    body('client').isMongoId().withMessage('Valid client ID is required'),
    body('projectType').isMongoId().withMessage('Valid project type ID is required'),
    body('university').isMongoId().withMessage('Valid university ID is required'),
    body('stage').isMongoId().withMessage('Valid stage ID is required')
  ];
}

export function validationUpdateProject() {
  return [
    body('number').optional().isString().isLength({ min: 1 }).withMessage('Unique project number is required'),
    body('title').optional().isString().isLength({ min: 3 }).withMessage('Title should be at least 3 characters long'),
    body('startDate').optional().isISO8601().toDate().withMessage('Valid start date is required'),
    body('endDate').optional().isISO8601().toDate().withMessage('Valid end date is required'),
    body('value').optional().isNumeric().withMessage('Value must be numeric'),
    body('client').optional().isMongoId().withMessage('Valid client ID is required'),
    body('projectType').optional().isMongoId().withMessage('Valid project type ID is required'),
    body('university').optional().isMongoId().withMessage('Valid university ID is required'),
    body('stage').optional().isMongoId().withMessage('Valid stage ID is required')
  ];
}
