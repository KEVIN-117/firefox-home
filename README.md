[/settings/NSClient/server]
; Desactivamos la contraseña (esto es lo que faltaba)
password = 
insecure = true
allowed hosts = 192.168.11.0/24,127.0.0.1
port = 12489
bind to = 0.0.0.0

[/settings/NRPE/server]
; También para NRPE (por si acaso)
insecure = true
allowed hosts = 192.168.11.0/24,127.0.0.1
