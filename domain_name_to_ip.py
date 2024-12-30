import socket
def domain_into_ip():
    domain = input("Enter The Domain Name :")
    try:
        s=socket.gethostbyname(domain)
        print(f"The IP Address of {domain} is : {s}")
    except socket.gaierror:
        print(f"Could not Resolve {domain}")

a=input("Did You Want to Start The Program or Not Press yes/no :")
if a=="yes":
    domain_into_ip()
else:
    exit()
while a=="yes":
    domain_into_ip()
