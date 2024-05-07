import { Router } from './router.js'

const router = new Router();

router.add('/', "/pages/home.html")
router.add('/universe', '/pages/universe.html');
router.add('/explore', '/pages/explore.html');
router.add(404, '/pages/404.html');

router.handleRoute()

window.onpopstate = () => router.handleRoute();
window.route = () => router.route();
