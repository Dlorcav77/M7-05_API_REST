
export const middle = async(req, res, next) => {
    const parametros = req.parametros;
    const url = req.url;

    console.log(`
        hoy ${new Date()}
        se ha recibido una consulta en la ruta ${url}`);
    next()
}