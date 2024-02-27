# Nombre de fichiers à créer
nombre_de_fichiers = 12

# Boucle pour créer les fichiers
for i in range(1, nombre_de_fichiers+1):
    nom_fichier = f"fpsb{i}.html"
    with open(nom_fichier, "w") as fichier:
        # Écriture dans le fichier
        fichier.write("<!DOCTYPE html>\n")
        fichier.write("<html>\n")
        fichier.write("<head>\n")
        fichier.write("<title>Titre du fichier</title>\n")
        fichier.write("</head>\n")
        fichier.write("<body>\n")
        fichier.write(f"<h1>Fichier {i}</h1>\n")
        fichier.write("</body>\n")
        fichier.write("</html>")
    print(f"Le fichier {nom_fichier} a été créé.")