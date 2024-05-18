	criaGround function () {
	     var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);
         var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
         groundMaterial.diffuseTexture = new BABYLON.Texture("texturas/chao1.png", scene);
         groundMaterial.diffuseTexture.uScale = 6;
         groundMaterial.diffuseTexture.vScale = 6;
         groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
         ground.material = groundMaterial;
		 return ground;
    }