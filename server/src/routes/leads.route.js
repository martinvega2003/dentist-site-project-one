import { Router } from 'express' //Importamos Rouer de express
import { leadsController } from '../controllers/leads.controller.js'

const router = Router() //Guardamos la funcion Router en una constante y la exportamos. 
//En app.js, podemos importar esta constante para tener todas las rutas de users definidas aqui

router.route('/booking')
    .post(leadsController.bookClient)

router.route('/magnet')
    .post(leadsController.magnetLead)

router.route('/message')
    .post(leadsController.receiveMessageLead)

router.route('/newsletter')
    .post(leadsController.newsletterLead)

export default router