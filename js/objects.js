function createDiceTower(){
    const diceTower = new THREE.Group()
    
    /////// Dice Tower //////////////////////////
    // Materials
    const diceTowerMaterial = new THREE.MeshToonMaterial({color: 0xa8a8a8 });
    const diceTowerLiningMaterial = new THREE.MeshToonMaterial({color: 0x6c6d94});
    const whiteMaterial = new THREE.MeshToonMaterial({color: 0xece8ed});

    // Geometries
    const diceTowerWallSidesGeometry = new THREE.BoxGeometry(1.5,4,0.2);
    const diceTowerWallBackGeometry = new THREE.BoxGeometry(0.2,4,1.69);
    const diceTowerFrontGeometry = new THREE.BoxGeometry(0.2,2.5,1.69);
    const diceTowerBottomGeometry = new THREE.BoxGeometry(4, 0.2, 1.69);
    const diceTowerBottomSidesGeometry = new THREE.BoxGeometry(4, 0.5, 0.2);
    const diceTowerBottomFrontGeometry = new THREE.BoxGeometry(0.2, 0.5, 1.69);
    const diceTowerLiningGeometry = new THREE.BoxGeometry(3.9, 0.1, 1.69);
    const diceTowerPaperGeometry = new THREE.BoxGeometry(0.2,2.25,1.25);

    // Meshes
    const diceTowerWall1 = new THREE.Mesh(diceTowerWallSidesGeometry, diceTowerMaterial); 
    const diceTowerWall2 = new THREE.Mesh(diceTowerWallSidesGeometry, diceTowerMaterial); 
    const diceTowerWall3 = new THREE.Mesh(diceTowerWallBackGeometry, diceTowerMaterial); 
    const diceTowerWall4 = new THREE.Mesh(diceTowerFrontGeometry, diceTowerMaterial); 
    const diceTowerBottom = new THREE.Mesh(diceTowerBottomGeometry, diceTowerMaterial); 
    const diceTowerBottomSides1 = new THREE.Mesh(diceTowerBottomSidesGeometry, diceTowerMaterial);
    const diceTowerBottomSides2 = new THREE.Mesh(diceTowerBottomSidesGeometry, diceTowerMaterial);
    const diceTowerBottomFront = new THREE.Mesh(diceTowerBottomFrontGeometry, diceTowerMaterial);
    const diceTowerLining = new THREE.Mesh(diceTowerLiningGeometry, diceTowerLiningMaterial);
    const diceTowerPaper = new THREE.Mesh(diceTowerPaperGeometry, whiteMaterial);

    // Positions
    diceTowerWall2.position.z = -1.5;
    diceTowerWall3.position.set(-.75, 0 ,-.75);
    diceTowerWall4.position.set(.75, .75 ,-.75);
    diceTowerBottom.position.set(1.15, -2,-.75);
    diceTowerBottomSides1.position.set(1.15,-1.75,0);
    diceTowerBottomSides2.position.set(1.15,-1.75,-1.5);
    diceTowerBottomFront.position.set(3.05,-1.75,-.75);
    diceTowerLining.position.set(1.15, -1.9,-.75);
    diceTowerPaper.position.set(.76, .75 ,-.75);

    // Rotation

    diceTower.add(diceTowerWall1, diceTowerWall2, diceTowerWall3, diceTowerWall4, diceTowerBottom, diceTowerBottomSides1,diceTowerBottomSides2, diceTowerBottomFront, diceTowerLining, diceTowerPaper);
    
    /////// Dice //////////////////////////
    
    // Materials
    const blueMaterial = new THREE.MeshToonMaterial({color: 0x96c1d9});
    const yellowMaterial = new THREE.MeshToonMaterial({color: 0xedbc7b});
    const greenMaterial = new THREE.MeshToonMaterial({color: 0x90d6b9});
    const orangeMaterial = new THREE.MeshToonMaterial({color: 0xf5aa84});
    const pinkMaterial = new THREE.MeshToonMaterial({color: 0xe2a4ed});

    // Geometries
    const d4Geometry = new THREE.TetrahedronGeometry(0.25);
    const d6Geometry = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const d8Geometry = new THREE.OctahedronGeometry(0.25);
    const d12Geometry = new THREE.DodecahedronGeometry(0.25);
    const d20Geometry = new THREE.IcosahedronGeometry(0.25);

    // Meshes
    const d12 = new THREE.Mesh(d12Geometry,blueMaterial);
    const d20 = new THREE.Mesh(d20Geometry,yellowMaterial);
    const d8 = new THREE.Mesh(d8Geometry, greenMaterial);
    const d4 = new THREE.Mesh(d4Geometry,orangeMaterial);
    const d6 = new THREE.Mesh(d6Geometry, pinkMaterial);

    // Positions
    d4.position.set(2.4, -1.75, -.9);
    d6.position.set(1.15, -1.65, -1.14);
    d8.position.set(1.9, -1.75, -.6);
    d12.position.set(1.15,-1.75,-.5);
    d20.position.set(1.9,-1.75,-1.2);
    
    // Rotations
    d4.rotation.x = -.75;
    d4.rotation.y = -.75;
    d8.rotation.z = 2.2;
    d8.rotation.y = -.5;
    
    diceTower.add(d8, d12, d20, d4, d6);
    return diceTower;
}