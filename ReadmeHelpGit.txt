.…or create a new repository on the command line
echo "# clase5" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/facu09/clase5.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/facu09/clase5.git
git branch -M main
git push -u origin main


git remote set-url Origin git://new.url.her
	ej: 
	git remote set-url origin https://github.com/facu09/ahorcado_nucba.git
		--> anduvo

para borrarlo
	git remote remove Origin

y agregar un nuevo repositorio 

	git remote add Origin new-url

=====================================================
echo "# ahorcado_nucba" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/facu09/ahorcado_nucba.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/facu09/ahorcado_nucba.git
git branch -M main
git push -u origin main
