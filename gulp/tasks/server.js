export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` //* Откуда запустить файлы
        },
        notify: false, //* Показать сообщения в браузере
        port: 3000,
    });
}