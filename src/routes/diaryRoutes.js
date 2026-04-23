import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntry,
} from '../controllers/diaryController.js';
import {
  createDiarySchema,
  updateDiarySchema,
  diaryIdSchema,
} from '../validations/diaryValidation.js';

import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use('/diaries', authenticate);

router.post('/diaries', celebrate(createDiarySchema), createEntry);

router.get('/diaries', getAllEntries);

router.patch(
  '/diaries/:id',
  celebrate(diaryIdSchema),
  celebrate(updateDiarySchema),
  updateEntry,
);

router.delete('/diaries/:id', celebrate(diaryIdSchema), deleteEntry);

export default router;
