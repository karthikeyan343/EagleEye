import { Router } from 'express';
import contactRoutes from './contact.routes';
import quoteRoutes from './quote.routes';

const apiRouter = Router();

apiRouter.use('/', contactRoutes);
apiRouter.use('/', quoteRoutes);

export default apiRouter;
