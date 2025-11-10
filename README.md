```
# If you want to fill this file with all avalible options run the following command:
#   nscp settings --generate --add-defaults --load-all
# If you want to activate a module and bring in all its options use:
#   nscp settings --activate-module <MODULE NAME> --add-defaults
# For details run: nscp settings --help


; Undocumented section
[/modules]

; NSClientServer - A server that listens for incoming check_nt connection and processes incoming requests.
NSClientServer = 1

; CheckNSCP - Use this module to check the health and status of NSClient++ it self
CheckNSCP = 1

; NSCAClient - NSCA client can be used both from command line and from queries to submit passive checks via NSCA
NSCAClient = 1

; CheckWMI - Check status via WMI
CheckWMI = 1

; CheckEventLog - Check for errors and warnings in the event log.
CheckEventLog = 1

; NRPEServer - A server that listens for incoming NRPE connection and processes incoming requests.
NRPEServer = 1

; CheckHelpers - Various helper function to extend other checks.
CheckHelpers = 1

; CheckDisk - CheckDisk can check various file and disk related things.
CheckDisk = 1

; CheckSystem - Various system related checks, such as CPU load, process state, service state memory usage and PDH counters.
CheckSystem = 1

; CheckExternalScripts - Module used to execute external scripts
CheckExternalScripts = 1

[/settings/NSClient/server] 
; Desactivamos la contraseña (esto es lo que faltaba) 
password = 
insecure = true 
allowed hosts = 192.168.11.0/24,127.0.0.1 
port = 12489 
bind to = 0.0.0.0
allow argumnets = true
allow nasty characters = true

[/settings/NRPE/server] 
; También para NRPE (por si acaso) 
insecure = true 
allowed hosts = 192.168.11.0/24,127.0.0.1
```
