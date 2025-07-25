# Cara Debug

- **Logging**: Gunakan `logging.NewLogger()` (berbasis logrus), log error/info di setiap handler dan service.
- **Health Check**: Endpoint `/healthz` untuk cek status API.
- **Debug API**: Jalankan server lokal (`go run main.go` atau `make serve` jika ada), gunakan Postman/curl untuk testing endpoint.
- **Database Debug**: Enable query logging di ORM (`bun/extra/bundebug`).
- **Error Handling**: Selalu return error dengan log yang jelas, gunakan middleware untuk recover panic.
- **Hot Reload (opsional)**: Gunakan tools seperti `air` atau `reflex` untuk auto-reload saat develop.
